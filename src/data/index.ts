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


const chainSuperMarkets = ["Boon's Markt",
  "Dagwinkel",
  "DekaMarkt",
  "Dirk",
  "EkoPlaza",
  "Hoogvliet",
  "Jan Linders",
  "Jumbo",
  "Lidl",
  "Makro",
  "MCD",
  "Nettorama",
  "PLUS",
  "Poiesz",
  "Spar",
  "Vomar"] as const;

type ChainSuperMarketType = typeof chainSuperMarkets[number]
type ChainSuperMarket = {
  address: string,
  phone: string
}


const chainSuperMarketMap: Record<ChainSuperMarketType, Array<ChainSuperMarket>> = {
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