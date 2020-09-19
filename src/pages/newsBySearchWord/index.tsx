//REACT
import React, { useEffect } from "react";

//REDUX
import { useDispatch, useSelector } from "react-redux";
import { Store } from "../../store";
import { Action, ThunkAction } from "@reduxjs/toolkit";
import { setNewsData, toggleLoading } from "../../actions";

//ROUTER
import { useParams } from "react-router-dom";

//UTILS
import { getNewsByWord } from "../../provider/canillitaApp";
import NewsContainer from "../../containers/NewsContainer";

const NewsBySearchWord = () => {
  const dispatch = useDispatch();
  const { word } = useParams<{ word: string }>();
  const news = useSelector((state: Store) => state.newsData);
  const isLoading = useSelector((state: Store) => state.isLoading);

  useEffect(() => {
    const fetchNews = (
      word: string
    ): ThunkAction<void, Store, unknown, Action<string>> => {
      dispatch(setNewsData([]));
      dispatch(toggleLoading());
      return async (dispatch) => {
        const response = await getNewsByWord(word);
        dispatch(setNewsData(response));
        dispatch(toggleLoading());
      };
    };

    dispatch(fetchNews(word));
  }, [word]);

  return <NewsContainer news={news} loading={isLoading} />;
};

export default NewsBySearchWord;
