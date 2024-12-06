import { createRoot } from "react-dom/client";
import "./index.css";
import Layout from "./layout/Layout.jsx";
import Header from "./layout/Header.jsx";
import Footer from "./layout/Footer.jsx";
import SecondNav from "./components/SecondNav.jsx";
import Banner from "./components/Banner/Banner.jsx";
import HorizontalSlide from "./components/HorizontalSlide.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <Layout Header={<Header />} Footer={<Footer />}>
      <SecondNav />
      <Banner />
      <HorizontalSlide />
    </Layout>
  </>
);
