import React, { FC } from "react";
import { Grid } from "@mui/material";
import { PackageListProps } from "./types";
import { IPackage } from "../../utils/interfaces";
import Package from "../Package";

const PackageList: FC<PackageListProps> = ({ packages }) => {
  return (
    <Grid container spacing={2}>
      {packages.map((pkg: IPackage, index: number) => (
        <Package key={index} packageData={pkg} />
      ))}
    </Grid>
  );
};

export default PackageList;
