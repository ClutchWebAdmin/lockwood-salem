import logo from "../../../public/logos/footer-logo.svg";
import Image from "next/image";

export default function TheFooter() {
  return (
    <footer className="flex flex-col gap-12 justify-between max-w-full h-fit bg-primaryMuted text-primaryLight p-3">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-3 p-3 pt-12">
        <div className="flex flex-col w-full md:w-1/2">
          <h4 className="col-span-full text-3xl pb-4 font-medium">Location</h4>
          <a
            href="https://maps.app.goo.gl/eQmTfB1FQkL96Hb18"
            target="_blank"
            rel="noopener noreferrer"
          >
            701-725 Lockwood Ln S<br />
            Salem, OR 97302
          </a>
        </div>
        <div className="flex flex-col w-full md:w-1/2">
          <h4 className="col-span-full text-3xl pb-4 font-medium">Contact</h4>
          <a href="tel:+15035077605" target="_blank">
            503-507-7605
          </a>
          <a
            href="mailto:propertymanager@clutchindustries.com"
            target="_blank"
            className=""
          >
            propertymanager@clutchindustries.com
          </a>
        </div>
      </div>

      <Image
        src={logo}
        alt="Lockwood Apartments"
        className="col-span-full h-auto"
      />

      <div className="flex flex-col gap-2 w-full text-center py-3 text-xs">
        <a href="https://clutchpropertymanagement.com" target="_blank">
          Clutch Property Management
        </a>
        <p>© 2024 Lockwood Apartments</p>
      </div>
    </footer>
  );
}
