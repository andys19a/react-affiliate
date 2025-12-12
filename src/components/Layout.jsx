import { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet, useLocation } from "react-router-dom";
import "../css/Layout.css";

const PARAM_PATTERNS = ["filter=", "tag=", "page=", "sort=", "utm_"];

function Layout() {
  const location = useLocation();

  useEffect(() => {
    const search = location.search.toLowerCase();
    const shouldNoIndex = PARAM_PATTERNS.some((pattern) =>
      search.includes(pattern)
    );

    let robotsMeta = document.querySelector("meta[name='robots']");
    if (!robotsMeta) {
      robotsMeta = document.createElement("meta");
      robotsMeta.setAttribute("name", "robots");
      document.head.appendChild(robotsMeta);
    }

    robotsMeta.setAttribute(
      "content",
      shouldNoIndex ? "noindex, nofollow" : "index, follow"
    );
  }, [location.search]);

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
