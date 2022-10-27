import doctorImage from "assets/doctor.png";
import dentistImage from "assets/dentist.png";
import lawyerImage from "assets/lawyer.png";
import constructorImage from "assets/constructor.png";
import beautyImage from "assets/beauty.png";
import restaurantImage from "assets/restaurant.png";
import shopImage from "assets/shop.png";

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
