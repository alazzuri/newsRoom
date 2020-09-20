//REACT
import React from "react";

//MATERIAL UI
import { AppBar, Grid, Avatar, Typography } from "@material-ui/core";

//STYLES
import { useStyles } from "./styles";

//REDUX
import { useSelector } from "react-redux";
import { Store } from "../../store";

//UTILS
import { APP_TITLE } from "../../utils/constants";
import Moment from "react-moment";
import "moment/locale/es";
Moment.globalLocale = "es";

const Header = () => {
  const styles = useStyles();
  const currentDate = useSelector((state: Store) => state.date);

  return (
    <AppBar position="relative" classes={{ root: styles.root }}>
      <Grid container>
        <Grid xs={12} md={6} item classes={{ root: styles.logoContainer }}>
          <Avatar
            src="/assets/icons/newspaper.svg"
            classes={{ root: styles.logoImg }}
            alt="avatar"
          />
          <Typography variant="h3" component="h1">
            {APP_TITLE}
          </Typography>
        </Grid>
        <Grid xs={12} md={6} item classes={{ root: styles.dateContainer }}>
          <Typography variant="h6">
            {`Noticias del `}
            <Moment format="dddd LL" local>
              {currentDate}
            </Moment>
          </Typography>
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default Header;
