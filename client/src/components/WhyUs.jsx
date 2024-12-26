const WhyChooseUs = () => {
  return (
    <section className="bg-[#FBF6E9] text-[#003229] py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Why <span className="text-[#013A31]">Choose Us</span>
        </h2>
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="flex items-start space-x-4">
            <div className="text-4xl">👩‍🔧</div>
            <div>
              <h3 className="text-xl font-semibold">
                Experienced & Certified Team
              </h3>
              <p className="text-sm">
                Our licensed technicians bring decades of expertise to every
                job.
              </p>
            </div>
          </div>
          {/* Feature 2 */}
          <div className="flex items-start space-x-4">
            <div className="text-4xl">✅</div>
            <div>
              <h3 className="text-xl font-semibold">Guaranteed Results</h3>
              <p className="text-sm">
                We ensure effective pest control solutions that you can trust.
              </p>
            </div>
          </div>
          {/* Feature 3 */}
          <div className="flex items-start space-x-4">
            <div className="text-4xl">⏰</div>
            <div>
              <h3 className="text-xl font-semibold">24/7 Emergency Service</h3>
              <p className="text-sm">
                We&apos;re here for you anytime to handle urgent pest issues.
              </p>
            </div>
          </div>
          {/* Feature 4 */}
          <div className="flex items-start space-x-4">
            <div className="text-4xl">🌿</div>
            <div>
              <h3 className="text-xl font-semibold">
                Eco-Friendly & Safe Methods
              </h3>
              <p className="text-sm">
                We use environmentally safe practices to protect your family and
                pets.
              </p>
            </div>
          </div>
          {/* Feature 5 */}
          <div className="flex items-start space-x-4">
            <div className="text-4xl">🌟</div>
            <div>
              <h3 className="text-xl font-semibold">Customer Reviews</h3>
              <p className="text-sm">
                &quot;Epcorn exceeded my expectations! My home is pest-free and
                safe again.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
