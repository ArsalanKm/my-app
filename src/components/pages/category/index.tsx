import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Paper } from "@mui/material";
import { useParams } from "react-router";
import { Tree, searchTree } from "utils";
import { Category } from "data";
import "./styles.scss";


const CategoryPage: React.FunctionComponent = () => {
  const { cat } = useParams();
  const [items, setItems] = useState<Array<Category>>([])
  useEffect(() => {
    if (cat) {
      setItems(searchTree(Tree, cat)?.children || [])
    }
  }, [cat])



  return (
    <Paper className="category-page">
      {/* {items && items.length > 0 ? items.map((el) => (
        <div key={el.id}>
          <Link to={`/category/${el.slug}`}>
            {el.slug}
          </Link>
        </div>
      )) : } */}

    </Paper>
  );
};

export default CategoryPage;
