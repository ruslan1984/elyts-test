import { takeEvery, put, call, select } from "redux-saga/effects";
import { actions, requestNews } from "./reducer";
import { reducerType } from "store";
import { TNewsResponse } from "./types";

function* requestNewsSaga({ payload: currentPage }: { payload: number }) {
  try {
    if (!process.env.REACT_APP_HOST_API) return;
    const {
      newsReducer: { news, pageSize },
    }: reducerType = yield select();
    const isNews = news.some(({ page }) => page === currentPage);
    if (!isNews) {
      yield put(actions.setLoading(true));
      const host = `${process.env.REACT_APP_HOST_API}&pageSize=${pageSize}&page=${currentPage}`;
      const data: Response = yield call(fetch, host);
      const { status, articles, totalResults, message }: TNewsResponse =
        yield data.json();
      if (status === "ok") {
        const pCount = Math.round(totalResults / pageSize);
        yield put(actions.setPagesCount(pCount));
        yield put(actions.addPageNews({ page: currentPage, articles }));
      }
      if (status === "error") {
        console.error(message);
      }
    }
  } catch (err) {
    console.error(err);
  } finally {
    yield put(actions.setLoading(false));
  }
}

export function* newsSaga() {
  yield takeEvery(requestNews, requestNewsSaga);
}
