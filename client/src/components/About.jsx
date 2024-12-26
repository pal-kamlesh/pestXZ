const AboutUs = () => {
  return (
    <section id="about" className="bg-[#013A31] text-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          About <span className="text-[#FBBF24]">Epcorn</span>
        </h2>
        {/* Subtitle */}
        <p className="text-lg md:text-xl mb-8">
          Since 1972, we&apos;ve been protecting homes and securing health with
          professionalism and care.
        </p>
        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Company History */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Our Journey</h3>
            <p>
              Founded in 1972, Epcorn has over five decades of experience in
              pest control. From humble beginnings to being a trusted household
              name, we&apos;ve always prioritized protecting your home and
              securing your health.
            </p>
          </div>
          {/* Core Values */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Our Values</h3>
            <ul className="space-y-4">
              <li>
                🌿 <span className="font-semibold">Eco-Friendly Practices</span>
                : We care about the environment and use safe methods.
              </li>
              <li>
                👩‍🔧{" "}
                <span className="font-semibold">Customer-First Approach</span>:
                Your satisfaction and safety are our priority.
              </li>
              <li>
                📜 <span className="font-semibold">Licensed Technicians</span>:
                Our team is certified and highly trained.
              </li>
            </ul>
          </div>
        </div>
        {/* Certifications */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-4">
            Certifications & Memberships
          </h3>
          <p>
            Proud members of the{" "}
            <span className="text-[#FBBF24]">
              Indian Pest Control Association (IPCA)
            </span>{" "}
            and the{" "}
            <span className="text-[#FBBF24]">
              National Pest Management Association (NPMA)
            </span>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
