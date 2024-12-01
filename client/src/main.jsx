import { createRoot } from "react-dom/client";
import "./index.css";
import Layout from "./layout/Layout.jsx";
import Header from "./layout/Header.jsx";
import Footer from "./layout/Footer.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <Layout Header={<Header />} Footer={<Footer />}>
      <div className="container">
        <h2>content start</h2>
      </div>
    </Layout>
  </>
);
