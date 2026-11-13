export default function Waterline({ line1, line2, support, as: Tag = "h1" }) {
  const lines = (
    <>
      <span className="line">
        <span data-line="" style={{ "--i": 0 }}>
          {line1}
        </span>
      </span>
      <span className="line">
        <span data-line="" style={{ "--i": 1 }}>
          {line2}
        </span>
      </span>
    </>
  );

  return (
    <section className="hero">
      <div className="field field-paper">
        <Tag className="water-title lines">{lines}</Tag>
      </div>
      <div className="field field-red">
        <p className="water-title lines" aria-hidden="true">
          {lines}
        </p>
        {support ? <p className="hero-support">{support}</p> : null}
      </div>
    </section>
  );
}
