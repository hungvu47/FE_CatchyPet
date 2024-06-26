import { useState } from "react";
// @mui
import { alpha } from "@mui/material/styles";
import {
  Box,
  Divider,
  Typography,
  Stack,
  MenuItem,
  Avatar,
  IconButton,
  Popover,
} from "@mui/material";
// mocks_

import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { logOut } from "../../../slice/userSlice";
// ----------------------------------------------------------------------

const MENU_OPTIONS = [
  {
    label: "Profile",
    icon: "eva:person-fill",
    link: "/admin/profile",
  },
];

// ----------------------------------------------------------------------

export default function AccountPopover() {
  const [anchorEl, setAnchorEl] = useState(null);
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (link) => {
    setAnchorEl(null);
    navigate(link);
  };

  // const handleLogout = async () => {
  //   await dispatch(logOut());
  //   navigate("/login");
  // };
  const clickHome = async () => {
    navigate("/");
  };

  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{
          p: 0,
          ...(anchorEl && {
            "&:before": {
              zIndex: 1,
              content: "''",
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              bgcolor: (theme) =>
                alpha(theme.palette.grey[900], 0.8),
            },
          }),
        }}
      >
        {/* <Avatar src={account.photoURL} alt="photoURL" /> */}
      </IconButton>

      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        PaperProps={{
          sx: {
            p: 0,
            mt: 1.5,
            ml: 0.75,
            width: 180,
            "& .MuiMenuItem-root": {
              typography: "body2",
              borderRadius: 0.75,
            },
          },
        }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle2" noWrap>
            {/* {account.displayName} */}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary" }}
            noWrap
          >
            {/* {account.email} */}
          </Typography>
        </Box>

        <Divider sx={{ borderStyle: "dashed" }} />

        <MenuItem onClick={clickHome} sx={{ m: 1 }}>
          Client
        </MenuItem>
        <Stack sx={{ p: 1 }}>
          {MENU_OPTIONS.map((option) => (
            <MenuItem
              key={option.label}
              onClick={() => handleClose(option.link)}
            >
              {option.label}
            </MenuItem>
          ))}
        </Stack>

        <Divider sx={{ borderStyle: "dashed" }} />
        {/* 
        <MenuItem onClick={handleLogout} sx={{ m: 1 }}>
          Logout
        </MenuItem> */}
      </Popover>
    </>
  );
}