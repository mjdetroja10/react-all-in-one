import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAppbarTitle } from "redux-store/actions/AppTitleAction,";

export const Settings = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAppbarTitle("Settings"));
  }, [dispatch]);

  return <div>Settings</div>;
};
