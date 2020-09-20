//REACT
import React from "react";

//COMPONENTS
import { PacmanLoader } from "react-spinners";

//STYLES
import { useStyles } from "./styles";

const Spinner = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <PacmanLoader color="#ffffff" />
    </div>
  );
};

export default Spinner;
