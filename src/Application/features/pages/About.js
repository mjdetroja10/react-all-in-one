import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAppbarTitle } from "redux-store/actions/AppTitleAction,";

export const About = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAppbarTitle("About"));
  }, [dispatch]);

  return <div>About</div>;
};
