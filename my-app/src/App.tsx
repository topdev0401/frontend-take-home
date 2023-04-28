import React, { useEffect, useState } from "react";
import PackageList from "./components/PackageList";
import SearchBar from "./components/SearchBar";
import { IPackage } from "./utils/interfaces";
import { getPackages } from "./api/packages";

import "./App.css";

function App() {
  const [packages, setPackages] = useState<IPackage[]>([]);

  const fetchPackages = async (keyword: string): Promise<void> => {
    const apiResponse = await getPackages({ keyword });
    setPackages(apiResponse);
  };

  return (
    <div className="App">
      <SearchBar fetch={fetchPackages} />
      <PackageList packages={packages} />
    </div>
  );
}

export default App;
