import Head from "next/head";
import Header from "../sections/Header";
import Footer from "../sections/Footer";

const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title ? title + " - Hostinger" : "Hostinger"}</title>
        <meta
          name="description"
          content="Go online with Hostinger, make your perfect website today. Check our plans and their features. We have all you need for online success."
        />
        <meta
          name="keywords"
          content="hostinger, hostinger hosting, hostinger services, hostinger web hosting"
        />
      </Head>
      <div>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
