import { DATA } from "../../data/userData";

const initialState = {
  users: DATA,
  selectedUsers: [],
  selectedCategories: DATA,
};
// Reducer
const appReducer = (state = initialState, action) => {
  return state;
};

export default appReducer;
