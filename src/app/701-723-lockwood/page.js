import PropertyDetails from "../components/PropertyDetails";
import { lockwood701 } from "../data/lockwood701";

export const metadata = {
  title: "701-723 Lockwood Ln S | Lockwood Apartments",
  description: "701-723 Lockwood Ln S, Salem, OR 97302",
  keywords:
    "salem oregon apartments, downtown salem apartments, downtown salem living, 1 bedroom apartments salem oregon, 1 bedroom 1 bath apartments downtown salem, south salem apartments, 1 bed 1 bath south salem",
  openGraph: {
    title: "701-723 Lockwood Ln S | Lockwood Apartments",
    description: "701-723 Lockwood Ln S, Salem, OR 97302",
    siteName: "Lockwood Apartments",
    type: "website",
    locale: "en_US",
    url: "https://lockwoodsalem.com",
    images: [
      {
        url: "https://lockwoodsalem.com/images/og-image.png",
        alt: "Lockwood Apartments",
      },
    ],
  },
  images: [
    {
      url: "https://lockwoodsalem.com/images/og-image.png",
      alt: "Lockwood Apartments",
    },
  ],
};

export default function Lockwood701Page() {
  return <PropertyDetails propertyData={lockwood701} />;
}
