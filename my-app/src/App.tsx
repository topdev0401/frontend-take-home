import React, { useEffect, useState } from "react";
import PackageList from "./components/PackageList";
import SearchBar from "./components/SearchBar";
import { IPackage } from "./utils/interfaces";
import { getPackages } from "./api/packages";
import { LinearProgress } from "@mui/material";

import "./App.css";

function App() {
  const [packages, setPackages] = useState<IPackage[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchPackages = async (keyword: string): Promise<void> => {
    setLoading(true);

    if (!keyword) {
      setPackages([]);
      setLoading(false);
      return;
    }

    const apiResponse = await getPackages({ keyword });
    setPackages(apiResponse);

    setLoading(false);
  };

  return (
    <div className="App">
      {loading && <LinearProgress />}
      <SearchBar fetch={fetchPackages} />
      <PackageList packages={packages} />
    </div>
  );
}

export default App;
