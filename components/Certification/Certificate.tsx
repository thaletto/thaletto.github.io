import { acornLight } from "@/lib/fonts/font";
import Link from "next/link";
import { LiaCertificateSolid } from "react-icons/lia";

interface CertificateProps {
  name: string;
  provider: string;
  date: Date;
  url: string;
  skills: string[];
}

export default function Certificate({
  name,
  provider,
  date,
  url,
  skills,
}: CertificateProps) {
  const datestring = date.toDateString();
  return (
    <Link href={url} target="_blank" rel="noopener noreferrer">
      <div className="bg-customGreen rounded-lg mb-8 p-4 text-charcoal flex flex-row transition-transform duration-300 hover:scale-90 hover:shadow-lg">
        <div className="mr-4">
          <LiaCertificateSolid className="text-5xl mt-1" />
        </div>
        <div>
          <p className={acornLight.className + " text-xl md:text-2xl"}>
            <strong>{name}</strong>
          </p>
          <p className="text-lg md:text-xl">{provider}</p>
          <p className="text-lg md:text-xl">{datestring}</p>
          <div className="flex flex-row items-center mt-1 space-x-2">
            {skills.map((skill, index) => (
              <p
                key={index}
                className="lg:text-sm sm:text-xs text-xs bg-charcoal-light p-2 text-white rounded-full"
              >
                {skill}
              </p>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
