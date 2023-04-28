import React, { FC, useState } from "react";
import { SearchBarProps } from "./types";
import { Grid, TextField, Button, FormControlLabel, Checkbox } from "@mui/material";

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
  const [keyword, setKeyword] = useState<string>("");
  const [simulateError, setSimulateError] = useState<boolean>(false)
  
  /**
   * trigger fetch function when click the button
   */
  const handleSearch = () => {
    fetch(keyword, simulateError)
  }

  /**
   * handle checkbox click event
   */
  const handleSimulateChecked = () => {
    setSimulateError(!simulateError)
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
      <Grid item marginLeft={2}>
        <FormControlLabel
            label='Simulate Error'
            control={<Checkbox checked={simulateError} onChange={handleSimulateChecked} />}
        />
      </Grid>
    </Grid>
  );
};

export default SearchBar;
