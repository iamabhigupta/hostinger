import Hero from "../sections/Hero";
import Layout from "../components/Layout";
import Pricing from "../sections/Pricing";
import FindDomain from "../sections/FindDomain";
import EasyToSet from "../sections/EasyToSet";
import LastSection from "../sections/LastSection";
import Timeline from "../sections/Timeline";
import Nav from "../sections/Nav";

export default function Home() {
  return (
    <Layout title="Choose Hostinger and Host Your Site for Only ₹129.00/mo">
      {/* <Nav /> */}
      <Hero />
      {/* <Pricing />
      <FindDomain />
      <Timeline />
      <EasyToSet />
      <LastSection /> */}
    </Layout>
  );
}
