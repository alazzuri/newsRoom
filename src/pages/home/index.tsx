import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setNewsData } from "../../actions";
import NewsContainer from "../../containers/NewsContainer";
import { Store } from "../../store";
import { Action, ThunkAction } from "@reduxjs/toolkit";
import { getLatestNews } from "../../provider/canillitaApp";

const Home = () => {
  const news = useSelector((state: Store) => state.newsData);
  const date = useSelector((state: Store) => state.date);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchNews = (): ThunkAction<void, Store, unknown, Action<string>> => {
      return async (dispatch) => {
        const response = await getLatestNews(date);
        dispatch(setNewsData(response));
      };
    };

    dispatch(fetchNews());
  }, []);

  return <NewsContainer news={news} />;
};

export default Home;
