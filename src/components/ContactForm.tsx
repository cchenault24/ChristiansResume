import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Card from "./Card";
import { sharedStyles } from "../styles/shared";
import { animations } from "../utils/animations";
import emailjs from "@emailjs/browser";
import DOMPurify from "dompurify";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [lastSubmission, setLastSubmission] = useState<number>(0);
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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

    setStatus("loading");

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
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
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
          hover:border-accent
          transition-colors duration-300
          relative
        `}
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div>
            <label htmlFor="name" className="text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full bg-gray-900 rounded-lg border border-gray-700 focus:border-accent focus:ring-2 focus:ring-accent/20 px-4 py-2 mt-1"
            />
          </div>

          <div>
            <label htmlFor="email" className="text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full bg-gray-900 rounded-lg border border-gray-700 focus:border-accent focus:ring-2 focus:ring-accent/20 px-4 py-2 mt-1"
            />
          </div>

          <div>
            <label htmlFor="message" className="text-gray-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={4}
              className="w-full bg-gray-900 rounded-lg border border-gray-700 focus:border-accent focus:ring-2 focus:ring-accent/20 px-4 py-2 mt-1"
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="bg-accent text-white px-6 py-3 rounded hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {status === "loading" ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
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
                className="text-green-500 text-center bg-green-500/10 py-2 px-4 rounded shadow-lg backdrop-blur-sm"
              >
                Message sent successfully! ✨
              </motion.div>
            )}
            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="text-red-500 text-center bg-red-500/10 py-2 px-4 rounded shadow-lg backdrop-blur-sm"
              >
                Failed to send message. Please try again.
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </Card>
    </motion.div>
  );
};

export default ContactForm;
