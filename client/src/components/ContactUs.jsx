const ContactUs = () => {
  return (
    <section
      id="contact"
      className="bg-[#FBF6E9] text-[#003229] py-16 px-6 md:px-12 border border-green-500"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Get in <span className="text-[#FBBF24]">Touch</span> With Us
        </h2>
        {/* Contact Info and Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">📞 Phone</h3>
              <p>
                <a className="text-[#FBBF24] hover:text-[#F59E0B] transition">
                  6138 6600 / 26615745 / 66914400
                </a>
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">📧 Email</h3>
              <p>
                <a
                  href="mailto:contact@epconr.com"
                  className="text-[#FBBF24] hover:text-[#F59E0B] transition"
                >
                  epcorn@yahoo.in
                </a>
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">📍 Office Location</h3>
              <p>
                Door No. S - 5, 2nd Floor, Khira Industrial Estate, VM Bhargav
                Rd, Khira Nagar, Santacruz (West), Mumbai, Maharashtra 400054
              </p>
            </div>
            <div>
              {/* Map */}
              <iframe
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3412.0792204753125!2d72.83401737466545!3d19.087014351627708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9a70276371f%3A0x6fb4ff8636b324f6!2sExpress%20Pesticides%20Private%20Limited!5e1!3m2!1sen!2sin!4v1734682007215!5m2!1sen!2sin"
                width="100%"
                height="200"
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
          {/* Contact Form */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Send Us a Message</h3>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[#FBBF24]"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-2 block w-full px-4 py-2 rounded-md bg-[#014739] text-white focus:ring-[#FBBF24] focus:ring-2"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#FBBF24]"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-2 block w-full px-4 py-2 rounded-md bg-[#014739] text-white focus:ring-[#FBBF24] focus:ring-2"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[#FBBF24]"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="mt-2 block w-full px-4 py-2 rounded-md bg-[#014739] text-white focus:ring-[#FBBF24] focus:ring-2"
                  placeholder="Write your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#FBBF24] text-[#003229] py-2 px-4 rounded-md font-semibold shadow-md hover:bg-[#F59E0B] transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
