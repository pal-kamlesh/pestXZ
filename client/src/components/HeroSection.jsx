// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

// Import required modules
import { Autoplay, EffectFade } from "swiper/modules";

export default function HeroSection() {
  const backgroundImages = [
    "https://assets.onejswhomes.com/image_074933171c/image_074933171c.jpeg",
    "https://thumbs.dreamstime.com/b/professional-pest-control-services-comprehensive-solutions-home-commercial-needs-ensure-pest-free-environment-your-350354515.jpg",
    "https://img.freepik.com/premium-photo/pest-control-specialist-setting-traps-home-pest-control_857340-10719.jpg",
    "https://s3-ap-southeast-1.amazonaws.com/urbanclap-prod/images/growth/luminosity/1631159612066-53b210.jpeg",
  ];

  return (
    <section
      id="home"
      className="relative h-[90vh] flex items-center justify-center overflow-hidden"
    >
      {/* Swiper for background images */}
      <div className="absolute inset-0">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          speed={1000}
          allowTouchMove={false}
          watchSlidesProgress={true}
          className="h-full w-full"
        >
          {backgroundImages.map((image) => (
            <SwiperSlide key={image} className="h-full w-full">
              <div
                className="h-full w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute inset-0 bg-black bg-opacity-60 z-[1]"></div>
      </div>

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
