//REACT
import React from "react";

//COMPONENTS
import Skeleton from "@material-ui/lab/Skeleton";

//STYLES
import {
  BigCardContainer,
  VerticalCardsContainer,
  Container,
  HorizontalCardsContainer,
  StyledSkeleton,
} from "./styles";

const TopSection: React.FC<{ large?: number; medium?: number }> = ({
  large = 1,
  medium = 3,
}) => (
  <>
    {Array.from(new Array(large), () => (
      <BigCardContainer item sm={12} lg={4}>
        <StyledSkeleton variant="rect" animation="wave" />
      </BigCardContainer>
    ))}
    <VerticalCardsContainer item sm={12} lg={8}>
      {Array.from(new Array(medium), () => (
        <StyledSkeleton variant="rect" animation="wave" />
      ))}
    </VerticalCardsContainer>
    <Skeleton variant="rect" width="100%" height="100%" />
  </>
);

const SmallCardsSection: React.FC<{ items?: number }> = ({ items = 3 }) => {
  return (
    <HorizontalCardsContainer item sm={6} lg={12}>
      {Array.from(new Array(items), () => (
        <StyledSkeleton variant="rect" animation="wave" />
      ))}
    </HorizontalCardsContainer>
  );
};

const SkeletonContainer: React.FC = () => {
  return (
    <Container container spacing={0}>
      <TopSection />
      <SmallCardsSection />
      <SmallCardsSection />
    </Container>
  );
};

export default SkeletonContainer;
