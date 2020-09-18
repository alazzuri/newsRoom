import { makeStyles, Theme } from "@material-ui/core/styles";

interface Props {
  imgUrl?: string;
  type?: string;
}

export const useStyles = makeStyles((theme: Theme) => ({
  root: (props: Props) => ({
    width: "100%",
    height: "100%",
    borderRadius: 0,
    backgroundImage: `url(${
      props.imgUrl ||
      "https://via.placeholder.com/300/363537/363537?Text=Nodisponible"
    })`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
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
  cardContent: (props: Props) => ({
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
      borderColor: "#0062cc",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#0062cc",
      borderColor: "#005cbf",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    },
  },

  title: (props: Props) => ({
    width: "70%",
    fontWeight: "bold",
    fontSize: `${props.type === "small" && "1.5rem"}`,

    [theme.breakpoints.down("xs")]: {
      fontSize: "2rem",
    },
  }),
}));
