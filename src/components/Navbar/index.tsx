//REACT
import React from "react";

//COMPONENTS
import MobileTabBar from "../TabBar";

//MATERIAL UI
import { AppBar, Button, Grid } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";

//STYLES
import { useStyles } from "./styles";

const Navbar = () => {
  const styles = useStyles();

  return (
    <AppBar position="relative" classes={{ root: styles.root }}>
      <Grid md={6} xs={1} classes={{ root: styles.desktopNavbar }}>
        <Button color="inherit" classes={{ root: styles.button }}>
          Login
        </Button>
      </Grid>
      <Grid md={4} classes={{ root: styles.searchContainer }}>
        <div className={styles.search}>
          <InputBase
            placeholder="Search…"
            classes={{
              root: styles.inputRoot,
              input: styles.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
          />
          <div className={styles.searchIcon}>
            <SearchIcon />
          </div>
        </div>
      </Grid>
      <MobileTabBar />
    </AppBar>
  );
};

export default Navbar;
