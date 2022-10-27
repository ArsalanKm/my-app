import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./_styles.scss";

interface IItems {
  text: string;
  href: string;
}

const Header: React.FunctionComponent = () => {
  const items: Array<IItems> = [
    { text: "Home", href: "/" },
    { text: "Advertise", href: "/advertise" },
    { text: "contact", href: "/contact" },
    { text: "join", href: "/join" },
    { text: "bookmarks", href: "/bookmarks" },
    { text: "Languages", href: "/languages" },
    { text: "setting", href: "/setting" },
  ];

  return (
    <div className="header">
      <div className="header__content">
        {items.map(({ text, href }) => (
          <Link className="header__link" to={href}>
            <Typography>{text}</Typography>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
