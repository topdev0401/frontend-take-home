import React, { useMemo, useState } from "react";
import PackageList from "./components/PackageList";
import SearchBar from "./components/SearchBar";
import { IPackage } from "./utils/interfaces";
import { getPackages } from "./api/packages";
import { LinearProgress, Typography, Box, CssBaseline, PaletteMode, Grid, FormControlLabel, Switch } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { DARK_MODE_THEME, LIGHT_MODE_THEME } from "./utils/constants";
import { getAppTheme } from "./utils/theme";

import "./App.css";

/**
 * Interface of state
 */
interface IState {
  packages: IPackage[];
  loading: boolean;
  error: string;
  theme: PaletteMode;
}

function App() {
  const [state, setState] = useState<IState>({
    packages: [],
    loading: false,
    error: "",
    theme: DARK_MODE_THEME,
  });

  // Define your MUI theme
  const theme = useMemo(() => getAppTheme(state.theme), [state.theme])

  /**
   * Query packages from API
   * @param keyword query word
   * @returns 
   */
  const fetchPackages = async (keyword: string, simulateError: boolean = false): Promise<void> => {
    setState((prevState) => ({ ...prevState, loading: true }));

    // avoid empty keyword
    if (!keyword) {
      setState((prevState) => ({ ...prevState, packages: [], loading: false }));
      return;
    }

    // error handling
    try {
      const apiResponse = await getPackages({ keyword, simulateError });
      setState((prevState) => ({ ...prevState, packages: apiResponse, error: "" }));
    } catch (error: any) {
      setState((prevState) => ({ ...prevState, error: `Error: ${error.message}` }));
    }

    setState((prevState) => ({ ...prevState, loading: false }));
  };

  const handleThemeChange = () => {
    setState((prevState) => ({
      ...prevState,
      theme: state.theme === DARK_MODE_THEME ? LIGHT_MODE_THEME : DARK_MODE_THEME 
    }))
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className="App">
        <Grid container justifyContent='space-between' alignItems='center'>
          <Typography variant="h3">Package Search</Typography>
          <FormControlLabel
            control={
              <Switch checked={state.theme === DARK_MODE_THEME} onChange={handleThemeChange} />
            }
            label="Theme"
          />
        </Grid>
        {/* Loading spinner */}
        {state.loading && <LinearProgress />}

        {/* Search bar */}
        <SearchBar fetch={fetchPackages} />

        {/* Handle error */}
        {state.error && <Typography>{state.error}</Typography>}

        {/* Show search results when we don't have an error */}
        {!state.error && <PackageList packages={state.packages} />}
      </Box>
    </ThemeProvider>
  );
}

export default App;
