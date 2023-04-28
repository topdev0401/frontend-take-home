import React, { useEffect, useState } from "react";
import PackageList from "./components/PackageList";
import SearchBar from "./components/SearchBar";
import { IPackage } from "./utils/interfaces";
import { getPackages } from "./api/packages";
import { LinearProgress, Typography } from "@mui/material";

import "./App.css";

function App() {
  const [packages, setPackages] = useState<IPackage[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const fetchPackages = async (keyword: string): Promise<void> => {
    setLoading(true);

    if (!keyword) {
      setPackages([]);
      setLoading(false);
      return;
    }

    try {
      const apiResponse = await getPackages({ keyword });
      setError("");
      setPackages(apiResponse);
    } catch (error: any) {
      setError(`Error: ${error.message}`);
    }

    setLoading(false);
  };

  return (
    <div className="App">
      {/* Loading spinner */}
      {loading && <LinearProgress />}

      {/* Search bar */}
      <SearchBar fetch={fetchPackages} />
      
      {/* Handle error */}
      {error && <Typography>{error}</Typography>}

      {/* Show search results when we don't have an error */}
      {!error && <PackageList packages={packages} />}
    </div>
  );
}

export default App;
