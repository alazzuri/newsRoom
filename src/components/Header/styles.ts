import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    color: "white",
    padding: "1.2rem",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },

  logoContainer: {
    display: "flex;",
    alignItems: "center",
    justifyContent: "center",

    [theme.breakpoints.up("md")]: {
      justifyContent: "flex-start",
    },
  },

  logoImg: {
    padding: "1.5rem",
    fill: "white",
  },

  dateContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));
