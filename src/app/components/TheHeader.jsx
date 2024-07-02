"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import logoLight from "../../../public/logos/logo-light.png";
import logoDark from "../../../public/logos/logo-dark.png";
import { navLinks } from "../data/navLinks";

export default function TheHeader() {
  const pathname = usePathname();
  console.log(pathname);
  const isHomePage = pathname === "/";

  return (
    <header className={`flex flex-col ${isHomePage && "text-primaryLight"}`}>
      <nav className="flex flex-row items-center lg:absolute w-full justify-between p-5">
        <div className="flex w-fit">
          <Link href="/">
            {isHomePage ? (
              <>
                <Image
                  src={logoLight}
                  alt="Lockwood Apartments"
                  className="hidden lg:block lg:w-[250px] h-auto"
                  priority
                />
                <Image
                  src={logoDark}
                  alt="Lockwood Apartments"
                  className="w-[200px] lg:hidden h-auto"
                  priority
                />
              </>
            ) : (
              <Image
                src={logoDark}
                alt="Lockwood Apartments"
                className="w-[200px] lg:w-[250px] h-auto"
                priority
              />
            )}
          </Link>
        </div>
        <div className="hidden lg:flex justify-end">
          <div className="flex flex-row gap-2 text-sm">
            {navLinks.map((item, index) => (
              <Link
                key={index}
                href={item.linkTo}
                className={`rounded font-medium px-2 py-1 transition-colors duration-200 border bg-transparent hover:bg-secondaryMuted hover:border-secondaryMuted ${
                  isHomePage
                    ? "border-primaryLight"
                    : "border-secondaryGreen hover:text-primaryLight"
                }  transition-colors duration-200 px-2 py-1 rounded font-medium`}
              >
                {item.text}
              </Link>
            ))}
            <a
              href="mailto:propertymanager@clutchindustries.com"
              target="_blank"
              className={`rounded font-medium px-2 py-1 transition-colors duration-200 border bg-transparent hover:bg-secondaryMuted hover:border-secondaryMuted ${
                isHomePage
                  ? "border-primaryLight"
                  : "border-secondaryGreen hover:text-primaryLight"
              }  transition-colors duration-200 px-2 py-1 rounded font-medium`}
            >
              Contact Us
            </a>
            <a
              href="tel:+15035077605"
              target="_blank"
              className={`rounded font-medium px-2 py-1 transition-colors duration-200 border bg-transparent hover:bg-secondaryMuted hover:border-secondaryMuted ${
                isHomePage
                  ? "border-primaryLight"
                  : "border-secondaryGreen hover:text-primaryLight"
              }  transition-colors duration-200 px-2 py-1 rounded font-medium`}
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
