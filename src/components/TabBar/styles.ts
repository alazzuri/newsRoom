import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  tabBarContainer: {
    flexGrow: 1,
    width: "100%",
    position: "fixed",
    bottom: 0,
    left: 0,
    display: "none",

    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  },

  tabBar: {
    background: "#363537",
  },

  indicator: { backgroundColor: "#FE6B8B" },
}));
