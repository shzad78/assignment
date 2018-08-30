import * as types from "../constants";

export function loadAllGames() {
  return {
    type: types.LOAD_ALL_GAMES
  };
}

export function loadAllGamesAttempt() {
  return {
    type: types.LOAD_ALL_GAMES_ATTEMPT
  };
}

export function loadAllGamesSuccess(data) {
  return {
    type: types.LOAD_ALL_GAMES_SUCCESS,
    payload: data
  };
}

export function loadAllGamesFail(err) {
  return {
    type: types.LOAD_ALL_GAMES_FAIL,
    payload: err
  };
}
