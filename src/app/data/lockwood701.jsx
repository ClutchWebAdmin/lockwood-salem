import {
  PiSnowflakeLight,
  PiThermometerHot,
  PiOvenLight,
  PiCookingPotLight,
  PiTrash,
  PiPawPrintLight,
} from "react-icons/pi";
import {
  MdOutlineKitchen,
  MdOutlineMicrowave,
  MdOutlineWaterDrop,
  MdOutlineBubbleChart,
} from "react-icons/md";

import lockwood1 from "../../../public/images/701/lockwood-1.png";
import lockwood2 from "../../../public/images/701/lockwood-2.png";
import lockwood3 from "../../../public/images/701/lockwood-3.png";
import lockwood4 from "../../../public/images/701/lockwood-4.png";
import lockwood5 from "../../../public/images/701/lockwood-5.png";
import lockwood6 from "../../../public/images/701/lockwood-6.png";

export const lockwood701 = {
  heading: "Lockwood 701-723",
  badges: ["1 Bedroom", "1 Bathroom", "450 sqft"],
  mapURL: "https://maps.app.goo.gl/bqvnBxH7SxtQgWvB6",
  amenities: [
    {
      text: "AC",
      icon: <PiSnowflakeLight />,
    },
    {
      text: "Heat",
      icon: <PiThermometerHot />,
    },
    {
      text: "Dishwasher",
      icon: <MdOutlineBubbleChart />,
    },
    {
      text: "Oven",
      icon: <PiOvenLight />,
    },
    {
      text: "Range",
      icon: <PiCookingPotLight />,
    },
    {
      text: "Refrigerator",
      icon: <MdOutlineKitchen />,
    },
    {
      text: "Microwave",
      icon: <MdOutlineMicrowave />,
    },
    {
      text: "Pet Friendly",
      icon: <PiPawPrintLight />,
    },
    {
      text: "Water",
      icon: <MdOutlineWaterDrop />,
    },
    {
      text: "Trash",
      icon: <PiTrash />,
    },
  ],
  photos: [
    {
      image: lockwood1,
      alt: "Lockwood exterior",
    },
    {
      image: lockwood2,
      alt: "Lockwood living room",
    },
    {
      image: lockwood3,
      alt: "Lockwood living room",
    },
    {
      image: lockwood4,
      alt: "Lockwood kitchen",
    },
    {
      image: lockwood5,
      alt: "Lockwood bedroom",
    },
    {
      image: lockwood6,
      alt: "Lockwood bathroom",
    },
  ],
};
