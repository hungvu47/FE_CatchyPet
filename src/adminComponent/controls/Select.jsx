
import {
  FormControl,
  InputLabel,
  Select as MuiSelect,
  MenuItem,
  FormHelperText,
} from "@mui/material";
import PropTypes from "prop-types";


export default function Select(props) {
  const { name, label, value, error = null, onChange, options } = props;

  return (
    <FormControl variant="outlined"  {...(error && { error: true })}>
      <InputLabel sx={{
        width: 300,
        color: 'success.main',
        '& .MuiSlider-thumb': {
          borderRadius: '1px',
        },
      }}>{label}</InputLabel>
      <MuiSelect
        label={label}
        name={name}
        value={value}
        onChange={onChange}

      >
        <MenuItem value=""></MenuItem>
        {options.map((item) => (
          <MenuItem key={item.id} value={item.id}>
            {item}
          </MenuItem>
        ))}
      </MuiSelect>
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};