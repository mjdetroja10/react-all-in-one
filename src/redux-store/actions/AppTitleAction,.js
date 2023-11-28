import { APPBAR_TITLE_TYPE } from "redux-store/types/AppbarTypes";

export const setAppbarTitle = (title) => ({
  type: APPBAR_TITLE_TYPE.SET_APPBAR_TITLE,
  payload: title,
});
