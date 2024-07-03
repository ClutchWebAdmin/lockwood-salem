import { FaDirections } from "react-icons/fa";
import Carousel from "./Carousel";

export default function PropertyDetails({ propertyData }) {
  return (
    <div className="lg:mt-[var(--desktopHeaderHeight)] p-3">
      <section className="flex flex-col gap-5 p-3">
        <h1 className="text-7xl md:text-7xl lg:text-8xl">
          {propertyData.heading}
        </h1>

        <div className="flex flex-wrap gap-3 font-medium text-primaryLight">
          {propertyData.badges.map((item, index) => (
            <p key={index} className="bg-secondaryGreen rounded px-2 py-1">
              {item}
            </p>
          ))}
          <a
            className="border border-primaryGreen text-primaryGreen hover:bg-secondaryMuted hover:border-secondaryMuted hover:text-primaryLight transition-colors duration-200 ease-in-out rounded px-2 py-1 flex flex-row gap-1.5 items-center"
            href={propertyData.mapURL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Directions
            <FaDirections />
          </a>
        </div>
      </section>

      <section className="grid lg:grid-cols-12 gap-10 pt-8 pb-16">
        <div className="flex flex-col p-3 lg:col-span-6">
          <h4 className="col-span-full text-3xl pb-4 font-medium">Amenities</h4>
          <ul className="flex flex-wrap gap-3">
            {propertyData.amenities.map((item, index) => (
              <li
                key={index}
                className="border border-secondaryMuted rounded-md p-3 flex flex-col gap-2 text-center justify-center items-center h-[100px] w-[100px] aspect-square"
              >
                <div className="h-10 w-10 text-4xl">{item.icon}</div>

                <p className="text-sm font-medium">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>

        <section className="flex flex-col lg:col-span-6 p-3">
          <h4 className="col-span-full text-3xl pb-4 font-medium">Photos</h4>
          <Carousel photos={propertyData.photos} />
        </section>
      </section>
    </div>
  );
}
