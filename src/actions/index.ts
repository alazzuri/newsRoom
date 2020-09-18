//REDUX
import { ThunkAction } from "redux-thunk";
import { Store } from "../store";
import { Action } from "redux";
import { useSelector } from "react-redux";

//ACTION TYPES
import {
  TOGGLE_LOADING,
  SET_INPUT_TEXT,
  SET_NEWS_DATA,
  SET_CATEGORY,
} from "./types";

//UITLS
import { HOME_FEED, BY_CATEGORY, BY_WORD } from "../utils/constants";

//API
import {
  getLatestNews,
  getNewsByCategory,
  getNewsByWord,
} from "../provider/canillitaApp";

//TYPESCRIPT
import { News } from "../interfaces/news";

export const toggleLoading = (currentLoadingStatus: boolean) => ({
  type: TOGGLE_LOADING,
  value: !currentLoadingStatus,
});

export const setInputText = (text: string) => ({
  type: SET_INPUT_TEXT,
  value: text,
});

export const setNewsData = (news: News[]) => ({
  type: SET_NEWS_DATA,
  value: news,
});

export const setCategory = (category: string) => ({
  type: SET_CATEGORY,
  value: category,
});
