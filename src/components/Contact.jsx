import { createElement, useRef } from "react";
import { content } from "../Content";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const { Contact } = content;
  const form = useRef();

  // Sending Email
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
          // Clear all input field values
          form.current.reset();
          // Success toast message
          toast.success("Email sent successfully");
        },
        (error) => {
          console.log(error.text);
          toast.error(error.text);
        }
      );
  };

  return (
    <section
      style={{
        background: "linear-gradient(135deg, #101012 0%, #101012 100%)",
      }}
      className="bg-dark_primary text-white w-full"
      
      id="contact"
    >
      <Toaster />
      <div className="max-w-6xl mx-auto px-2 sm:px-4 md:px-8 py-8 md:py-14 w-full">
        <h2
          className="title !text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
          data-aos="fade-down"
        >
          {Contact.title}
        </h2>
        <h4
          className="subtitle text-base sm:text-lg md:text-xl"
          data-aos="fade-down"
        >
          {Contact.subtitle}
        </h4>
        <br />
        <div className="flex flex-col md:flex-row gap-8 md:gap-10 w-full">
          <form
            ref={form}
            onSubmit={sendEmail}
            data-aos="fade-up"
            className="flex-1 flex flex-col gap-4 sm:gap-5 w-full min-w-0"
          >
            {/* Input Name as same as email js templates values */}
            <input
              type="text"
              name="from_name"
              placeholder="Name"
              required
              className="border border-[#56514D] p-3 rounded bg-transparent text-white placeholder-gray-400"
            />
            <input
              type="email"
              name="user_email"
              pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
              placeholder="Email Id"
              required
              className="border border-[#56514D] p-3 rounded bg-transparent text-white placeholder-gray-400"
            />
            <textarea
              name="message"
              placeholder="Message"
              className="border border-[#56514D] p-3 rounded h-44 bg-transparent text-white placeholder-gray-400"
              required
            ></textarea>
            <button className="btn self-start bg-white text-dark_primary hover:bg-[#BFAF92] hover:text-[#3B3835] hover:border-[#BFAF92] border-2 border-transparent transition-all duration-300">
              Submit
            </button>
          </form>

          <div className="flex-1 w-full min-w-0 mt-8 md:mt-0">
            <h3 className="text-xl font-bold text-white mb-6">
              Connect With Me
            </h3>

            {/* Professional Contacts */}
            <div className="mb-6">
              <div className="grid grid-cols-1 gap-3 w-full">
                {Contact.social_media
                  .filter((item) => item.category === "professional")
                  .map((content, i) => (
                    <div
                      key={i}
                      data-aos="fade-right"
                      data-aos-delay={i * 100}
                      className="flex items-center gap-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300 group"
                    >
                      <div className="text-2xl text-[#BFAF92] group-hover:scale-110 transition-transform duration-300">
                        {createElement(content.icon)}
                      </div>
                      <a
                        className="font-Poppins text-white hover:text-[#BFAF92] transition-colors duration-300 flex-1"
                        href={content.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {content.text}
                      </a>
                    </div>
                  ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="mb-6">
              <div className="grid grid-cols-2 gap-3 w-full">
                {Contact.social_media
                  .filter((item) => item.category === "social")
                  .map((content, i) => (
                    <div
                      key={i}
                      data-aos="fade-up"
                      data-aos-delay={i * 100}
                      className="flex items-center gap-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300 group"
                    >
                      <div className="text-xl text-[#BFAF92] group-hover:scale-110 transition-transform duration-300">
                        {createElement(content.icon)}
                      </div>
                      <a
                        className="font-Poppins text-white hover:text-[#BFAF92] transition-colors duration-300 text-sm"
                        href={content.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {content.text}
                      </a>
                    </div>
                  ))}
              </div>
            </div>

            {/* Quick Contact Section */}
            <div className="p-4 bg-[#BFAF92]/20 rounded-lg border border-[#BFAF92]/30">
              <h4 className="text-lg font-semibold text-white mb-2">
                Quick Contact
              </h4>
              <p className="text-[#BFAF92] text-sm">
                Available for freelance projects and collaborations. Let's build
                something amazing together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
