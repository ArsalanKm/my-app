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
        <iframe title="my" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3243.326767222861!2d51.22064561532684!3d35.61967008020869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8df9029eb15861%3A0x76ed5b3a1f61fb49!2sAlibaba%20Resturant!5e0!3m2!1sen!2sru!4v1667916376485!5m2!1sen!2sru" width="600" height="450" style={{border:0}}  loading="lazy" />
      </Paper>
    </>
  );
};

export default ItemPage;
