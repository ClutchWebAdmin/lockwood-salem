import Image from "next/image";
import hero from "../../../public/images/lockwood-hero.png";

export default function Hero() {
  return (
    <section className="w-full h-[350px] md:h-[600px] lg:h-svh">
      <Image
        src={hero}
        alt="Lockwood Apartments exterior"
        className="h-full w-full object-cover"
      />
    </section>
  );
}
