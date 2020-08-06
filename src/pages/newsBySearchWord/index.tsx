//REACT
import React from "react";

//ROUTER
import { useParams } from "react-router-dom";

const NewsBySearchWord = () => {
  const { word } = useParams();

  return <div>{word}</div>;
};

export default NewsBySearchWord;
