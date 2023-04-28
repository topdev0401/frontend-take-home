import React, { FC } from "react";
import { PackageProps } from "./types";
import { Link, Grid, Typography, Divider } from "@mui/material";

const Package: FC<PackageProps> = ({ packageData }) => {
  const {
    package: { links, name, description, publisher, version },
  } = packageData;

  return (
    <Grid container item spacing={1} xs={12} md={6}>
      <Grid container item xs={12} justifyContent="flex-start">
        <Link href={links.npm} target="_blank" color="#000" fontSize={18}>
          {name}
        </Link>
      </Grid>
      <Grid item xs={12}>
        <Typography textAlign="left" color="grey">
          {description}
        </Typography>
      </Grid>
      <Grid container item xs={12} spacing={1}>
        <Grid item>
          <Typography textAlign="left">
            <b>{publisher.username}</b>
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            textAlign="left"
            color="grey"
          >{`published ${version}`}</Typography>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Divider orientation="horizontal" color='lightgrey' style={{ width: '100%' }}/>
      </Grid>
    </Grid>
  );
};

export default Package;
