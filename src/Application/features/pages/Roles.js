import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAppbarTitle } from "redux-store/actions/AppTitleAction,";

export const Roles = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAppbarTitle("Roles"));
  }, [dispatch]);

  return <div>Roles</div>;
};
