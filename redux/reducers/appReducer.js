import { DATA } from "../../data/userData";
import { SET_SELECTION } from "../constants";

const initialState = {
  users: DATA,
  selectedUsers: [],
  selectedCategories: DATA,
};
// Reducer
const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTION:
      break;

    default:
      break;
  }
  return state;
};

export default appReducer;
