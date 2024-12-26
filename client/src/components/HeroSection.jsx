export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative bg-[url('https://assets.onejswhomes.com/image_074933171c/image_074933171c.jpeg')] bg-cover bg-center h-[90vh] flex items-center justify-center"
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative z-10 text-center text-white px-6 md:px-12 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Say Goodbye to Pests,{" "}
          <span className="text-yellow-400">Welcome Peace!</span>
        </h1>
        <p className="text-lg md:text-2xl mb-6">
          Professional pest control services designed to keep your home and
          workplace pest-free. We ensure safe and effective solutions tailored
          for your needs.
        </p>
        <p className="italic text-sm md:text-base mb-8">
          &quot;Protecting your home. Securing your health. Every step of the
          way.&quot;
        </p>
        <div className="flex justify-center space-x-4">
          {/* CTA buttons can be added here */}
          <button className="bg-yellow-400 text-black py-3 px-6 rounded-lg font-semibold shadow-md hover:bg-yellow-500 transition">
            Get a Free Inspection
          </button>
          <button className="bg-transparent border border-yellow-400 text-yellow-400 py-3 px-6 rounded-lg font-semibold hover:bg-yellow-500 hover:text-black transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
