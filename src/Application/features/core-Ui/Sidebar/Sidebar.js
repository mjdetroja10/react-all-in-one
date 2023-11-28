import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import { DrawerHeader } from "./SIdebar.styled";
import {
  ABOUT_URL,
  AUTH_URLS,
  HOME_URL,
} from "Application/constants/UrlConstants";
import { Link, useLocation } from "react-router-dom";

const drawerWidth = 240;

const sidebarData = [
  { title: "Dashboard", path: HOME_URL },
  { title: "About", path: ABOUT_URL },
  { title: "Documents", path: "/documents" },
  { title: "Settings", path: "/settings" },
  { title: "Roles", path: "/roles" },
];

export const Sidebar = ({ open, toggleSidebar }) => {
  const theme = useTheme();

  const { pathname } = useLocation();

  console.log(pathname);

  const content = (
    <List>
      {sidebarData.map(({ title, path }) =>
        Boolean(
          localStorage.getItem("user-role") === "user" &&
            !AUTH_URLS.includes(path)
        ) ? null : (
          <ListItem
            key={title}
            as={Link}
            to={path}
            sx={{ color: "inherit" }}
            disablePadding
          >
            <ListItemButton selected={pathname === path}>
              <ListItemText primary={title} sx={{ textAlign: "center" }} />
            </ListItemButton>
          </ListItem>
        )
      )}
    </List>
  );

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <DrawerHeader>
        <IconButton onClick={toggleSidebar}>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </DrawerHeader>

      {content}
    </Drawer>
  );
};
