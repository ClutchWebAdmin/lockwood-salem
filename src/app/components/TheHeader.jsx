import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import logo from "../../../public/logos/logo-light.png";
import { navLinks } from "../data/navLinks";

export default function TheHeader() {
  return (
    <header className="flex flex-col bg-primaryMuted">
      <nav className="flex flex-row items-center lg:absolute w-full justify-between p-5">
        <div className="flex w-fit">
          <Link href="/">
            <Image
              src={logo}
              alt="Lockwood Apartments"
              className="w-[200px] lg:w-[250px] h-auto"
              priority
            />
          </Link>
        </div>

        <div className="hidden lg:flex justify-end">
          <div className="flex flex-row gap-2 text-sm text-white">
            {navLinks.map((item, index) => (
              <Link
                key={index}
                href={item.linkTo}
                className="bg-transparent border border-primaryLight hover:bg-secondaryMuted hover:border-secondaryMuted transition-colors duration-300 px-2 py-1 rounded font-medium"
              >
                {item.text}
              </Link>
            ))}
            <a
              href="mailto:propertymanager@clutchindustries.com"
              target="_blank"
              className="bg-transparent border border-primaryLight hover:bg-secondaryMuted hover:border-secondaryMuted transition-colors duration-300 px-2 py-1 rounded font-medium"
            >
              Contact Us
            </a>
            <a
              href="tel:+15035077605"
              target="_blank"
              className="bg-transparent border border-primaryLight hover:bg-secondaryMuted hover:border-secondaryMuted transition-colors duration-300 px-2 py-1 rounded font-medium"
            >
              503-507-7605
            </a>
          </div>
        </div>
        <MobileMenu />
      </nav>
    </header>
  );
}
