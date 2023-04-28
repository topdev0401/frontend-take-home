import React, { FC } from "react";
import { PackageProps } from "./types";
import { Link, Grid, Typography, Divider } from "@mui/material";

import useStyles from "./styles"; // import the styles

/**
 * This component renders package component
 * @param packageData package information
 * @returns 
 */
const Package: FC<PackageProps> = ({ packageData }) => {
  const styles = useStyles(); // initialize the styles

  /**
   * destructuring the packageData prop to get the necessary properties
   */
  const {
    package: { links, name, description, publisher, version },
  } = packageData;

  return (
    <Grid container item spacing={1} xs={12} md={6}>
      <Grid container item xs={12} justifyContent="flex-start">
        <Link href={links.npm} target="_blank" className={styles.link}>
          {name} {/* display the package name */}
        </Link>
      </Grid>
      <Grid item xs={12}>
        <Typography className={styles.description}>{description}</Typography> {/* display the package description */}
      </Grid>
      <Grid container item xs={12} spacing={1}>
        <Grid item>
          <Typography textAlign="left">
            <b>{publisher.username}</b> {/* display the package publisher username */}
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            className={styles.description}
          >{`published ${version}`}</Typography> {/* display the package version */}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Divider
          orientation="horizontal"
          color="lightgrey"
          style={{ width: "100%" }}
        /> {/* display a divider line */}
      </Grid>
    </Grid>
  );
};

export default Package;
