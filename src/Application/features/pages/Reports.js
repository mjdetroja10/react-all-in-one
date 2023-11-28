import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAppbarTitle } from "redux-store/actions/AppTitleAction,";

export const Reports = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAppbarTitle("Reports"));
  }, [dispatch]);

  return <div>Reports</div>;
};
