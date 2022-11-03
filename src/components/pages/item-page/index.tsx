import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { ItemType, data, CategoryType, ItemPageData } from "data";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Paper, Typography } from "@mui/material";
import "./styles.scss";
import KeyValueRow from "components/key-value";

type x = keyof ItemType;

const ItemPage: React.FunctionComponent = () => {
  const { cat, id } = useParams();
  let item: ItemType | undefined;

  if (cat && id) {
    item = data[cat as CategoryType].find((el) => el.id === parseInt(id));
  }

  if (!item) {
    return null;
  }

  console.log(cat, id, item);
  return (
    <>
      <div className="item-page__navbar">
        <Link to={`/category/${cat}`}>
          <Typography component="span">{cat?.toUpperCase()}</Typography>
        </Link>
        <ArrowForwardIosIcon
          style={{ marginInlineEnd: "8px" }}
          fontSize="small"
        />
        {item && <Typography component="span">{item.name}</Typography>}
      </div>

      <Paper className="item-page">
        {ItemPageData.map((el) => (
          <KeyValueRow
            key={el}
            title={el}
            value={(item && item[el as x]) || ""}
          />
        ))}
      </Paper>
    </>
  );
};

export default ItemPage;
