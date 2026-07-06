import React, { useState } from "react";
import { TbMail, TbMapPin, TbBrandLinkedin, TbBrandGithub, TbSend, TbCopy, TbCheck } from "react-icons/tb";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("amandithathsaraniuni1@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }
    const subject = `Inquiry from ${name}`;
    const body = encodeURIComponent(
      `${message}\n\n---\nSent by: ${name} (${email})`
    );
    window.location.href = `mailto:amandithathsaraniuni1@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="max-w-contentContainer mx-auto py-8 xl:py-16 flex flex-col gap-6 px-4"
    >
      {/* Header */}
      <div className="flex flex-col gap-1.5">
        <h2 className="font-titleFont text-3xl md:text-4xl font-bold tracking-tight text-textLight">
          Get In Touch
        </h2>
        <p className="font-bodyFont max-w-[600px] mt-2 text-textDark text-xs md:text-sm leading-relaxed">
          Have a project in mind or want to collaborate? Feel free to reach out. I&apos;m always open to discussing new opportunities.
        </p>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-2">
        {/* Left Column: Contact Information */}
        <div className="flex flex-col gap-5 justify-between h-full bg-[#112240]/20 border border-textDark/10 p-5 md:p-6 rounded-2xl backdrop-blur-sm shadow-lg">
          <div className="flex flex-col gap-5">
            <h3 className="font-titleFont text-xl font-bold text-textLight border-b border-textDark/10 pb-3">
              Contact Information
            </h3>

            {/* Email Card */}
            <div className="flex items-start gap-3 group">
              <div className="p-2.5 bg-[#112240] text-textGreen rounded-lg border border-textDark/10 group-hover:border-textGreen/30 transition-colors duration-300">
                <TbMail className="text-lg" />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[10px] font-mono text-textDark uppercase tracking-wider font-semibold">Email</span>
                <div className="flex items-center gap-1.5">
                  <a
                    href="mailto:amandithathsaraniuni1@gmail.com"
                    className="text-xs md:text-sm text-textLight hover:text-textGreen transition-colors duration-300 font-medium"
                  >
                    amandithathsaraniuni1@gmail.com
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="text-textDark hover:text-textGreen transition-colors cursor-pointer"
                    title="Copy Email"
                  >
                    {copied ? (
                      <TbCheck className="text-xs text-textGreen" />
                    ) : (
                      <TbCopy className="text-xs" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="flex items-start gap-3 group">
              <div className="p-2.5 bg-[#112240] text-textGreen rounded-lg border border-textDark/10 group-hover:border-textGreen/30 transition-colors duration-300">
                <TbMapPin className="text-lg" />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[10px] font-mono text-textDark uppercase tracking-wider font-semibold">Location</span>
                <span className="text-xs md:text-sm text-textLight font-medium">
                  Nugegoda, Colombo
                </span>
              </div>
            </div>
          </div>

          {/* Socials Connection */}
          <div className="flex flex-col gap-2.5 mt-4 border-t border-textDark/10 pt-4">
            <span className="text-[10px] font-mono text-textGreen font-semibold uppercase tracking-wider">
              Connect With Me
            </span>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/amandi-athukorala-517aa12b6/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-[#112240] border border-textDark/10 hover:border-textGreen/30 text-textLight hover:text-textGreen flex items-center justify-center rounded-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                <TbBrandLinkedin className="text-lg" />
              </a>
              <a
                href="https://github.com/saraniz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-[#112240] border border-textDark/10 hover:border-textGreen/30 text-textLight hover:text-textGreen flex items-center justify-center rounded-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                <TbBrandGithub className="text-lg" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Send Message Form */}
        <form
          onSubmit={handleSendEmail}
          className="flex flex-col gap-5 bg-[#112240]/40 border border-textDark/10 p-5 md:p-6 rounded-2xl backdrop-blur-sm shadow-lg"
        >
          <h3 className="font-titleFont text-xl font-bold text-textLight border-b border-textDark/10 pb-3">
            Send a Message
          </h3>

          {/* Name Field */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-mono text-textGreen font-semibold">
              Your Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Amandi Thathsarani..."
              required
              className="w-full px-3.5 py-2.5 rounded-lg bg-bodyColor/60 border border-textDark/10 text-textLight text-xs outline-none focus:border-textGreen transition-colors duration-300 placeholder:text-textDark font-bodyFont"
            />
          </div>

          {/* Email Field */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-mono text-textGreen font-semibold">
              Your Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="amandi@gmail.com"
              required
              className="w-full px-3.5 py-2.5 rounded-lg bg-bodyColor/60 border border-textDark/10 text-textLight text-xs outline-none focus:border-textGreen transition-colors duration-300 placeholder:text-textDark font-bodyFont"
            />
          </div>

          {/* Message Field */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-mono text-textGreen font-semibold">
              Your Message
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Hello, I'd like to talk about..."
              required
              rows={3}
              className="w-full p-3.5 rounded-lg bg-bodyColor/60 border border-textDark/10 text-textLight text-xs outline-none focus:border-textGreen transition-colors duration-300 placeholder:text-textDark font-bodyFont resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-1.5 py-3 px-5 rounded-lg bg-textGreen text-bodyColor hover:bg-textGreen/90 transition-all duration-300 font-titleFont text-xs font-bold tracking-wide shadow-md cursor-pointer"
          >
            <TbSend className="text-base" /> Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
