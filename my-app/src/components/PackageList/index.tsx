import React, { FC } from "react";
import { Grid } from "@mui/material";
import { PackageListProps } from "./types";
import { IPackage } from "../../utils/interfaces";
import Package from "../Package";

/**
 * This component renders a list of package items
 * @param packages: An array of package data to be displayed
 * @returns 
 */
const PackageList: FC<PackageListProps> = ({ packages }) => {
  return (
    // Render a grid with package items
    <Grid container spacing={2}>
      {packages.map((pkg: IPackage, index: number) => (
        // Loop through the list of packages and render a Package component for each one
        <Package key={index} packageData={pkg} />
      ))}
    </Grid>
  );
};

export default PackageList;
