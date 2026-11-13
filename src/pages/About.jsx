import { Link } from "react-router-dom";
import Waterline from "../components/Waterline";
import { priorities } from "../data/content";

export default function About() {
  return (
    <>
      <Waterline
        line1="We are"
        line2="Eager"
        support="To give you the best education."
      />

      <section className="panel panel-paper">
        <div className="story">
        <p>
          <strong>Ascencia’s ambition</strong> is to realize your potential of
          ascension. Through an individualized follow-up of the students, our
          teams are at your service for your future: come and present us your
          projects, and we will do our best to help you realize them.
        </p>
        <p>
          Our training courses are based on a participative and innovative
          pedagogy based on the value of the example and the constant exchange
          between learners and experienced professionals. The realities of
          corporate life are at the heart of the personalized learning methods
          we use. They are intended to identify potentials and to hatch
          vocations of managers and business developers. Our campus is also
          open to all international candidates who wish to study management in{" "}
          <mark>Malta</mark>.
        </p>
        </div>
      </section>

      <section className="panel panel-ink" aria-labelledby="excellence-heading">
        <div className="priorities">
        <h2 id="excellence-heading" className="visually-hidden">
          Excellence, a priority for Ascencia
        </h2>
        {priorities.map((item) => (
          <article key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
        </div>
      </section>

      <section className="panel panel-paper" aria-labelledby="mission-heading">
        <div className="story">
        <h2 id="mission-heading">Mission</h2>
        <p>
          At Ascencia Malta, we empower students through a student-centered
          approach that fosters critical thinking, creativity, and lifelong
          learning. We deliver high-quality education that meets rigorous
          standards and prepares graduates for success in a dynamic world.
          Together with our partnered stakeholders, we are dedicated to
          developing socially responsible leaders who champion diversity,
          inclusion, and equity, creating meaningful impact within our diverse
          community.
        </p>
        </div>
      </section>

      <section className="teachers" aria-labelledby="teachers-heading">
        <img
          src="/images/director.jpg"
          alt="Dr Tess Giordmaina, Director of Ascencia Malta"
          width="800"
          height="1000"
        />
        <div>
          <h2 id="teachers-heading">Teachers from the industry</h2>
          <p>
            At Ascencia Malta, you’ll experience a friendly and welcoming
            student-centred learning environment.
          </p>
          <p>
            Our lecturers, many entrepreneurs themselves, provide learners with
            the opportunity to build their professional and academic
            qualifications through a career path that meets their interests and
            aspirations in their chosen career.
          </p>
          <p>
            Ascencia Malta lecturers support, mentor and guide you through the
            skills, knowledge and practical work experience to achieve your
            goals.
          </p>
        </div>
      </section>

      <Link className="join-band" to="/contact">
        <span className="join-note">
          You wish to join the Ascencia Business School community? Admission is
          simple and free.
        </span>
        <svg className="join-arrow" viewBox="0 0 48 48" aria-hidden="true">
          <path d="M8 40 L36 12 M18 12 H36 V30" fill="none" stroke="currentColor" strokeWidth="3" />
        </svg>
        <span className="join-word">Join</span>
      </Link>
    </>
  );
}
