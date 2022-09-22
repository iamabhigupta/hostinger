import Hero from "../sections/Hero";
import Layout from "../components/Layout";
import Pricing from "../sections/Pricing";
import FindDomain from "../sections/FindDomain";
import EasyToSet from "../sections/EasyToSet";
import LastSection from "../sections/LastSection";
import Timeline from "../sections/Timeline";
import Nav from "../sections/Nav";
import Testimonials from "../sections/Testimonials";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    Aos.init({
      duration: 800,
      offset: 100,
    });
  }, []);

  return (
    <Layout title="Choose Hostinger and Host Your Site for Only ₹129.00/mo">
      {/* <Nav /> */}
      <Hero />
      <Pricing />
      <FindDomain />
      <Timeline />
      <LastSection />
      <Testimonials />
    </Layout>
  );
}

{
  /* <EasyToSet /> */
}
