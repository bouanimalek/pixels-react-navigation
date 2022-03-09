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
      const indexResult = state.selectedUsers.findIndex(
        (user) => user.id === action.userId
      );
      if (indexResult >= 0) {
        // user exist
        const newSelectedUsers = [...state.selectedUsers];
        newSelectedUsers.splice(indexResult, 1);
        return { ...state, selectedUsers: newSelectedUsers };
      } else {
        // no user
        const user = state.users.find((user) => user.id === action.userId);
        return { ...state, selectedUsers: state.selectedUsers.concat(user) };
      }

    default:
      return state;
  }
};

export default appReducer;
