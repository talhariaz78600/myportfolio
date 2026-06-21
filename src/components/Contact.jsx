import { createElement, useRef } from "react";
import { content } from "../Content";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const { Contact } = content;
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, "YOUR_PUBLIC_KEY")
      .then(
        () => {
          form.current.reset();
          toast.success("Email sent successfully");
        },
        (error) => {
          toast.error(error.text);
        }
      );
  };

  return (
    <section
      style={{ background: "linear-gradient(135deg, #101012 0%, #101012 100%)" }}
      className="text-white w-full"
      id="contact"
    >
      <Toaster />
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <h2 className="title !text-white" data-aos="fade-down">
          {Contact.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {Contact.subtitle}
        </h4>
        <br />
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          {/* Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            data-aos="fade-up"
            className="flex-1 flex flex-col gap-4 w-full"
          >
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              className="border border-[#56514D] p-3 rounded-lg bg-transparent text-white placeholder-gray-400 text-sm sm:text-base focus:border-[#BFAF92] outline-none transition-colors"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="border border-[#56514D] p-3 rounded-lg bg-transparent text-white placeholder-gray-400 text-sm sm:text-base focus:border-[#BFAF92] outline-none transition-colors"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={6}
              required
              className="border border-[#56514D] p-3 rounded-lg bg-transparent text-white placeholder-gray-400 text-sm sm:text-base resize-none focus:border-[#BFAF92] outline-none transition-colors"
            />
            <button className="btn self-start bg-[#BFAF92] text-white border-[#BFAF92] hover:bg-[#A99A83] hover:border-[#A99A83] transition-all duration-300 text-sm sm:text-base">
              Send Message
            </button>
          </form>

          {/* Contact info */}
          <div className="flex-1 w-full">
            <p className="text-lg sm:text-xl font-bold text-white mb-6 font-Poppins">
              Connect With Me
            </p>

            {/* Email */}
            <div className="mb-4">
              {Contact.social_media
                .filter((item) => item.category === "professional")
                .map((item, i) => (
                  <a
                    key={i}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 sm:p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 group"
                  >
                    <div className="text-2xl text-[#BFAF92] group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      {createElement(item.icon)}
                    </div>
                    <span className="text-white text-sm sm:text-base break-all font-Poppins">
                      {item.text}
                    </span>
                  </a>
                ))}
            </div>

            {/* Social links */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
              {Contact.social_media
                .filter((item) => item.category === "social")
                .map((item, i) => (
                  <a
                    key={i}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 group"
                  >
                    <div className="text-xl text-[#BFAF92] group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      {createElement(item.icon)}
                    </div>
                    <span className="text-white text-sm font-Poppins">{item.text}</span>
                  </a>
                ))}
            </div>

            {/* CTA card */}
            <div className="p-4 sm:p-5 bg-[#BFAF92]/20 rounded-xl border border-[#BFAF92]/30">
              <p className="font-semibold text-white mb-1 font-Poppins text-sm sm:text-base">
                Open for work
              </p>
              <p className="text-[#BFAF92] text-xs sm:text-sm font-Poppins leading-relaxed">
                Available for freelance projects, full-time roles, and contract
                work. Let's build something amazing together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
