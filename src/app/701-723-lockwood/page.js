import Carousel from "../components/Carousel";
import { lockwood701 } from "../data/lockwood701";

export default function Lockwood701Page() {
  return (
    <div className="lg:mt-[var(--desktopHeaderHeight)] p-3">
      <div className="flex flex-col gap-5 p-3">
        <h1 className="text-6xl md:text-7xl">701-723 Lockwood</h1>
        <div className="flex flex-row gap-3 font-medium text-primaryLight">
          <p className="bg-secondaryGreen rounded px-2 py-1">1 Bedroom</p>
          <p className="bg-secondaryGreen rounded px-2 py-1">1 Bathroom</p>
          <p className="bg-secondaryGreen rounded px-2 py-1">450 sqft</p>
        </div>
      </div>

      <section className="grid lg:grid-cols-12 gap-10 pt-8 pb-16">
        <div className="flex flex-col gap-3 p-3 lg:col-span-6">
          <h4 className="col-span-full text-3xl pb-4 font-medium">Amenities</h4>
          <ul className="flex flex-wrap gap-3">
            {lockwood701.amenities.map((item, index) => (
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
        <div className="flex flex-col gap-3 lg:col-span-6">
          <h4 className="col-span-full text-3xl pb-4 font-medium">Photos</h4>
          <Carousel photos={lockwood701.photos} />
        </div>
      </section>
    </div>
  );
}
