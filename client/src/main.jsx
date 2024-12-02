import { createRoot } from "react-dom/client";
import "./index.css";
import Layout from "./layout/Layout.jsx";
import Header from "./layout/Header.jsx";
import Footer from "./layout/Footer.jsx";
import SecondNav from "./components/SecondNav.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <Layout Header={<Header />} Footer={<Footer />}>
      <div className="container">
        <SecondNav />
      </div>
    </Layout>
  </>
);
