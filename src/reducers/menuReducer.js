import { FETCH_MENU_ITEMS, FETCH_ERROR } from "../actions/types";

const initialState = {
  menuData: [],
  fetchError: '',
};

const menuReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_MENU_ITEMS:
      return {
        ...state,
        menuData: action.payload.MenuSections.filter((section) => section.MenuItems.length),
      }
    case FETCH_ERROR:
      return {
        ...state,
        fetchError: action.payload.toString(),
      }
    default:
      return state;
  }
};

export default menuReducer;