import React from "react";
import { Paper, OutlinedInput } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./styles.scss";

const HomePage = () => {
  return (
    <Paper className="home-page">
      <OutlinedInput
        className="home-page__searchbar"
        placeholder="Search..."
        startAdornment={<SearchIcon />}
      />
      homepage
    </Paper>
  );
};

export default HomePage;
