//ACTION TYPES
import {
  TOGGLE_LOADING,
  SET_SEARCH_WORD,
  SET_NEWS_DATA,
  SET_CATEGORY,
} from "../actions/types";

//UTILS
import moment from "moment";

//TYPESCRIPT
import { News } from "../interfaces/news";

const initialstate = {
  newsData: [],
  searchWord: "",
  isLoading: false,
  date: moment().format("YYYY-MM-DD"),
  category: 0,
};

const rootReducer = (
  state: {
    newsData: News[] | never[];
    searchWord: string;
    isLoading: boolean;
    date: string;
    category: number;
  } = initialstate,
  action: {
    type: string;
    value: any;
  }
) => {
  switch (action.type) {
    case SET_NEWS_DATA:
      return { ...state, newsData: action.value };
    case SET_SEARCH_WORD:
      return { ...state, searchWord: action.value };
    case TOGGLE_LOADING:
      return { ...state, isLoading: !state.isLoading };
    case SET_CATEGORY:
      return { ...state, category: action.value };
    default:
      return state;
  }
};

export default rootReducer;
