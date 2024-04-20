import { TextField } from "@mui/material";
import PropTypes from "prop-types"

export default function Input(props) {
  const { name, label, value, error = null, onChange, ...other } = props;
  return (
    <TextField
      variant="outlined"
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      InputLabelProps={{
        shrink: true,
      }}
      InputProps={{
        placeholder: " ", // Đặt placeholder là một khoảng trắng
      }}
      {...other}
      {...(error && { error: true, helperText: error })}
    />
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};