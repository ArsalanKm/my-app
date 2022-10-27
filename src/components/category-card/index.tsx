import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { ICategory } from "data";
import "./_styles.scss";

interface IProps {
  category: ICategory;
}

const CategoryCard: React.FunctionComponent<IProps> = ({ category }) => {
  return (
    <div className="category-card">
      <Link to={`/category/${category.title.toLowerCase()}`}>
        <img
          className="category-card__img"
          src={category.image}
          alt={category.alt}
        />
        <Typography className="category-card__title">
          {category.title}
        </Typography>
      </Link>
    </div>
  );
};

export default CategoryCard;
