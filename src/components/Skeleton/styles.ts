import { styled } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";

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

export const StyledSkeleton = styled(Skeleton)(({ theme }) => ({
  height: "100%",
  width: "100%",
  border: "1px solid rgb(123,123,124)",

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
}));
