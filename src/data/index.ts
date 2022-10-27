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
