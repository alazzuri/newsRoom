//ACTION TYPES
import {
  TOGGLE_LOADING,
  SET_SEARCH_WORD,
  SET_NEWS_DATA,
  SET_CATEGORY,
} from "./types";

//TYPESCRIPT
import { News } from "../interfaces/news";

export const toggleLoading = () => ({
  type: TOGGLE_LOADING,
});

export const setSearchWord = (text: string) => ({
  type: SET_SEARCH_WORD,
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
