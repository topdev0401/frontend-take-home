import React, { FC, useState } from "react";
import { SearchBarProps } from "./types";
import { Grid, TextField, Button } from "@mui/material";

import useStyles from "./styles";

/**
 * Search bar component contains search input box and submit button
 * @param fetch function for triggering API request
 * @returns 
 */
const SearchBar: FC<SearchBarProps> = ({ fetch }) => {
  const styles = useStyles();

  /**
   * controlled state of search bar input box
   */
  const [keyword, setKeyword] = useState("");
  
  /**
   * trigger fetch function when click the button
   */
  const handleSearch = () => {
    fetch(keyword)
  }

  return (
    /**
     * Used Grid to layout input box and button
     */
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
