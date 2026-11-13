import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const titles = {
  "/": "Ascencia Malta | We are eager to give you the best education",
  "/about": "About us | Ascencia Malta",
  "/contact": "Contact | Ascencia Malta",
};

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.classList.add("js");
  }, []);

  useEffect(() => {
    document.title = titles[pathname] ?? "Ascencia Malta";
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <a className="skip-link" href="#content">
        Skip to content
      </a>
      <Header />
      <main id="content">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
