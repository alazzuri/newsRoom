import { makeStyles, Theme } from "@material-ui/core/styles";

interface Props {
  imgUrl?: string;
  type?: string;
}

export const useStyles = makeStyles((theme: Theme) => ({
  root: () => ({
    width: "100%",
    height: "100%",
    borderRadius: 0,
    filter: "brightness(0.7)",

    "&:hover": {
      filter: "brightness(0.9)",
      cursor: "pointer",
    },

    [theme.breakpoints.down("md")]: {
      height: "50vh",
    },

    [theme.breakpoints.down("sm")]: {
      height: "30vh",
    },

    [theme.breakpoints.down("xs")]: {
      width: "100%",
      height: "50vh",
    },
  }),

  cardContent: () => ({
    width: "90%",
    color: "white",
    position: "absolute",
    bottom: 50,
  }),

  buttonContainer: {
    position: "absolute",
    bottom: 20,
    right: 50,
  },

  button: {
    color: "white",
    backgroundColor: "#FE6B8B",

    "&:hover": {
      filter: "brightness(0.9)",
      backgroundColor: "#FE6B8B",
      borderColor: "none",
      boxShadow: "none",
    },

    "&:active": {
      boxShadow: "none",
      filter: "brightness(0.8)",
      backgroundColor: "#FE6B8B",
      borderColor: "none",
      outline: "none",
    },

    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(254, 107, 139, 0.5)",
    },
  },

  title: (props: Props) => ({
    width: "70%",
    fontWeight: "bold",
    fontSize: `${props.type === "small" ? "1.5rem" : "1.8rem"}`,
    textShadow: "2px 2px #000000",

    [theme.breakpoints.down("md")]: {
      fontSize: `${
        (props.type === "medium" && "1.5rem") ||
        (props.type === "small" && "1.8rem")
      }`,
    },

    [theme.breakpoints.down("sm")]: {
      fontSize: `${props.type === "small" ? "1.1rem" : "1.6rem"}`,
    },

    [theme.breakpoints.down("xs")]: {
      fontSize: "2rem",
    },
  }),

  smallImage: {
    width: "100%",
    height: "100%",
    position: "absolute",

    [theme.breakpoints.down("md")]: {
      width: "150%",
      minHeight: 410,
    },

    [theme.breakpoints.down("sm")]: {
      width: "100%",
      minHeight: 250,
    },

    [theme.breakpoints.down("xs")]: {
      width: "150%",
      minHeight: 410,
    },
  },

  mediumImage: {
    width: "200%",
    position: "absolute",
    minHeight: 600,

    [theme.breakpoints.down("md")]: {
      width: "150%",
      minHeight: 410,
    },

    [theme.breakpoints.down("sm")]: {
      width: "100%",
      minHeight: 250,
    },

    [theme.breakpoints.down("xs")]: {
      width: "150%",
      minHeight: 410,
    },
  },

  largeImage: {
    width: "150%",
    position: "absolute",
    minHeight: 600,

    [theme.breakpoints.down("md")]: {
      width: "100%",
      minHeight: 410,
    },

    [theme.breakpoints.down("sm")]: {
      width: "100%",
      minHeight: 250,
    },

    [theme.breakpoints.down("xs")]: {
      width: "150%",
      minHeight: 410,
    },
  },
}));
