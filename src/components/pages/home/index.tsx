import React from "react";
import { Link } from "react-router-dom";
import { Paper, Autocomplete, TextField, Typography } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
import CategoryCard from "components/category-card";
import { categories, CategoryType, data, ItemType } from "data";
import "./styles.scss";

const HomePage: React.FunctionComponent = () => {
  let options: Array<ItemType> = [];
  categories.forEach((cat) => {
    const catData = data[cat.title.toLocaleLowerCase() as CategoryType];
    if (catData) {
      options.push(...catData);
    }
  });
  console.log(options);
  return (
    <Paper className="home-page">
      <Autocomplete
        id="grouped-demo"
        className="home-page__searchbar"
        options={options}
        groupBy={(option) => option.category}
        getOptionLabel={(option) => option.name}
        sx={{ width: 300 }}
        renderOption={(_, option) => (
          <Link to={`/category/${option.category}/${option.id}`}>
            <Typography className="option__link">{option.name}</Typography>
          </Link>
        )}
        renderInput={(params) => (
          <TextField
            className="input__searchbox"
            {...params}
            label="Search ..."
          />
        )}
      />
      <div className="home-page__category-container">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </Paper>
  );
};

export default HomePage;
