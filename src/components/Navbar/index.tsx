//REACT
import React, { ChangeEvent, SyntheticEvent } from "react";

//COMPONENTS
import MobileTabBar from "../TabBar";

//REDUX
import { useDispatch, useSelector } from "react-redux";
import { Store } from "../../store";
import { setSearchWord } from "../../actions";

//MATERIAL UI
import { AppBar, Button, Grid, Tooltip, InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

//STYLES
import { useStyles } from "./styles";

//ROUTES
import { Link, useHistory } from "react-router-dom";

//UTILS
import { newsCategories } from "../../utils/constants";
import { keyGenerator } from "../../utils/keyGenerator";

//TYPESCRIPT
interface NavRoute {
  name: string;
  path: string;
}

const Navbar = () => {
  const styles = useStyles();
  const history = useHistory();
  const searchWord = useSelector((state: Store) => state.searchWord);
  const dispatch = useDispatch();

  const renderNavRoutes = (routes: Array<NavRoute>) => (
    <>
      <Link to="/">
        <Button color="inherit" classes={{ root: styles.button }}>
          Home
        </Button>
      </Link>
      {routes.map((category, index) => (
        <Link to={`/category/${category.path}`} key={keyGenerator()}>
          <Button color="inherit" classes={{ root: styles.button }}>
            {category.name}
          </Button>
        </Link>
      ))}
    </>
  );

  const onHandleSearch = (e: SyntheticEvent) => {
    e.preventDefault();

    if (searchWord.match(/[A-z0-9]{3,}/gm)) {
      dispatch(setSearchWord(""));

      history.push(`/search/${searchWord}`);
    }
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchWord(e.target.value));
  };

  return (
    <AppBar position="relative" classes={{ root: styles.root }}>
      <Grid item md={7} xs={1} classes={{ root: styles.desktopNavbar }}>
        {renderNavRoutes(newsCategories)}
      </Grid>
      <Grid item md={3} classes={{ root: styles.searchContainer }}>
        <Tooltip
          title="Ingresa al menos 3 caracteres"
          disableHoverListener
          placement="bottom-start"
          classes={{ tooltip: styles.tooltip }}
        >
          <form className={styles.search} onSubmit={onHandleSearch}>
            <InputBase
              placeholder="Buscar…"
              classes={{
                root: styles.inputRoot,
                input: styles.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
              onChange={onInputChange}
              value={searchWord}
            />
            <Button className={styles.searchIcon} onClick={onHandleSearch}>
              <SearchIcon />
            </Button>
          </form>
        </Tooltip>
      </Grid>
      <MobileTabBar />
    </AppBar>
  );
};

export default Navbar;
