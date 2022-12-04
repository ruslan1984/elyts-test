import { createSlice, PayloadAction, createAction } from "@reduxjs/toolkit";
import { TNewsSlice, TPageNews } from "./types";

export const defaultState: TNewsSlice = {
  news: [],
  pagesCount: 0,
  pageSize: 6,
  loading: false,
  error: undefined,
};

export const requestNews = createAction<number>("requestNews");

export const newsSlice = createSlice({
  name: "newsSlice",
  initialState: defaultState,
  reducers: {
    addPageNews: (state, { payload }: PayloadAction<TPageNews>) => {
      const news = [...state.news, payload];
      return { ...state, news };
    },
    setPagesCount: (state, { payload }: PayloadAction<number>) => {
      return { ...state, pagesCount: payload };
    },
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      return { ...state, loading: payload };
    },
  },
});
export const { actions, reducer } = newsSlice;
