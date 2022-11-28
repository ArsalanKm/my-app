import doctorImage from "assets/doctor.png";
import dentistImage from "assets/dentist.png";
import lawyerImage from "assets/lawyer.png";
import constructorImage from "assets/constructor.png";
import beautyImage from "assets/beauty.png";
import restaurantImage from "assets/restaurant.png";
import shopImage from "assets/shop.png";
import homeImage from "assets/home-page.png";
import settingImage from "assets/setting.png";
import contactImage from "assets/contact.png";
import languageImage from "assets/language.png";
import adImage from "assets/advertise.png";
import bookmarkImage from "assets/bookmarks.png";
import joinImage from "assets/join.png";

export interface ICategory {
  id: number;
  title: string;
  image: string;
  alt: string;
}

export const categories: Array<ICategory> = [
  { id: 1, title: "Doctor", image: doctorImage, alt: "" },
  { id: 2, title: "Dentist", image: dentistImage, alt: "" },
  { id: 3, title: "Constructor", image: constructorImage, alt: "" },
  { id: 4, title: "Lawyer", image: lawyerImage, alt: "" },
  { id: 5, title: "Shop", image: shopImage, alt: "" },
  { id: 6, title: "Beauty", image: beautyImage, alt: "" },
  { id: 7, title: "Restaurant", image: restaurantImage, alt: "" },
];

interface INavigation {
  text: string;
  image: string;
  href: string;
  alt: string;
}
export const Bottom_Navigation: Array<INavigation> = [
  { text: "Home", href: "/", image: homeImage, alt: "home-image" },
  { text: "Advertise", href: "/advertise", image: adImage, alt: "ad-image" },
  {
    text: "Contact",
    href: "/contact",
    image: contactImage,
    alt: "contact-image",
  },
  { text: "Join", href: "/join", image: joinImage, alt: "join-image" },
  {
    text: "Bookmarks",
    href: "/bookmarks",
    image: bookmarkImage,
    alt: "bookmark-image",
  },
  {
    text: "Languages",
    href: "/languages",
    image: languageImage,
    alt: "langugage-image",
  },
  {
    text: "Setting",
    href: "/setting",
    image: settingImage,
    alt: "setting-image",
  },
];

export type ItemType = {
  id: number;
  name: string;
  country: string;
  city: string;
  address: string;
  phone: string;
  website?: string;
  instagram?: string;
  images: null;
  location: string;
  category: CategoryType;
};

export type CategoryType =
  | "doctor"
  | "dentist"
  | "constructor"
  | "lawyer"
  | "shop"
  | "beauty"
  | "restaurants";

const DOCTORS: Array<ItemType> = [
  {
    id: 1,
    name: "دکتر علامه نعیمی",
    country: "Netherland",
    city: "Amesterdam",
    address: "",
    phone: "0031202105555",
    instagram: "",
    website: "huisartsnaimi.nl",
    images: null,
    location: "",
    category: "doctor",
  },
  {
    id: 2,
    name: "دکتر فراهانی",
    country: "Netherland",
    city: "Den Haag",
    address: "Westeinde 223, 2512 GZ Den Haag, Netherlands",
    phone: "0031703888406",
    instagram: "",
    website: "huisartsnaimi.nl",
    images: null,
    location: "",
    category: "doctor",
  },
];

export const data: Record<CategoryType, Array<ItemType>> = {
  doctor: DOCTORS,
  dentist: [],
  constructor: [],
  lawyer: [],
  shop: [],
  beauty: [],
  restaurants: [],
};

export const itemsDefaultImages: Record<CategoryType, string> = {
  doctor: doctorImage,
  dentist: dentistImage,
  lawyer: lawyerImage,
  beauty: beautyImage,
  constructor: constructorImage,
  shop: shopImage,
  restaurants: restaurantImage,
};

export const ItemPageData = [
  "name",
  "country",
  "city",
  "address",
  "phone",
  "instagram",
  "website",
  "images",
  "location",
  "category",
];

export type Category = {
  id: number;
  slug: string;
  parentId: number
  children?: Array<Category>
}


type ChainMarket = {
  name: string;
  image: string

}
export const chainSuperMarkets: Array<ChainMarket> = [
  { name: "Boon's Markt", image: "" },
  { name: "Dagwinkel", image: "" },
  { name: "DekaMarkt", image: "" },
  { name: "Dirk", image: "" },
  { name: "EkoPlaza", image: "" },
  { name: "Hoogvliet", image: "" },
  { name: "Jan Linders", image: "" },
  { name: "Jumbo", image: "" },
  { name: "Lidl", image: "" },
  { name: "Makro", image: "" },
  { name: "MCD", image: "" },
  { name: "Nettorama", image: "" },
  { name: "PLUS", image: "" },
  { name: "Poiesz", image: "" },
  { name: "Spar", image: "" },
  { name: "Vomar", image: "" }];

const marketNames = chainSuperMarkets.map(el => el.name)
type ChainSuperMarketType = typeof marketNames[number]
type ChainSuperMarket = {
  address: string,
  phone: string
}


export const chainSuperMarketMap: Record<ChainSuperMarketType, Array<ChainSuperMarket>> = {
  "Boon's Markt": [],
  "Dagwinkel": [],
  "DekaMarkt": [],
  "Dirk": [],
  "EkoPlaza": [],
  "Hoogvliet": [],
  "Jan Linders": [],
  "Jumbo": [],
  "Lidl": [
    { address: "Alberdingk Thijmstraat 21 (Overtoom/Leidseplein) 1054 AH", phone: "" },
    { address: "Hemonylaan 25 (near Albert Cuyp market) 1074 BJ", phone: "" },
    { address: "Baarsjesweg 308H (Vondelpark/Rembrandt Park) 1058 AH", phone: "" },
    { address: "August Allebeplein 269 (Rembrandt Park) 1062 AB", phone: "" },
    { address: "Eerste van Swindenstraat 52A (Oost) 1093 GG", phone: "" },
    { address: "Soerabajastraat 4 (Oost) 1095 GP", phone: "" },
    { address: "Nobelweg 27 (Oost) 1097 AR", phone: "" },
    { address: "Sara Burgerhartstraat 80 (Bos en Lommer) 1055 LD", phone: "" },
    { address: "Delflandplein 196 (Slotervaart) 1062 HW", phone: "" },
    { address: "Osdorpplein 572 (Osdorp) 1068 TB", phone: "" },
    { address: "Aalbersestraat 273-275 (Geuzenveld) 1067 MD", phone: "" },
    { address: "Buikslotermeerplein 121C (Amsterdam Noord) 1025 ET", phone: "" },
    { address: "Bezaanjachtplein 289 (Amsterdam Noord) 1034 CR", phone: "" },
    { address: "Zuideinde 280 (Amsterdam Noord) 1035 PM", phone: "" },
    { address: "Bijlmerplein 94 (Zuid-Oost) 1102 DA", phone: "" },
  ],
  "Makro": [],
  "MCD": [],
  "Nettorama": [],
  "PLUS": [],
  "Poiesz": [],
  "Spar": [],
  "Vomar": [],
}

export type IndividualMarket = {
  name: string;
  nationality: string;
  city: string;
  address: string;
  phone: string;
  instagram?: string;
  website: string;
  location: string;
}

const IranianSuperMarkets: Array<IndividualMarket> = [
  { name: "Setareh", nationality: "Iranian", city: "The Hague", address: "Betje Wolffstraat 311, 2533 HN", phone: "070 308 0137", website: "NA", location: "in goolge map	Supermarket" },
  { name: "Persia", nationality: "Iranian", city: "The Hague", address: "Rijswijkseweg 608, 2516 HW", phone: "079 351 8262", website: "NA", location: "in goolge map	Supermarket" },
  { name: "Persian", nationality: "Iranian", city: "Amsterdam", address: "Rozengracht 56, 1016 ND", phone: "020 423 2104", website: "NA", location: "in goolge map	Supermarket" },
  { name: "Crystal", nationality: "Iranian", city: "Rotterdam", address: "Zwart Janstraat 87a, b, 3035 AN", phone: "06 40769867", website: "NA", location: "in goolge map	Supermarket" },
  { name: "de Pers", nationality: "Iranian", city: "Utrecht", address: "Kanaalstraat 82, 3531 CL", phone: "030 294 8081", website: "NA", location: "in goolge map	Supermarket" },
  { name: "Roos", nationality: "Iranian", city: "Amsterdam", address: "Rozengracht 135, 1016 LV", phone: "020 639 3904", website: "https://www.roosmarket.nl/", location: "in goolge map	Supermarket" },
  { name: "Koroush", nationality: "Iranian", city: "Amstelveen", address: "Rembrandtweg 158, 1181 GX", phone: "020 229 9461", website: "https://nl-nl.facebook.com/koroushmarket/", location: "in goolge map	Supermarket" },
  { name: "Aria", nationality: "Iranian", city: "Arnhem", address: "Spijkerlaan 6, 6828 EC", phone: "026 446 0463", website: "https://superaria.nl/", location: "in goolge map	Supermarket" },
  { name: "Bahar", nationality: "Iranian", city: "Delft", address: "Papsouwselaan 208, 2624 EG", phone: "015 256 8508", website: "https://www.baharfood.nl/", location: "in goolge map	Supermarket" },
  { name: "Saffron", nationality: "Iranian", city: "Almere", address: "Bottelaarpassage 114, 1315 ET", phone: "036 534 6606", website: "NA", location: "in goolge map	Supermarket" },
  { name: "Homs", nationality: "Iranian", city: "Hilversum", address: "Spoorstraat 49, 1211 GA", phone: "06 84607119", website: "NA", location: "in goolge map	Supermarket" },
  { name: "Zam Zam", nationality: "Iranian", city: "Leiden", address: "Raamsteeg 73, 2311 PM", phone: "071 542 7122", website: "https://zamzam.nl/", location: "in goolge map	Supermarket" },
  { name: "IranBezorger", nationality: "Iranian", city: "Online", address: "NA", phone: "06 14509500", website: "https://iranbezorger.nl/", location: "in goolge map	Supermarket" },
  { name: "Bastani Tehran", nationality: "Iranian", city: "The Hague", address: "Taag 61, 2491 CS", phone: "06 18116492", website: "https://www.bastanitehran.com/", location: "in goolge map	Supermarket" },

]

export const leafs = [
  "Chain Supermarket",
  "Iranian Supermarket",
  "Turkish Supermarket",
  "International Supermarket",
  "BCC",
  "Blokker",
  "Mediamarket",
  "Individual Appliances & White Goods",
  "Chain Hardware Store",
  "Individual Hardware Store",
  "Chain Variety Store",
  "Individual Variety Store",
  "Chain Bakery",
  "Individual Bakery",
  "Chain Cosmetics & Beauty",
  "Individual Cosmetics & Beauty",
  "Chain Clothing",
  "Individual Clothing",
  "Chain Beverage",
  "Individual Beverage",
  "Chain Home & Garden",
  "Individual Home & Garden",
  "Chain Sporting Goods",
  "Individual Sporting Goods",
  "Chain Restaurant",
  "Iranian Restaurant",
  "Turkish Restaurant",
  "International Restaurant"
] as const
export type LeafType = typeof leafs[number];
export const leafMap: Record<LeafType, Array<ChainMarket | IndividualMarket>> = {
  "Chain Supermarket": chainSuperMarkets,
  "Iranian Supermarket": IranianSuperMarkets,
  "Turkish Supermarket": [],
  "International Supermarket": [],
  "BCC": [],
  "Blokker": [],
  "Mediamarket": [],
  "Individual Appliances & White Goods": [],
  "Chain Hardware Store": [],
  "Individual Hardware Store": [],
  "Chain Variety Store": [],
  "Individual Variety Store": [],
  "Chain Bakery": [],
  "Individual Bakery": [],
  "Chain Cosmetics & Beauty": [],
  "Individual Cosmetics & Beauty": [],
  "Chain Clothing": [],
  "Individual Clothing": [],
  "Chain Beverage": [],
  "Individual Beverage": [],
  "Chain Home & Garden": [],
  "Individual Home & Garden": [],
  "Chain Sporting Goods": [],
  "Individual Sporting Goods": [],
  "Chain Restaurant": [],
  "Iranian Restaurant": [],
  "Turkish Restaurant": [],
  "International Restaurant": []
}


