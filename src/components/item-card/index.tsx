import React from "react";
import { Paper, Typography } from "@mui/material";
import { ItemType, itemsDefaultImages } from "data";
import "./styles.scss";

interface ItemCardProps {
  data: ItemType;
}
const ItemCard: React.FunctionComponent<ItemCardProps> = ({ data }) => {
  return (
    <Paper className="item-card">
      <img src={itemsDefaultImages[data.category]} alt="data" />
      <Typography>{data.name}</Typography>
      <Typography>{data.city}</Typography>
    </Paper>
  );
};

export default ItemCard;
