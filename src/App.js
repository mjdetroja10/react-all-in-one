import { Login } from "./Application/features/auth/Login/Login";
import { Route, Routes } from "react-router-dom";
import {
  ABOUT_URL,
  DOCUMENTS_URL,
  HOME_URL,
  LOGIN_URL,
  NOT_FOUND_URL,
  REPORTS_URL,
  ROLES_URL,
  SETTINGS_URL,
} from "./Application/constants/UrlConstants";
import { AppLayout } from "Application/features/Layout/AppLayout";
import {
  About,
  Dashboard,
  Documents,
  Reports,
  Roles,
  Settings,
} from "Application/features/pages";

export const App = () => {
  return (
    <Routes>
      <Route path={LOGIN_URL} element={<Login />} />

      <Route element={<AppLayout />}>
        <Route path={HOME_URL} element={<Dashboard />} />
        <Route path={ABOUT_URL} element={<About />} />
        <Route path={DOCUMENTS_URL} element={<Documents />} />
        <Route path={REPORTS_URL} element={<Reports />} />
        <Route path={SETTINGS_URL} element={<Settings />} />
        <Route path={ROLES_URL} element={<Roles />} />

        <Route path={NOT_FOUND_URL} element={<h2>Not Found page</h2>} />
      </Route>
    </Routes>
  );
};
