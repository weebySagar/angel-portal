import { useState } from "react";
import { Link } from "react-router-dom";
import Waterline from "../components/Waterline";
import { news, programmes, quotes } from "../data/content";

const places = [
  {
    name: "Floriana",
    photo: "/images/malta.jpg",
    alt: "Limestone churches and rooftops in Malta",
  },
  {
    name: "Paris",
    photo: "/images/paris.jpg",
    alt: "The Paris skyline at dusk",
  },
  {
    name: "Valencia",
    photo: "/images/valencia.jpg",
    alt: "A square in Valencia",
  },
  {
    name: "Valletta",
    photo: "/images/banner.jpg",
    alt: "Valletta and the sea, a short walk from Floriana",
  },
];

export default function Home() {
  const [open, setOpen] = useState(null);

  return (
    <>
      <Waterline
        line1="Ascencia"
        line2="Malta"
        support="A business school in Floriana, one walk from Valletta."
      />

      <section className="panel panel-ink" aria-labelledby="programmes-heading">
        <div className="panel-pad">
          <p id="programmes-heading" className="lead">
            Because each training course corresponds to a personal ambition, all
            our students receive individual attention. The success of each
            student is our priority.
          </p>
          <ul className="poster">
            {programmes.map((group) => {
              const expanded = open === group.short;
              return (
                <li key={group.short}>
                  <button
                    type="button"
                    className="poster-line"
                    aria-expanded={expanded}
                    onClick={() => setOpen(expanded ? null : group.short)}
                  >
                    <span>{group.short}</span>
                    <span className="poster-meta">{group.items.length}</span>
                  </button>
                  {expanded ? (
                    <ul className="course-list">
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="panel panel-paper" aria-label="Floriana">
        <div className="story">
        <p>
          <strong>Ascencia Malta</strong> is located in <mark>Floriana</mark> –
          right on the doorstep of <mark>Valletta</mark>. Floriana was meant to
          be a suburb of Valletta, but it developed to be a town on its own. A
          short walk separates the two towns. It isn’t easy to understand where
          Floriana finishes and Valletta starts, but the iconic entry to the
          capital is part of Floriana. Floriana sits in the very heart of the
          Maltese islands, with roads leading to all the bustling and major
          cities in Malta, so we can say that all the roads lead to Floriana –
          meaning that all the <mark>buses</mark> will bring you here as well.
        </p>
        <p>
          <Link className="mark-link" to="/about">
            And because there is a lot more… But you have to discover!
          </Link>
        </p>
        </div>
      </section>

      <DirectorStage />

      <section className="tile-wall" aria-label="Campuses">
        {places.map((place) => (
          <figure key={place.name} className="tile tile-photo">
            <img src={place.photo} alt={place.alt} width="800" height="800" />
            <figcaption>{place.name}</figcaption>
          </figure>
        ))}
      </section>

      <section className="panel panel-paper" aria-label="News and events">
        <div className="panel-pad">
        <ul className="news-list">
          {news.map((item) => (
            <li key={item.title}>
              <h2>{item.title}</h2>
              <p>{item.date}</p>
            </li>
          ))}
        </ul>
        </div>
      </section>

      <Link className="join-band" to="/contact">
        <span className="join-note">
          Registration is simple and totally free. The team replies from the
          contact page.
        </span>
        <svg className="join-arrow" viewBox="0 0 48 48" aria-hidden="true">
          <path d="M8 40 L36 12 M18 12 H36 V30" fill="none" stroke="currentColor" strokeWidth="3" />
        </svg>
        <span className="join-word">Join</span>
      </Link>
    </>
  );
}

function DirectorStage() {
  return (
    <section className="quote-stage" aria-labelledby="welcome-heading">
      <h2 id="welcome-heading" className="quote-title">
        Starts here
      </h2>
      <img
        src="/images/director.jpg"
        alt="Dr Tess Giordmaina, Director of Ascencia Malta"
        width="800"
        height="1000"
      />
      <div className="quote-copy">
        {quotes.map((quote) => (
          <blockquote key={quote.text}>
            <p>{quote.text}</p>
          </blockquote>
        ))}
        <p className="quote-byline">Dr Tess Giordmaina, Director</p>
      </div>
    </section>
  );
}
