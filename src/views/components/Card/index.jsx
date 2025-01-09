import "./styles.css";

export default function Card({
  IconComponent,
  iconWidth,
  iconHeight,
  iconFill,
  iconStroke,
  title,
  href,
}) {
  const iconProps = {
    width: iconWidth,
    height: iconHeight,
    ...(iconFill && { fill: iconFill }),
    ...(iconStroke && { stroke: iconStroke }),
  };

  return (
    <section className="card">
      <a className="icon-section" href={href}>
        <IconComponent {...iconProps} />
        <p className="text-section">{title}</p>
      </a>
    </section>
  );
}
