import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import DOMPurify from "dompurify";
import SectionWrapper from "./SectionWrapper";
import { sharedStyles, sectionStyles } from "../styles/shared";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

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

  const [lastSubmission, setLastSubmission] = useState<number>(0);
  const SUBMISSION_DELAY = 30000;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const now = Date.now();
    if (now - lastSubmission < SUBMISSION_DELAY) {
      setStatus("error");
      alert("Please wait before submitting another message");
      return;
    }

    const inputs = [formData.name, formData.email, formData.message];
    if (!inputs.every(validateInput)) {
      setStatus("error");
      alert("Invalid input detected");
      return;
    }

    const sanitizedData = {
      name: DOMPurify.sanitize(formData.name.trim()),
      email: DOMPurify.sanitize(formData.email.trim()),
      message: DOMPurify.sanitize(formData.message.trim()),
    };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(sanitizedData.email)) {
      setStatus("error");
      alert("Please enter a valid email address");
      return;
    }

    if (!sanitizedData.name || !sanitizedData.email || !sanitizedData.message) {
      setStatus("error");
      alert("Please fill in all fields");
      return;
    }

    setStatus("sending");

    try {
      await emailjs.send(
        "service_7ysq1ji",
        "template_cpzyctn",
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
        "lczrcemOibrFoR5aW"
      );

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setLastSubmission(now);
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
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

  return (
    <SectionWrapper id="contact" className={sectionStyles.gradient}>
      <div className={sharedStyles.container}>
        <h2 className={sharedStyles.sectionHeading}>Get In Touch</h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 max-w-2xl mx-auto"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className={sharedStyles.inputBase}
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className={sharedStyles.inputBase}
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={5}
            className={sharedStyles.inputBase}
            required
          ></textarea>
          <button
            type="submit"
            className={`${sharedStyles.buttonBase} ${
              status === "sending" ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
          {status === "idle" && (
            <p className="text-white text-center">(yes it works!)</p>
          )}

          {status === "success" && (
            <p className="text-green-500 text-center">
              Message sent successfully!
            </p>
          )}
          {status === "error" && (
            <p className="text-red-500 text-center">
              Failed to send message. Please try again.
            </p>
          )}
        </form>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
