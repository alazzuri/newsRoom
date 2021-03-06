//REACT
import React, { useEffect } from "react";

//COMPONENTS
import NewsContainer from "../../containers/NewsContainer";

//REDUX
import { useSelector, useDispatch } from "react-redux";
import { setNewsData, toggleLoading } from "../../actions";
import { Store } from "../../store";
import { Action, ThunkAction } from "@reduxjs/toolkit";

//UTILS
import { getLatestNews } from "../../api_provider/canillitaApp";

const Home = () => {
  const news = useSelector((state: Store) => state.newsData);
  const date = useSelector((state: Store) => state.date);
  const isLoading = useSelector((state: Store) => state.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const fetchNews = (): ThunkAction<void, Store, unknown, Action<string>> => {
      dispatch(setNewsData([]));
      dispatch(toggleLoading());

      return async (dispatch) => {
        const response = await getLatestNews(date, signal);

        dispatch(setNewsData(response));
        dispatch(toggleLoading());
      };
    };

    dispatch(fetchNews());

    return () => {
      abortController.abort();
    };
  }, []);

  return <NewsContainer news={news} loading={isLoading} />;
};

export default Home;
