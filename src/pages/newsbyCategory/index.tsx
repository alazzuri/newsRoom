import { Action, ThunkAction } from "@reduxjs/toolkit";
//REACT
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//ROUTER
import { useParams } from "react-router-dom";
import { setNewsData } from "../../actions";
import NewsContainer from "../../containers/NewsContainer";
import { getNewsByCategory } from "../../provider/canillitaApp";
import { Store } from "../../store";
import { getCategoryNumber } from "../../utils/news";

const NewsByCategory = () => {
  const dispatch = useDispatch();
  const { name } = useParams<{ name: string }>();
  const news = useSelector((state: Store) => state.newsData);
  const categoryId = getCategoryNumber(name);

  useEffect(() => {
    const fetchNews = (
      id: number
    ): ThunkAction<void, Store, unknown, Action<string>> => {
      dispatch(setNewsData([]));
      return async (dispatch) => {
        const response = await getNewsByCategory(id);
        dispatch(setNewsData(response));
      };
    };

    dispatch(fetchNews(categoryId));
  }, [categoryId]);

  return <NewsContainer news={news} />;
};

export default NewsByCategory;
