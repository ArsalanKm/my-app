import React from "react";
import { Paper, Typography } from "@mui/material";
import { ItemType, itemsDefaultImages } from "data";
import { Link } from "react-router-dom";
import "./styles.scss";

interface ItemCardProps {
  data: ItemType;
}
const ItemCard: React.FunctionComponent<ItemCardProps> = ({ data }) => {
  return (
    <Paper className="item-card">
      <Link to={`/category/${data.category}/${data.id}`}>
        <img src={itemsDefaultImages[data.category]} alt="data" />
        <Typography>{data.name}</Typography>
        <Typography>{data.city}</Typography>
      </Link>
    </Paper>
  );
};

export default ItemCard;
