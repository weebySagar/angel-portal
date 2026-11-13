import { useState } from "react";
import Waterline from "../components/Waterline";
import { school } from "../data/content";

const empty = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  function update(event) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
  }

  function validate(form) {
    const next = {};
    if (!form.firstName.trim()) next.firstName = "Enter your first name.";
    if (!form.lastName.trim()) next.lastName = "Enter your last name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      next.email = "Enter a valid email address.";
    }
    if (form.phone.trim().length < 6) next.phone = "Enter your phone number.";
    if (!form.subject.trim()) next.subject = "Enter a subject.";
    if (form.message.trim().length < 10) {
      next.message = "Write a message of at least a short sentence.";
    }
    return next;
  }

  function submit(event) {
    event.preventDefault();
    const next = validate(values);
    setErrors(next);
    if (Object.keys(next).length === 0) setSent(true);
  }

  return (
    <>
      <Waterline
        line1="Contact"
        line2="Us"
        support="For any question about the campus, the programmes, or Ascencia Malta."
      />
      <section className="contact-split">
        <div className="contact-form-panel">
          {sent ? (
            <div className="form-success" role="status">
              <h2>Kept on this page</h2>
              <p>
                Thanks, {values.firstName}. This is a static demo, so nothing
                is emailed. On the school’s own site, the same form is how the
                team hears from you.
              </p>
              <button
                type="button"
                className="button"
                onClick={() => {
                  setSent(false);
                  setValues(empty);
                }}
              >
                Write again
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={submit} noValidate>
              <p>
                Our teams will get back to you as soon as possible. Fill in the
                form below.
              </p>
              <div className="field-row">
                <Field label="First name" name="firstName" value={values.firstName} error={errors.firstName} onChange={update} autoComplete="given-name" />
                <Field label="Last name" name="lastName" value={values.lastName} error={errors.lastName} onChange={update} autoComplete="family-name" />
              </div>
              <div className="field-row">
                <Field label="Email" name="email" type="email" value={values.email} error={errors.email} onChange={update} autoComplete="email" />
                <Field label="Phone" name="phone" type="tel" value={values.phone} error={errors.phone} onChange={update} autoComplete="tel" />
              </div>
              <Field label="Subject of your message" name="subject" value={values.subject} error={errors.subject} onChange={update} />
              <Field label="Your message" name="message" value={values.message} error={errors.message} onChange={update} multiline />
              <button className="button" type="submit">
                Send
              </button>
            </form>
          )}
        </div>
        <aside className="contact-aside">
          <h2>{school.legalName}</h2>
          <p>{school.address}</p>
          <p>
            <a href={school.phoneHref}>{school.phone}</a>
          </p>
          <p>
            Erasmus + mobility
            <br />
            <a href={`mailto:${school.erasmus}`}>{school.erasmus}</a>
          </p>
          <p>
            <a href={school.mapsHref} target="_blank" rel="noreferrer">
              Open the address in maps
            </a>
          </p>
          <p>{school.licence}</p>
        </aside>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  value,
  error,
  onChange,
  type = "text",
  autoComplete,
  multiline = false,
}) {
  const id = `field-${name}`;
  const errorId = `${id}-error`;
  const shared = {
    id,
    name,
    value,
    onChange,
    autoComplete,
    "aria-invalid": error ? "true" : "false",
    "aria-describedby": error ? errorId : undefined,
    required: true,
  };

  return (
    <div className={error ? "field has-error" : "field"}>
      <label htmlFor={id}>{label}</label>
      {multiline ? <textarea {...shared} rows={6} /> : <input {...shared} type={type} />}
      {error ? (
        <p id={errorId} className="field-error">
          {error}
        </p>
      ) : null}
    </div>
  );
}
