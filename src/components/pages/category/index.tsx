import React from "react";
import { Paper } from "@mui/material";
import { useParams } from "react-router";
import { data, CategoryType, ItemType } from "data";
import ItemCard from "components/item-card";
import "./styles.scss";

const CategoryPage = () => {
  const { cat } = useParams();
  const items: Array<ItemType> =
    data[(cat as CategoryType) || ("doctor" as CategoryType)];

  return (
    <Paper className="category-page">
      {items.map((el) => (
        <ItemCard data={el} key={el.name} />
      ))}
    </Paper>
  );
};

export default CategoryPage;
