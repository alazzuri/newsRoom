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

//ROUTES
import { Link } from "react-router-dom";

//UTILS
import { newsCategories } from "../../utils/constants";

//TYPESCRIPT
interface NavRoute {
  name: string;
  path: string;
}

const Navbar = () => {
  const styles = useStyles();

  const renderNavRoutes = (routes: Array<NavRoute>) => (
    <>
      <Link to="/">
        <Button color="inherit" classes={{ root: styles.button }}>
          Home
        </Button>
      </Link>
      {routes.map((category) => (
        <Link to={`/category/${category.path}`}>
          <Button color="inherit" classes={{ root: styles.button }}>
            {category.name}
          </Button>
        </Link>
      ))}
    </>
  );

  return (
    <AppBar position="relative" classes={{ root: styles.root }}>
      <Grid md={7} xs={1} classes={{ root: styles.desktopNavbar }}>
        {renderNavRoutes(newsCategories)}
      </Grid>
      <Grid md={3} classes={{ root: styles.searchContainer }}>
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
