//REACT
import React, { useEffect } from "react";

//COMPONENTS
import NewsContainer from "../../containers/NewsContainer";

//REDUX
import { useDispatch, useSelector } from "react-redux";
import { Action, ThunkAction } from "@reduxjs/toolkit";
import { setNewsData, toggleLoading } from "../../actions";
import { Store } from "../../store";

//ROUTER
import { useParams } from "react-router-dom";

//UTILS
import { getNewsByCategory } from "../../provider/canillitaApp";
import { getCategoryNumber } from "../../utils/news";

const NewsByCategory = () => {
  const { name } = useParams<{ name: string }>();
  const news = useSelector((state: Store) => state.newsData);
  const isLoading = useSelector((state: Store) => state.isLoading);
  const categoryId = getCategoryNumber(name);
  const dispatch = useDispatch();

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const fetchNews = (
      id: number
    ): ThunkAction<void, Store, unknown, Action<string>> => {
      dispatch(setNewsData([]));
      dispatch(toggleLoading());

      return async (dispatch) => {
        const response = await getNewsByCategory(id, signal);

        dispatch(setNewsData(response));
        dispatch(toggleLoading());
      };
    };

    dispatch(fetchNews(categoryId));

    return () => {
      abortController.abort();
    };
  }, [categoryId]);

  return <NewsContainer news={news} loading={isLoading} />;
};

export default NewsByCategory;
