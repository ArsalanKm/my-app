import React from "react";
import { Link } from "react-router-dom";
import { Paper } from "@mui/material";
import { Tree } from 'utils'
import "./styles.scss";

const HomePage: React.FunctionComponent = () => {
  const cats = (Tree.children)

  return (
    <Paper className="home-page">
      <div className="home-page__category-container">
        {cats?.map(el => (
          <div key={el.id}>
            <Link to={`/category/${el.slug}`}>
              {el.slug}
            </Link>
          </div>
        ))}
      </div>
    </Paper>
  );
};

export default HomePage;
