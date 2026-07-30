import Reveal from "./Reveal";

export default function SectionHead({
  eyebrow,
  title,
  body,
  onDark = false,
  style,
}: {
  eyebrow: string;
  title: string;
  body?: string;
  onDark?: boolean;
  style?: React.CSSProperties;
}) {
  return (
    <Reveal className="sec-head" as="div">
      <div style={style}>
        <div className="rule" />
        <div className={`eyebrow ${onDark ? "on-dark" : ""}`}>{eyebrow}</div>
        <h2>{title}</h2>
        {body && <p>{body}</p>}
      </div>
    </Reveal>
  );
}
