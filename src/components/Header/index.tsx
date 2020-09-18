//REACT
import React from "react";

//MATERIAL UI
import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

//STYLES
import { useStyles } from "./styles";

//REDUX
import { useSelector } from "react-redux";
import { Store } from "../../store";

//UTILS
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
          />
          <Typography variant="h3" component="h1">
            News Room
          </Typography>
        </Grid>
        <Grid xs={12} md={6} item classes={{ root: styles.dateContainer }}>
          <Typography variant="h6">
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
