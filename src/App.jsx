import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import OurTeam from "./pages/OurTeam";
import Faq from "./pages/Faq";
import Booking from "./pages/Booking";
import LoginReg from "./pages/LoginReg";
import Reagister from "./pages/Reagister";
import Services from "./pages/Services";
import ServicesDetails from "./pages/ServicesDetails";
import Blogs from "./pages/Blogs";
import BlogDetail from "./pages/BlogDetail";
import Contact from "./pages/Contact";

import "./App.css";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/ourTeam" element={<OurTeam />} />
        <Route exact path="/faq" element={<Faq />} />
        <Route exact path="/booking" element={<Booking />} />
        <Route exact path="/login" element={<LoginReg />} />
        <Route exact path="/register" element={<Reagister />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/services/details" element={<ServicesDetails />} />
        <Route exact path="/blogs" element={<Blogs />} />
        <Route exact path="/blogs/details" element={<BlogDetail />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
