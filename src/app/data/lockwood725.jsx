import { CiSun } from "react-icons/ci";
import { BiSolidWasher, BiSolidDryer } from "react-icons/bi";
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

import lockwood1 from "../../../public/images/725/lockwood-1.png";
import lockwood2 from "../../../public/images/725/lockwood-2.png";
import lockwood3 from "../../../public/images/725/lockwood-3.png";
import lockwood4 from "../../../public/images/725/lockwood-4.png";
import lockwood5 from "../../../public/images/725/lockwood-5.png";
import lockwood6 from "../../../public/images/725/lockwood-6.png";
import lockwood7 from "../../../public/images/725/lockwood-7.png";
import lockwood8 from "../../../public/images/725/lockwood-8.png";
import lockwood9 from "../../../public/images/725/lockwood-9.png";

export const lockwood725 = {
  heading: "Lockwood 725",
  badges: ["1 Bedroom", "1 Bathroom", "600 sqft"],
  mapURL: "https://maps.app.goo.gl/FuYM6cLZHQLhaJrB8",
  amenities: [
    {
      text: "Balcony",
      icon: <CiSun />,
    },
    {
      text: "Washer",
      icon: <BiSolidWasher />,
    },
    {
      text: "Dryer",
      icon: <BiSolidDryer />,
    },
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
      image: lockwood3,
      alt: "Lockwood kitchen",
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
      alt: "Lockwood bedroom",
    },
    {
      image: lockwood7,
      alt: "Lockwood laundry",
    },
    {
      image: lockwood8,
      alt: "Lockwood bathroom",
    },
    {
      image: lockwood9,
      alt: "Lockwood bathroom",
    },
    {
      image: lockwood1,
      alt: "Lockwood exterior",
    },
    {
      image: lockwood2,
      alt: "Lockwood balcony",
    },
  ],
};
