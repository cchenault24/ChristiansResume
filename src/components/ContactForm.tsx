import emailjs from "@emailjs/browser";
import DOMPurify from "dompurify";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { sharedStyles } from "../styles/shared";
import { animations } from "../utils/animations";
import Card from "./Card";

interface FieldErrors {
  name?: string;
  email?: string;
  message?: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [lastSubmission, setLastSubmission] = useState<number>(0);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const SUBMISSION_DELAY = 30000;

  const validateInput = (input: string): boolean => {
    const suspiciousPatterns = [
      /<script/i,
      /javascript:/i,
      /data:/i,
      /vbscript:/i,
      /onload=/i,
      /onerror=/i,
    ];
    return !suspiciousPatterns.some((pattern) => pattern.test(input));
  };

  const validateField = (name: string, value: string): string | undefined => {
    if (!value.trim()) {
      return `${name === "email" ? "Email" : name === "message" ? "Message" : "Name"} is required`;
    }

    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        return "Please enter a valid email address";
      }
    }

    if (!validateInput(value)) {
      return "Invalid input detected";
    }

    return undefined;
  };

  const validateAllFields = (): boolean => {
    const errors: FieldErrors = {};
    let isValid = true;

    Object.keys(formData).forEach((key) => {
      const fieldName = key as keyof typeof formData;
      const error = validateField(fieldName, formData[fieldName]);
      if (error) {
        errors[fieldName] = error;
        isValid = false;
      }
    });

    setFieldErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Mark all fields as touched
    setTouched({ name: true, email: true, message: true });

    // Validate all fields
    if (!validateAllFields()) {
      setStatus("error");
      setErrorMessage("Please fix the errors below");
      return;
    }

    const now = Date.now();
    if (now - lastSubmission < SUBMISSION_DELAY) {
      setStatus("error");
      setErrorMessage(
        `Please wait ${Math.ceil((SUBMISSION_DELAY - (now - lastSubmission)) / 1000)} seconds before submitting another message`
      );
      return;
    }

    const sanitizedData = {
      name: DOMPurify.sanitize(formData.name.trim()),
      email: DOMPurify.sanitize(formData.email.trim()),
      message: DOMPurify.sanitize(formData.message.trim()),
    };

    setStatus("loading");
    setErrorMessage("");
    setFieldErrors({});

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
        {
          from_name: sanitizedData.name,
          from_email: sanitizedData.email,
          message: sanitizedData.message,
          received_date: new Date().toLocaleString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            timeZoneName: "short",
          }),
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
      );

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setFieldErrors({});
      setTouched({});
      setLastSubmission(now);
    } catch (error) {
      setStatus("error");
      setErrorMessage("Failed to send message. Please try again.");
    }
  };

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (status === "success") {
      timeoutId = setTimeout(() => {
        setStatus("idle");
      }, 5000);
    }
    return () => clearTimeout(timeoutId);
  }, [status]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Real-time validation for email field
    if (touched[name] || (name === "email" && value.length > 0)) {
      const error = validateField(name, value);
      setFieldErrors((prev) => ({
        ...prev,
        [name]: error,
      }));
    }

    // Clear general error message when user starts typing
    if (errorMessage) {
      setErrorMessage("");
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setFieldErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  return (
    <motion.div
      variants={animations.itemVariants}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card
        className={`
          ${sharedStyles.glassmorphism} 
          backdrop-blur-lg 
          bg-opacity-20
          border border-gray-700
          hover:border-[#6366f1]/50
          hover:shadow-[0_12px_48px_rgba(0,0,0,0.4),0_0_20px_rgba(99,102,241,0.3)]
          transition-all duration-300
          relative
        `}
      >
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6"
          noValidate
        >
          <div>
            <label htmlFor="name" className="text-gray-400 block mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              onBlur={handleBlur}
              placeholder="Your name"
              required
              aria-invalid={touched.name && fieldErrors.name ? "true" : "false"}
              aria-describedby={
                touched.name && fieldErrors.name ? "name-error" : undefined
              }
              className={`w-full bg-gray-900 rounded-lg border px-4 py-3 mt-1 transition-colors focus:outline-none focus:ring-2 focus:ring-accent/20 ${
                touched.name && fieldErrors.name
                  ? "border-red-500 focus:border-red-500"
                  : "border-gray-700 focus:border-accent"
              }`}
            />
            <AnimatePresence>
              {touched.name && fieldErrors.name && (
                <motion.div
                  id="name-error"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-red-500 text-sm mt-1 flex items-center gap-1"
                  role="alert"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {fieldErrors.name}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div>
            <label htmlFor="email" className="text-gray-400 block mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              onBlur={handleBlur}
              placeholder="your.email@example.com"
              required
              aria-invalid={
                touched.email && fieldErrors.email ? "true" : "false"
              }
              aria-describedby={
                touched.email && fieldErrors.email ? "email-error" : undefined
              }
              className={`w-full bg-gray-900 rounded-lg border px-4 py-3 mt-1 transition-colors focus:outline-none focus:ring-2 focus:ring-accent/20 ${
                touched.email && fieldErrors.email
                  ? "border-red-500 focus:border-red-500"
                  : "border-gray-700 focus:border-accent"
              }`}
            />
            <AnimatePresence>
              {touched.email && fieldErrors.email && (
                <motion.div
                  id="email-error"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-red-500 text-sm mt-1 flex items-center gap-1"
                  role="alert"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {fieldErrors.email}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div>
            <label htmlFor="message" className="text-gray-400 block mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              onBlur={handleBlur}
              placeholder="Your message here..."
              required
              rows={4}
              aria-invalid={
                touched.message && fieldErrors.message ? "true" : "false"
              }
              aria-describedby={
                touched.message && fieldErrors.message
                  ? "message-error"
                  : undefined
              }
              className={`w-full bg-gray-900 rounded-lg border px-4 py-3 mt-1 transition-colors focus:outline-none focus:ring-2 focus:ring-accent/20 resize-y ${
                touched.message && fieldErrors.message
                  ? "border-red-500 focus:border-red-500"
                  : "border-gray-700 focus:border-accent"
              }`}
            />
            <AnimatePresence>
              {touched.message && fieldErrors.message && (
                <motion.div
                  id="message-error"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-red-500 text-sm mt-1 flex items-center gap-1"
                  role="alert"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {fieldErrors.message}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {errorMessage && (
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="text-red-500 text-center bg-red-500/10 py-3 px-4 rounded shadow-lg backdrop-blur-sm border border-red-500/20 flex items-center justify-center gap-2"
                role="alert"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                {errorMessage}
              </motion.div>
            </AnimatePresence>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="bg-accent text-white px-6 py-3 rounded-lg hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-h-[44px] focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors font-medium"
            aria-label="Send message"
          >
            {status === "loading" ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </button>

          <AnimatePresence mode="wait">
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="text-green-500 text-center bg-green-500/10 py-3 px-4 rounded-lg shadow-lg backdrop-blur-sm border border-green-500/20 flex items-center justify-center gap-2"
                role="alert"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Message sent successfully! ✨
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </Card>
    </motion.div>
  );
};

export default ContactForm;
