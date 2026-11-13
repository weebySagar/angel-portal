import { Link } from "react-router-dom";
import { school } from "../data/content";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div>
          <p className="invite">Write to the school</p>
          <Link className="button button-light" to="/contact">
            Contact
          </Link>
        </div>
        <ul>
          <li>
            <a href={school.phoneHref}>{school.phone}</a>
          </li>
          <li>
            <a href={`mailto:${school.erasmus}`}>{school.erasmus}</a>
          </li>
          {school.socials.map((item) => (
            <li key={item.href}>
              <a href={item.href} target="_blank" rel="noreferrer">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p className="footer-legal">
        <span>{school.address}</span>
        <span>{school.licence}</span>
        <span>© {year} Ascencia Malta</span>
      </p>
      <p className="cropped-name" aria-hidden="true">
        Ascencia
      </p>
    </footer>
  );
}
