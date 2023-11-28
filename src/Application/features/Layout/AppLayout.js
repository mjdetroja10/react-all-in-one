import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { Sidebar } from "../core-Ui/Sidebar/Sidebar";
import { Topbar } from "../core-Ui/Topbar/Topbar";
import { DrawerHeader, Main } from "../core-Ui/Sidebar/SIdebar.styled";
import { Outlet } from "react-router-dom";

export const AppLayout = () => {
  const [open, setOpen] = React.useState(true);

  const toggleSidebar = () => setOpen(!open);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Topbar open={open} toggleSidebar={toggleSidebar} />
      <Sidebar open={open} toggleSidebar={toggleSidebar} />

      <Main open={open}>
        <DrawerHeader />

        <Outlet />
      </Main>
    </Box>
  );
};
