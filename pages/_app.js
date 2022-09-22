import { ThemeProvider } from "next-themes";
import "../styles/globals.css";
import Aos from "aos";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({
      duration: 800,
      offset: 100,
    });
  }, []);
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
