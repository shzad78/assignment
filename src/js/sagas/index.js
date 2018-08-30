// ########## Import Dependencies Here ##########
import { takeLatest, fork, all } from "redux-saga/effects";

// ########## Import Components Here ##########
import * as types from "../constants";
import loadAllGamesSaga from "./loadAllGamesSaga";

function* watchLoadAllGames() {
  yield takeLatest(types.LOAD_ALL_GAMES, loadAllGamesSaga);
}

export default function* rootSaga() {
  yield all([fork(watchLoadAllGames)]);
}
