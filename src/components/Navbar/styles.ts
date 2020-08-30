import { makeStyles, fade } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    color: "white",
    padding: "1.2rem",
    marginTop: "0.1rem",
    boxShadow: "0 3px 5px 2px rgba(54, 53, 55, .3)",
    background: "#363537",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    [theme.breakpoints.down("md")]: {
      justifyContent: "flex-end",
    },
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },
  searchContainer: {
    display: "flex",
    justifyContent: "flex-end",
    paddingRight: "3rem",
    [theme.breakpoints.down("md")]: {
      justifyContent: "flex-end",
      width: "50%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "80%",
      paddingRight: "0rem",
    },
  },
  search: {
    position: "relative",
    display: "flex",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    [theme.breakpoints.up("xs")]: {
      width: "100%",
      marginLeft: 0,
      marginRight: 0,
      justifyContent: "space-between",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(0, 2),
    },
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(1)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  button: {
    "&:hover": {
      color: "rgb(122,123,122)",
    },
  },
  desktopNavbar: {
    display: "block",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
}));
