import "./styles.css";

export default function OptionMenu({ title, children }) {
  return (
    <section className="option-menu">
      <h1 className="title-menu">{title}</h1>
      <div className="sections">{children}</div>
    </section>
  );
}
