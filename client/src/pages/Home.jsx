import {
  AboutUs,
  Accordian,
  ContactUs,
  GetInTouch,
  HeroSection,
  ShiftingDropDown,
  Topbar,
  WhyChooseUs,
} from "../components/index.js";
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

      <ShiftingDropDown />
    </div>
  );
}

export default Home;
