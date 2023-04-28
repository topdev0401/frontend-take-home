import React, { useState } from "react";
import PackageList from "./components/PackageList";
import SearchBar from "./components/SearchBar";
import { IPackage } from "./utils/interfaces";
import { getPackages } from "./api/packages";
import { LinearProgress, Typography } from "@mui/material";

import "./App.css";

/**
 * Interface of state
 */
interface IState {
  packages: IPackage[];
  loading: boolean;
  error: string;
}

function App() {
  const [state, setState] = useState<IState>({
    packages: [],
    loading: false,
    error: "",
  });

  /**
   * Query packages from API
   * @param keyword query word
   * @returns 
   */
  const fetchPackages = async (keyword: string, simulateError: boolean = false): Promise<void> => {
    setState((prevState) => ({ ...prevState, loading: true }));

    /**
     * avoid empty keyword
     */
    if (!keyword) {
      setState((prevState) => ({ ...prevState, packages: [], loading: false }));
      return;
    }

    /**
     * error handling
     */
    try {
      const apiResponse = await getPackages({ keyword, simulateError });
      setState((prevState) => ({ ...prevState, packages: apiResponse, error: "" }));
    } catch (error: any) {
      setState((prevState) => ({ ...prevState, error: `Error: ${error.message}` }));
    }

    setState((prevState) => ({ ...prevState, loading: false }));
  };

  return (
    <div className="App">
      {/* Loading spinner */}
      {state.loading && <LinearProgress />}

      {/* Search bar */}
      <SearchBar fetch={fetchPackages} />

      {/* Handle error */}
      {state.error && <Typography>{state.error}</Typography>}

      {/* Show search results when we don't have an error */}
      {!state.error && <PackageList packages={state.packages} />}
    </div>
  );
}

export default App;
