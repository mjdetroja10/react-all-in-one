import {
  AUTH_URLS,
  HOME_URL,
  LOGIN_URL,
} from "Application/constants/UrlConstants";
import { createContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const PUBLIC_URLS = [LOGIN_URL];

const USER_TOKEN_LOCAL_STORAGE_KEY = "userToken";

const ROLE_LOCAL_STORAGE_KEY = "user-role";

const isAuthorized = (path) =>
  Boolean(
    localStorage.getItem(ROLE_LOCAL_STORAGE_KEY) && AUTH_URLS.includes(path)
  );

const login = (navigate) => (data) => {
  if (data?.token) {
    localStorage.setItem(USER_TOKEN_LOCAL_STORAGE_KEY, data?.token);

    localStorage.setItem(ROLE_LOCAL_STORAGE_KEY, data?.role);

    navigate(HOME_URL);
  }
};

const logout = (router) => () => {
  localStorage.removeItem(USER_TOKEN_LOCAL_STORAGE_KEY);
  localStorage.removeItem(ROLE_LOCAL_STORAGE_KEY);

  router && router(LOGIN_URL);
};

const isAuthemticated = () =>
  Boolean(localStorage.getItem(USER_TOKEN_LOCAL_STORAGE_KEY));

export const AuthContextProvider = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  console.log(
    localStorage.getItem(ROLE_LOCAL_STORAGE_KEY),
    "localStorage.getItem(USER_TOKEN_LOCAL_STORAGE_KEY)"
  );

  useEffect(() => {
    if (isAuthemticated())
      location.pathname === LOGIN_URL && navigate(HOME_URL);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(isAuthemticated(location.pathname));

  useEffect(() => {
    if (!isAuthemticated() && !PUBLIC_URLS.includes(location.pathname))
      navigate(LOGIN_URL);

    if (
      isAuthemticated() &&
      !isAuthorized(location.pathname) &&
      !PUBLIC_URLS.includes(location.pathname)
    )
      navigate(HOME_URL);
  }, [navigate, location]);

  return (
    <AuthContext.Provider
      value={{ login: login(navigate), logout: logout(navigate) }}
    >
      {children}
    </AuthContext.Provider>
  );
};
