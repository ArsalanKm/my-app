import React from "react";
import { Link } from "react-router-dom";
import { Typography, Paper } from "@mui/material";
import { Bottom_Navigation } from "data";
import "./_styles.scss";

const BottomNavigation: React.FunctionComponent = () => {
  return (
    <Paper className="bottom-navigation">
      <ul className="bottom-navigation__list">
        {Bottom_Navigation.map((el) => (
          <li className="bottom-navigation__items">
            <Link to={el.href}>
              <img src={el.image} alt={el.alt} />
              <Typography className="bottom-navigation__items__text">
                {el.text}
              </Typography>
            </Link>
          </li>
        ))}
      </ul>
    </Paper>
  );
};

export default BottomNavigation;
