import Image from "next/image";
import MobileMenu from "./MobileMenu";
import Link from "next/link";
import logoDark from "../../../public/logos/logo-dark.png";
import { navLinks } from "../data/navLinks";

export default function TheHeader() {
  return (
    <header className="flex flex-col">
      <nav className="flex flex-row items-start w-full h-fit justify-between p-5">
        <div className="flex w-fit">
          <Link href="/">
            <Image
              src={logoDark}
              alt="Lockwood Apartments"
              className="w-[200px] lg:w-[250px] h-auto"
              priority
            />
          </Link>
        </div>
        <div className="hidden lg:flex flex-row justify-end gap-10 w-fit">
          {navLinks.map((item, index) => (
            <Link key={index} href={item.linkTo}>
              {item.text}
            </Link>
          ))}
        </div>
        <MobileMenu />
      </nav>
    </header>
  );
}
