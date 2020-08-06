//REACT
import React from "react";

//ROUTER
import { useParams } from "react-router-dom";

const NewsByCategory = () => {
  const { name } = useParams();

  return <div>{name}</div>;
};

export default NewsByCategory;
