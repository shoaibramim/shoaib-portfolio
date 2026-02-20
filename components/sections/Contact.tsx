import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "../ui/Section";
import { Button } from "../ui/Button";
import { profileData } from "../../data/portfolioData";
import { MdEmail, MdLocationOn, MdCheckCircle } from "react-icons/md";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("submitting");

    try {
      const recipientEmail = import.meta.env.VITE_CONTACT_EMAIL;

      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("message", formData.message);
      formDataToSend.append(
        "_subject",
        `Portfolio contact from ${formData.name}`,
      );
      formDataToSend.append("_captcha", "false");
      formDataToSend.append("_template", "table");

      const response = await fetch(`https://formsubmit.co/${recipientEmail}`, {
        method: "POST",
        body: formDataToSend,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Section
      id="contact"
      title="Get In Touch"
      subtitle="Have a project in mind or want to collaborate? Let's talk."
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:gap-24 gap-12">
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -20 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h3 className="text-2xl font-semibold text-white mb-6">
            Contact Information
          </h3>
          <p className="text-textSecondary mb-8">
            I'm currently open for new opportunities and freelance projects.
            Whether you have a question or just want to say hi, I'll try my best
            to get back to you!
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4 text-textSecondary hover:text-white transition-colors">
              <div className="w-12 h-12 bg-bgSecondary rounded-full flex items-center justify-center text-accent">
                <MdEmail size={20} />
              </div>
              <div>
                <div className="text-sm text-gray-500">Email</div>
                <a
                  href={`mailto:${profileData.email}`}
                  className="font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {profileData.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 text-textSecondary hover:text-white transition-colors">
              <div className="w-12 h-12 bg-bgSecondary rounded-full flex items-center justify-center text-accent">
                <MdLocationOn size={20} />
              </div>
              <div>
                <div className="text-sm text-gray-500">Location</div>
                <div className="font-medium">{profileData.location}</div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, x: 20 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <form
            onSubmit={handleSubmit}
            className="bg-bgSecondary p-8 rounded-2xl border border-gray-800 space-y-6 relative overflow-hidden hover:shadow-lg hover:shadow-accent/10 transition-all duration-300"
          >
            {/* Success Overlay */}
            <AnimatePresence>
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-bgSecondary/95 backdrop-blur-sm z-10 flex flex-col items-center justify-center text-center p-6"
                >
                  <div className="w-16 h-16 bg-green-900/30 text-green-500 rounded-full flex items-center justify-center mb-4">
                    <MdCheckCircle size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    Message Sent!
                  </h4>
                  <p className="text-textSecondary text-sm">
                    Thank you for reaching out. I will get back to you as soon
                    as possible.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-400 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-bgPrimary border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-400 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-bgPrimary border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-400 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-bgPrimary border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>
            <Button
              type="submit"
              className="w-full"
              disabled={status === "submitting"}
            >
              {status === "submitting" ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </motion.div>
      </div>
    </Section>
  );
};
