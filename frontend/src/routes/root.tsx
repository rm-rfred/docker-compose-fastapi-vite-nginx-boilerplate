import { Box, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <Box sx={{ display: "flex" }}>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
          paddingBottom: 5,
        }}
      >
        <Toolbar></Toolbar>
        <Outlet />
      </Box>
    </Box>
  );
}
