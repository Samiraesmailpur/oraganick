import Hero from "@components/Home/Hero/Hero";
import InfoCards from "@components/Home/InfoCards/InfoCards";
import About from "@components/Home/About/About";
import Categories from "@components/Home/Categories/Categories";
import Testimonial from "@components/Home/Testimonial/Testimonial";
import Offer from "@components/Home/Offer/Offer";
import EcoFriendly from "@components/Home/EcoFriendly/EcoFriendly";
import Gallery from "@components/Home/Gallery/Gallery";
import News from "@components/Home/News/News";

const HomePage = () => {
  return (
    <>
      <Hero />
      <InfoCards />
      <About />
      <Categories />
      <Testimonial />
      <Offer />
      <EcoFriendly />
      <Gallery />
      <News />
    </>
  );
};

export default HomePage;
