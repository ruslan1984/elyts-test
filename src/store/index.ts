import { combineReducers } from "redux";
import { reducer as newsReducer } from "pages/news/reducer";

export const reducers = combineReducers({
  newsReducer,
});

export type reducerType = ReturnType<typeof reducers>;
export default reducers;
