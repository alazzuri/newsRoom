//REACT
import React, { useEffect } from "react";

//REDUX
import { useDispatch, useSelector } from "react-redux";
import { Store } from "../../store";
import { Action, ThunkAction } from "@reduxjs/toolkit";

//ROUTER
import { useParams } from "react-router-dom";
import { setNewsData } from "../../actions";

//UTILS
import { getNewsByWord } from "../../provider/canillitaApp";
import NewsContainer from "../../containers/NewsContainer";

const NewsBySearchWord = () => {
  const dispatch = useDispatch();
  const { word } = useParams<{ word: string }>();
  const news = useSelector((state: Store) => state.newsData);

  useEffect(() => {
    const fetchNews = (
      word: string
    ): ThunkAction<void, Store, unknown, Action<string>> => {
      dispatch(setNewsData([]));
      return async (dispatch) => {
        const response = await getNewsByWord(word);
        dispatch(setNewsData(response));
      };
    };

    dispatch(fetchNews(word));
  }, [word]);

  return <NewsContainer news={news} />;
};

export default NewsBySearchWord;
