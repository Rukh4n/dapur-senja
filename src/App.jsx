import { useEffect } from "react";
import cfg from "./config.json";
import Navbar from "./components/Navbar.jsx";
import Slider from "./components/Slider.jsx";
import { Categories, Terbaru, Signature, Pilihan, Feature, Trust, Support, News } from "./components/Sections.jsx";
import Footer from "./components/Footer.jsx";
import { ChatButton } from "./components/Icons.jsx";

export default function App() {
  useEffect(() => {
    const root = document.documentElement.style;
    root.setProperty("--a", cfg.warna);
    root.setProperty("--fs", `${cfg.ukuranTeks}px`);
    document.title = `${cfg.nama} – Demo Katalog`;
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Slider />
        <Categories />
        <Terbaru />
        <Signature />
        <Pilihan />
        <Feature />
        <Trust />
        <Support />
        <News />
      </main>
      <Footer />
      <ChatButton />
    </>
  );
}
