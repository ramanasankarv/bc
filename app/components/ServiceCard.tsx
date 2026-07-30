import type { Service } from "@/app/lib/content";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="card">
      <div className="num">{service.num}</div>
      <h3>{service.title}</h3>
      <p>{service.summary}</p>
      <ul className="taglist">
        {service.capabilities.slice(0, 4).map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
    </div>
  );
}
