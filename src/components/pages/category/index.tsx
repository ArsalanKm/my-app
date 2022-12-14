import React from "react";
import { Link } from "react-router-dom";
import { Paper } from "@mui/material";
import { useParams } from "react-router";
import { Tree, searchTree } from "utils";
import { Category, leafMap, LeafType } from "data";
import "./styles.scss";


const CategoryPage: React.FunctionComponent = () => {
  const { cat } = useParams();
  let items: Array<Category> = []

  if (!cat) {
    return null
  }
  items = (searchTree(Tree, cat)?.children || [])

  const isChain = cat.toLocaleLowerCase().includes('chain')
  console.log(isChain)
  return (
    <Paper className="category-page">
      {items && items.length > 0 ? items.map((el) => (
        <Link key={el.id} to={`/category/${el.slug}`}>
          {el.slug}
        </Link>
      )) : leafMap[cat as LeafType].map(el => (
        <div key={el.name}>
          {el.name}
        </div>
      ))}

    </Paper>
  );
};

export default CategoryPage;
