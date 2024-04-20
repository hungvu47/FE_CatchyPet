import { Button as MuiButton } from "@mui/material";
import PropTypes from "prop-types";

function Button(props) {
  const { text, size, color, variant, onClick, ...other } = props;
  return (
    <MuiButton
      variant={variant || "contained"}
      size={size || "large"}
      color={color || "primary"}
      sx={{ margin: 0.5, textTransform: "none" }}
      onClick={onClick}
      {...other}
    >
      {text}
    </MuiButton>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  color: PropTypes.oneOf(["primary", "secondary"]),
  variant: PropTypes.oneOf(["contained", "outlined", "text"]),
  onClick: PropTypes.func.isRequired,
};

export default Button;