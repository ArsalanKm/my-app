import React from "react";
import { Paper, OutlinedInput } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CategoryCard from "components/category-card";
import { categories } from "data";
import "./styles.scss";

const HomePage: React.FunctionComponent = () => {
  console.log(categories);
  return (
    <Paper className="home-page">
      <OutlinedInput
        className="home-page__searchbar"
        placeholder="Search..."
        startAdornment={<SearchIcon />}
      />
      <div className="home-page__category-container">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </Paper>
  );
};

export default HomePage;
