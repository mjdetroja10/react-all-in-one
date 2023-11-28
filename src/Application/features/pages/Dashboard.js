import { Button } from "@mui/material";
import { ABOUT_URL } from "Application/constants/UrlConstants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAppbarTitle } from "redux-store/actions/AppTitleAction,";

export const Dashboard = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAppbarTitle("Dashboard"));
  }, [dispatch]);

  return (
    <>
      Dashboard
      <Button onClick={() => navigate(ABOUT_URL)}>About page</Button>
    </>
  );
};
