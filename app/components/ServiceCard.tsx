import Image from "next/image";
import type { Service } from "@/app/lib/content";
import { serviceImages } from "@/app/lib/sectionIcons";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="card has-img">
      <div className="card-img">
        <Image src={serviceImages[service.num]} alt="" width={800} height={450} />
      </div>
      <div className="card-body">
        <div className="num">{service.num}</div>
        <h3>{service.title}</h3>
        <p>{service.summary}</p>
        <ul className="taglist">
          {service.capabilities.slice(0, 4).map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
