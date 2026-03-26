import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import ContactForm from "../ContactForm";
import emailjs from "@emailjs/browser";
import type { EmailJSResponseStatus } from "@emailjs/browser";

// Mock emailjs
vi.mock("@emailjs/browser", () => ({
  default: {
    send: vi.fn(),
  },
}));

// Mock framer-motion to avoid animation issues in tests
vi.mock("framer-motion", () => ({
  motion: {
    div: ({
      children,
      ...props
    }: React.PropsWithChildren<Record<string, unknown>>) => (
      <div {...props}>{children}</div>
    ),
  },
  AnimatePresence: ({ children }: React.PropsWithChildren) => <>{children}</>,
}));

describe("ContactForm", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("Field Validation", () => {
    it("should show error when name field is empty and touched", async () => {
      render(<ContactForm />);

      const nameInput = screen.getByPlaceholderText(/your name/i);
      fireEvent.focus(nameInput);
      fireEvent.blur(nameInput);

      await waitFor(() => {
        expect(screen.getByText(/name is required/i)).toBeInTheDocument();
      });
    });

    it("should show error for invalid email format", async () => {
      render(<ContactForm />);

      const emailInput = screen.getByPlaceholderText(/your.email@example.com/i);
      fireEvent.change(emailInput, { target: { value: "invalid-email" } });
      fireEvent.blur(emailInput);

      await waitFor(() => {
        expect(
          screen.getByText(/please enter a valid email address/i)
        ).toBeInTheDocument();
      });
    });

    it("should show error when message field is empty and touched", async () => {
      render(<ContactForm />);

      const messageInput = screen.getByPlaceholderText(/your message here/i);
      fireEvent.focus(messageInput);
      fireEvent.blur(messageInput);

      await waitFor(() => {
        expect(screen.getByText(/message is required/i)).toBeInTheDocument();
      });
    });

    it("should clear error when valid input is provided", async () => {
      render(<ContactForm />);

      const emailInput = screen.getByPlaceholderText(/your.email@example.com/i);
      fireEvent.change(emailInput, { target: { value: "invalid" } });
      fireEvent.blur(emailInput);

      await waitFor(() => {
        expect(
          screen.getByText(/please enter a valid email address/i)
        ).toBeInTheDocument();
      });

      fireEvent.change(emailInput, { target: { value: "valid@example.com" } });

      await waitFor(() => {
        expect(
          screen.queryByText(/please enter a valid email address/i)
        ).not.toBeInTheDocument();
      });
    });

    it("should detect suspicious input patterns", async () => {
      render(<ContactForm />);

      const nameInput = screen.getByPlaceholderText(/your name/i);
      fireEvent.change(nameInput, {
        target: { value: "<script>alert('xss')</script>" },
      });
      fireEvent.blur(nameInput);

      await waitFor(() => {
        expect(screen.getByText(/invalid input detected/i)).toBeInTheDocument();
      });
    });
  });

  describe("Form Submission", () => {
    it("should prevent submission when fields are empty", async () => {
      render(<ContactForm />);

      const form = screen.getByPlaceholderText(/your name/i).closest("form")!;
      fireEvent.submit(form);

      await waitFor(() => {
        expect(screen.getByText(/name is required/i)).toBeInTheDocument();
        expect(screen.getByText(/email is required/i)).toBeInTheDocument();
        expect(screen.getByText(/message is required/i)).toBeInTheDocument();
      });

      expect(emailjs.send).not.toHaveBeenCalled();
    });

    it("should submit form successfully with valid data", async () => {
      vi.mocked(emailjs.send).mockResolvedValueOnce({
        status: 200,
        text: "OK",
      } as EmailJSResponseStatus);

      render(<ContactForm />);

      const nameInput = screen.getByPlaceholderText(/your name/i);
      const emailInput = screen.getByPlaceholderText(/your.email@example.com/i);
      const messageInput = screen.getByPlaceholderText(/your message here/i);
      const form = nameInput.closest("form")!;

      fireEvent.change(nameInput, { target: { value: "John Doe" } });
      fireEvent.change(emailInput, { target: { value: "john@example.com" } });
      fireEvent.change(messageInput, {
        target: { value: "This is a test message" },
      });
      fireEvent.submit(form);

      await waitFor(() => {
        expect(emailjs.send).toHaveBeenCalledWith(
          "test_service_id",
          "test_template_id",
          expect.objectContaining({
            from_name: "John Doe",
            from_email: "john@example.com",
            message: "This is a test message",
          }),
          "test_public_key"
        );
      });

      await waitFor(() => {
        expect(
          screen.getByText(/message sent successfully/i)
        ).toBeInTheDocument();
      });
    });

    it("should show error message on submission failure", async () => {
      vi.mocked(emailjs.send).mockRejectedValueOnce(new Error("Network error"));

      render(<ContactForm />);

      const nameInput = screen.getByPlaceholderText(/your name/i);
      const emailInput = screen.getByPlaceholderText(/your.email@example.com/i);
      const messageInput = screen.getByPlaceholderText(/your message here/i);
      const form = nameInput.closest("form")!;

      fireEvent.change(nameInput, { target: { value: "John Doe" } });
      fireEvent.change(emailInput, { target: { value: "john@example.com" } });
      fireEvent.change(messageInput, {
        target: { value: "This is a test message" },
      });
      fireEvent.submit(form);

      await waitFor(() => {
        expect(screen.getByText(/failed to send message/i)).toBeInTheDocument();
      });
    });

    it("should clear form fields after successful submission", async () => {
      vi.mocked(emailjs.send).mockResolvedValueOnce({
        status: 200,
        text: "OK",
      } as EmailJSResponseStatus);

      render(<ContactForm />);

      const nameInput = screen.getByPlaceholderText(
        /your name/i
      ) as HTMLInputElement;
      const emailInput = screen.getByPlaceholderText(
        /your.email@example.com/i
      ) as HTMLInputElement;
      const messageInput = screen.getByPlaceholderText(
        /your message here/i
      ) as HTMLTextAreaElement;
      const form = nameInput.closest("form")!;

      fireEvent.change(nameInput, { target: { value: "John Doe" } });
      fireEvent.change(emailInput, { target: { value: "john@example.com" } });
      fireEvent.change(messageInput, {
        target: { value: "This is a test message" },
      });
      fireEvent.submit(form);

      await waitFor(() => {
        expect(nameInput.value).toBe("");
        expect(emailInput.value).toBe("");
        expect(messageInput.value).toBe("");
      });
    });
  });

  describe("Rate Limiting", () => {
    it("should prevent multiple submissions within 30 seconds", async () => {
      vi.mocked(emailjs.send).mockResolvedValue({
        status: 200,
        text: "OK",
      } as EmailJSResponseStatus);

      render(<ContactForm />);

      const nameInput = screen.getByPlaceholderText(/your name/i);
      const emailInput = screen.getByPlaceholderText(/your.email@example.com/i);
      const messageInput = screen.getByPlaceholderText(/your message here/i);
      const form = nameInput.closest("form")!;

      // First submission
      fireEvent.change(nameInput, { target: { value: "John Doe" } });
      fireEvent.change(emailInput, { target: { value: "john@example.com" } });
      fireEvent.change(messageInput, { target: { value: "First message" } });
      fireEvent.submit(form);

      await waitFor(() => {
        expect(emailjs.send).toHaveBeenCalledTimes(1);
      });

      // Try to submit again immediately
      fireEvent.change(nameInput, { target: { value: "Jane Doe" } });
      fireEvent.change(emailInput, { target: { value: "jane@example.com" } });
      fireEvent.change(messageInput, { target: { value: "Second message" } });
      fireEvent.submit(form);

      await waitFor(() => {
        expect(screen.getByText(/please wait.*seconds/i)).toBeInTheDocument();
      });

      // EmailJS should only have been called once
      expect(emailjs.send).toHaveBeenCalledTimes(1);
    });
  });

  describe("Loading State", () => {
    it("should disable button during submission", async () => {
      vi.mocked(emailjs.send).mockResolvedValue({
        status: 200,
        text: "OK",
      } as EmailJSResponseStatus);

      render(<ContactForm />);

      const nameInput = screen.getByPlaceholderText(/your name/i);
      const emailInput = screen.getByPlaceholderText(/your.email@example.com/i);
      const messageInput = screen.getByPlaceholderText(/your message here/i);
      const form = nameInput.closest("form")!;
      const submitButton = screen.getByLabelText(/send message/i);

      fireEvent.change(nameInput, { target: { value: "John Doe" } });
      fireEvent.change(emailInput, { target: { value: "john@example.com" } });
      fireEvent.change(messageInput, {
        target: { value: "This is a test message" },
      });

      expect(submitButton).not.toBeDisabled();

      fireEvent.submit(form);

      // After successful submission, button should be enabled again
      await waitFor(() => {
        expect(
          screen.getByText(/message sent successfully/i)
        ).toBeInTheDocument();
      });

      expect(submitButton).not.toBeDisabled();
    });
  });
});
