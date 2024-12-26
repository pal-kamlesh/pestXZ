const Footer = () => {
  return (
    <footer className="bg-[#003229] text-white py-12">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Logo & About */}
          <div>
            <h2 className="text-2xl font-bold text-[#FBBF24] mb-4">Epcorn</h2>
            <p className="text-sm">
              Protecting homes and securing health since 1972. With over 50
              years of experience, we bring eco-friendly and professional pest
              control solutions to your doorstep.
            </p>
          </div>
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-[#FBBF24] mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-[#F59E0B] transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#F59E0B] transition">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#F59E0B] transition">
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#why-choose-us"
                  className="hover:text-[#F59E0B] transition"
                >
                  Why Choose Us
                </a>
              </li>
            </ul>
          </div>
          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-[#FBBF24] mb-4">
              Contact Us
            </h3>
            <p className="text-sm mb-2">
              📞
              <a
                href="tel:+1234567890"
                className="hover:text-[#F59E0B] transition"
              >
                6138 6600 / 26615745 / 66914400
              </a>
            </p>
            <p className="text-sm mb-2">
              📧{" "}
              <a
                href="mailto:contact@epconr.com"
                className="hover:text-[#F59E0B] transition"
              >
                epcorn@yahoo.in
              </a>
            </p>
            <p className="text-sm">
              📍 Door No. S - 5, 2nd Floor, Khira Industrial Estate, VM Bhargav
              Rd, Khira Nagar, Santacruz (West), Mumbai, Maharashtra 400054
            </p>
          </div>
        </div>
        <hr className="border-t border-[#014739] my-8" />
        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm">
          <p>&copy; 2024 Epconr. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#F59E0B] transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#F59E0B] transition">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
