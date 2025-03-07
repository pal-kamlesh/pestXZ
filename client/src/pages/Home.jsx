import {
  AboutUs,
  Accordian,
  ContactUs,
  GetInTouch,
  HeroSection,
  Topbar,
  WhyChooseUs,
} from "../components/index.js";
import SwiperComponent from "../components/SwiperComponent.jsx";
function Home() {
  return (
    <div>
      <Topbar />
      <HeroSection />
      <GetInTouch />
      <WhyChooseUs />
      <AboutUs />
      <ContactUs />
      <Accordian />
    </div>
  );
}

export default Home;
