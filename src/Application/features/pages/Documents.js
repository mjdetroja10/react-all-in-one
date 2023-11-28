import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAppbarTitle } from "redux-store/actions/AppTitleAction,";

export const Documents = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAppbarTitle("Documents"));
  }, [dispatch]);

  return <div>Documents</div>;
};
