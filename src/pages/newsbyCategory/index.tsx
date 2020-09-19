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
  const dispatch = useDispatch();
  const { name } = useParams<{ name: string }>();
  const news = useSelector((state: Store) => state.newsData);
  const isLoading = useSelector((state: Store) => state.isLoading);
  const categoryId = getCategoryNumber(name);

  useEffect(() => {
    const fetchNews = (
      id: number
    ): ThunkAction<void, Store, unknown, Action<string>> => {
      dispatch(setNewsData([]));
      dispatch(toggleLoading());

      return async (dispatch) => {
        const response = await getNewsByCategory(id);
        dispatch(setNewsData(response));
        dispatch(toggleLoading());
      };
    };

    dispatch(fetchNews(categoryId));
  }, [categoryId]);

  return <NewsContainer news={news} loading={isLoading} />;
};

export default NewsByCategory;
