import createSagaMiddleware from "redux-saga";
import { newsSaga } from "pages/news/saga";
import { fork } from "redux-saga/effects";

export const sagaMiddleware = createSagaMiddleware();
export function* rootSaga() {
  yield fork(newsSaga);
}
