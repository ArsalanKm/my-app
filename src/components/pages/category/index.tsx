import React from "react";
import { Link } from "react-router-dom";
import { Paper } from "@mui/material";
import { useParams } from "react-router";
import { Tree, searchTree } from "utils";
import { Category, leafMap, LeafType } from "data";
import "./styles.scss";


const CategoryPage: React.FunctionComponent = () => {
  const { cat } = useParams();
  console.log(cat)
  let items: Array<Category> = []

  if (!cat) {
    return null
  }
  console.log(searchTree(Tree, cat)?.children)

  items = (searchTree(Tree, cat)?.children || [])
  console.log(searchTree(Tree, cat)?.children)

  console.log(items)

  return (
    <Paper className="category-page">
      {items && items.length > 0 ? items.map((el) => (
        <div key={el.id}>
          <Link to={`/category/${el.slug}`}>
            {el.slug}
          </Link>
        </div>
      )) : leafMap[cat as LeafType].map(el => (
        <div>
          {el}
        </div>
      ))}

    </Paper>
  );
};

export default CategoryPage;
