// ########## Import Components Here ##########
import * as types from "../constants";

const initial = {
  isLoading: false,
  error: null,
  data: [
    {
      id: "",
      status: "",
      gameProvider: "",
      startType: "",
      isFreeplayAllowed: null,
      nextOpeningTimeUtc: null,
      nextClosingTimeUtc: null,
      openingTimeUtc: null,
      closingTimeUtc: null,
      showIsLeavingJurisdiction: null,
      allowedOrientation: "",
      tags: [""],
      gameCollectionIds: [""],
      gameId: "",
      name: "",
      width: null,
      height: null,
      description: "",
      themeUrl: "",
      thumbnailUrl: "",
      helpUrl: "",
      trivia: [],
      seoName: "",
      friendlyName: ""
    }
  ]
};

export default function(state = initial, action) {
  let data;

  switch (action.type) {
    case types.LOAD_ALL_GAMES_ATTEMPT:
      return { ...state, isLoading: true };
    case types.LOAD_ALL_GAMES_SUCCESS:
      data = action.payload;
      return { ...state, data, isLoading: false, error: null };
    case types.LOAD_ALL_GAMES_FAIL:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
}
