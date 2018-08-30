import { put, call } from "redux-saga/effects";

import * as actions from "../actions";
import * as api from "../api";

export default function* loadAllGamesSaga() {
  yield put(actions.loadAllGamesAttempt());
  try {
    const data = yield call(api.allGamesResponse);
    yield put(actions.loadAllGamesSuccess(data));
  } catch (err) {
    yield put(actions.loadAllGamesFail(err));
  }
}
