import { APPBAR_TITLE_TYPE } from "redux-store/types/AppbarTypes";

const initialState = { title: "" };

const updateAppbarTitle = (state, title) => ({ ...state, title });

export const AppBarReducer = (state = initialState, action) => {
  switch (action.type) {
    case APPBAR_TITLE_TYPE.SET_APPBAR_TITLE:
      return updateAppbarTitle(state, action.payload);

    default:
      return state;
  }
};
