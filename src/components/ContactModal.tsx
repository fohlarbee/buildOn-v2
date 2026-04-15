"use client";

import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Loader2, CheckCircle2, X } from "lucide-react";
import { toast } from "sonner";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [isPending, setIsPending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  // Prevent scrolling on the body when the modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      // Reset form state when closed so they can send another one later
      setTimeout(() => setIsSent(false), 300);
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const templateParams = {
      name: formData.get("name") as string,
      user_email: formData.get("user_email") as string,
      message: formData.get("message") as string,
      title: "New Website Inquiry",
      time: new Date().toLocaleString(),
    };

    //  OPTIMISTIC UI: Instantly show the success screen! No waiting.
    setIsSent(true);

    emailjs
      .send(
        process.env.SERVICE_ID!,
        process.env.TEMPLATE_ID!,
        templateParams,
        process.env.PUBLIC_KEY!,
      )
      .then(
        () => {
          console.log("Email silently delivered.");
          toast.success("Your message was sent successfully!");
        },
        (error) => {
          console.error("EmailJS Error:", error.text);

          setIsSent(false);
          toast.error(
            "Network error. Your message didn't go through. Please try again.",
          );
        },
      );
  };

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-all duration-300 ${
        isOpen
          ? "visible bg-black/60 backdrop-blur-sm"
          : "invisible bg-black/0 backdrop-blur-none"
      }`}
      onClick={onClose}
    >
      <div
        className={`relative w-full max-w-md overflow-hidden rounded-[24px] border border-white/10 bg-[#0f1729] p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-5 top-5 rounded-full p-2 text-white/50 transition-colors hover:bg-white/10 hover:text-white focus:outline-none"
        >
          <X className="size-5" />
        </button>

        {isSent ? (
          <div className="flex flex-col items-center justify-center gap-4 py-8 text-white">
            <div className="rounded-full bg-green-500/20 p-3">
              <CheckCircle2 className="size-12 text-green-400" />
            </div>
            <p className="font-display text-2xl font-bold">Message Sent!</p>
            <p className="text-center text-sm text-white/70">
              Thanks for reaching out to BuildON. <br /> We will get back to you
              shortly.
            </p>
            <button
              onClick={onClose}
              className="mt-4 w-full cursor-pointer rounded-xl bg-white/10 py-3 font-semibold text-white transition-colors hover:bg-white/20"
            >
              Close Window
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <h2 className="font-display text-2xl font-bold text-white">
                Contact Support
              </h2>
              <p className="text-sm text-white/60">
                Send a message to support@buildonhq.org
              </p>
            </div>

            {/* Notice we removed ref={formRef} since we are using FormData now */}
            <form onSubmit={sendEmail} className="flex flex-col gap-4">
              {/* NEW: Name Input */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-white/80">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-white placeholder:text-white/30 transition-all focus:border-[#0194ec] focus:bg-white/5 focus:outline-none focus:ring-1 focus:ring-[#0194ec]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-white/80">
                  Your Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  required
                  placeholder="name@company.com"
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-white placeholder:text-white/30 transition-all focus:border-[#0194ec] focus:bg-white/5 focus:outline-none focus:ring-1 focus:ring-[#0194ec]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-white/80">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="How can we help you?"
                  className="w-full resize-none rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-white placeholder:text-white/30 transition-all focus:border-[#0194ec] focus:bg-white/5 focus:outline-none focus:ring-1 focus:ring-[#0194ec]"
                />
              </div>

              <button
                type="submit"
                disabled={isPending}
                className="mt-2 flex h-12 w-full cursor-pointer items-center justify-center rounded-xl bg-[#0194ec] font-semibold text-white shadow-[0_0_20px_rgba(1,148,236,0.3)] transition-all hover:bg-blue-500 hover:shadow-[0_0_25px_rgba(1,148,236,0.5)] disabled:opacity-70"
              >
                {isPending ? (
                  <Loader2 className="size-5 animate-spin" />
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
