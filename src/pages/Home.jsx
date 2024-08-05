import SectionOne from "../components/homePage/sectionOne/SectionOne";
import Aboutus from "../components/homePage/aboutUs/Aboutus";
import Work from "../components/homePage/works/Work";
import BookApp from "../components/homePage/bookApp/BookApp";
import Services from "../components/homePage/servicesSection/Services";
import Testimonial from "../components/homePage/testimonial/Testimonial";
import News from "../components/homePage/news/News";
import "./pages.css";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <SectionOne />
      <Aboutus />
      <Work />
      <BookApp />
      <Services />
      <Testimonial />
      <News />
    </>
  );
};

export default Home;
