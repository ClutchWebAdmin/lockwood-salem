import Image from "next/image";
import { lockwood725 } from "../data/lockwood725";

export default function Lockwood725Page() {
  return (
    <div className="lg:mt-[var(--desktopHeaderHeight)] p-3">
      <div className="flex flex-col gap-5 p-3">
        <h1 className="text-6xl md:text-7xl">725 Lockwood</h1>
        <div className="flex flex-row gap-3 font-medium text-primaryLight">
          <p className="bg-secondaryGreen rounded px-2 py-1">1 Bedroom</p>
          <p className="bg-secondaryGreen rounded px-2 py-1">1 Bathroom</p>
          <p className="bg-secondaryGreen rounded px-2 py-1">600 sqft</p>
        </div>
      </div>

      <section className="grid lg:grid-cols-12 gap-10 pt-8 pb-16">
        <div className="flex flex-col gap-3 p-3 lg:col-span-6">
          <h4 className="col-span-full text-3xl pb-4 font-medium">Amenities</h4>
          <ul className="flex flex-wrap gap-3">
            {lockwood725.amenities.map((item, index) => (
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
        <div className="flex flex-col gap-3 p-3 lg:col-span-6">
          <h4 className="col-span-full text-3xl pb-4 font-medium">Photos</h4>
          <div className="flex flex-wrap gap-3">
            {lockwood725.photos.map((item, index) => (
              <Image
                key={index}
                src={item.image}
                alt={item.alt}
                className="object-cover h-[100px] w-[100px] rounded"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
