import PropTypes from "prop-types";
import { Box, Stack } from "@mui/material";

import AccountPopover from "./AccountPopover";
import LanguagePopover from "./LanguagePopover";



Header.propTypes = {
  onOpenNav: PropTypes.func,
};

export default function Header() {
  return (
    <div className="headerAdmin">
      <Box sx={{ flexGrow: 1 }} />

      <Stack
        direction="row"
        alignItems="center"
        spacing={{
          xs: 0.5,
          sm: 1,
        }}
      >
        <LanguagePopover />
        {/* <NotificationsPopover /> */}
        <AccountPopover />
      </Stack>
    </div>

    //   </StyledToolbar>
    // </StyledRoot>
  );
}