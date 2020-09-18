//ACTION TYPES
import {
  TOGGLE_LOADING,
  SET_INPUT_TEXT,
  SET_NEWS_DATA,
  SET_CATEGORY,
} from "../actions/types";

//UTILS
import moment from "moment";

//TYPESCRIPT
import { News } from "../interfaces/news";

const initialstate = {
  newsData: [],
  inputText: "",
  isLoading: false,
  date: moment().format("YYYY-MM-DD"),
  category: 0,
};

const rootReducer = (
  state: {
    newsData: News[] | never[];
    inputText: string;
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
    case SET_INPUT_TEXT:
      return { ...state, inputText: action.value };
    case TOGGLE_LOADING:
      return { ...state, isLoading: action.value };
    case SET_CATEGORY:
      return { ...state, category: action.value };
    default:
      return state;
  }
};

export default rootReducer;
