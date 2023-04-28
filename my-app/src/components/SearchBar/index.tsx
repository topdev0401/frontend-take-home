import React, { FC, useState } from "react";
import { SearchBarProps } from "./types";
import { Grid, TextField, Button } from "@mui/material";

import useStyles from "./styles";

const SearchBar: FC<SearchBarProps> = ({ fetch }) => {
  const styles = useStyles();

  const [keyword, setKeyword] = useState("");
  
  const handleSearch = () => {
    fetch(keyword)
  }

  return (
    <Grid container alignItems="center" className={styles.container}>
      <Grid item flex={1}>
        <TextField
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          fullWidth
          placeholder="Search packages"
        />
      </Grid>
      <Grid item>
        <Button
          variant="outlined"
          color="primary"
          className={styles.searchButton}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Grid>
    </Grid>
  );
};

export default SearchBar;
