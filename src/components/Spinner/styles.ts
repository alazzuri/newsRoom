import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    height: "100vh",
    background: "#363537",
    position: "absolute",
    zIndex: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));
