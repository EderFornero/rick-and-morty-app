import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions-type";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.allCharacters, action.payload],
        allCharacters: [...state.allCharacters, action.payload],
      };
    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (e) => e.id !== Number(action.payload)
        ),
      };
    case FILTER:
      const filtered = state.allCharacters.filter(
        (char) => char.gender === action.payload
      );
      return {
        ...state,
        myFavorites:
          action.payload === "all" ? [...state.allCharacters] : filtered,
      };
    case ORDER:
      const ordered = [...state.allCharacters];
      return {
        ...state,
        myFavorites: ordered.sort((a, b) =>
          action.payload === "A" ? a.id - b.id : b.id - a.id
        ),
      };

    default:
      return { ...state };
  }
};

export default reducer;
