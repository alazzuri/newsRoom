import { styled } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

export const Container = styled(Grid)(({ theme }) => ({
  height: "100%",
  width: "100%",

  [theme.breakpoints.down("md")]: {
    marginBottom: "2.5rem",
  },
}));

export const BigCardContainer = styled(Grid)(({ theme }) => ({
  height: 600,
  width: "100%",

  [theme.breakpoints.down("md")]: {
    height: "auto",
  },
}));

export const VerticalCardsContainer = styled(Grid)(({ theme }) => ({
  height: 600,
  width: "100%",
  display: "flex",
  flexDirection: "row",

  [theme.breakpoints.down("md")]: {
    height: "auto",
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

export const HorizontalCardsContainer = styled(Grid)(({ theme }) => ({
  height: 300,
  width: "100%",
  display: "flex",
  flexDirection: "row",

  [theme.breakpoints.down("md")]: {
    height: "auto",
    flexDirection: "column",
  },
}));
