import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <Link to="/" className="logo-link" aria-label="Ascencia Malta, home" onClick={close}>
        <img src="/images/logo.svg" alt="" width="1049" height="385" />
      </Link>
      <button
        type="button"
        className="nav-toggle"
        aria-expanded={open}
        aria-controls="site-nav"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? "Close" : "Menu"}
      </button>
      <nav id="site-nav" className={open ? "site-nav is-open" : "site-nav"}>
        <ul>
          {links.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} end={link.end} onClick={close}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <Link className="button" to="/contact" onClick={close}>
          Contact
        </Link>
      </nav>
    </header>
  );
}
