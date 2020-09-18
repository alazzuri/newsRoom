import React from "react";

import { PacmanLoader } from "react-spinners";
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
