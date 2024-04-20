import { InputAdornment } from "@mui/material";
import { Search } from "@mui/icons-material";
import Controls from "../controls/Controls";
import PropTypes from "prop-types";

function InputSearch({ handleSearch }) {
  const handleKeyUp = (event) => {
    if (event.key === 'Enter') {
      handleSearch(event.target.value);
    }
  };
  return (
    <Controls.Input
      label="Tìm kiếm"
      sx={{ width: "75%" }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
        ),
      }}
      onKeyUp={handleKeyUp}
    />
  );
}

InputSearch.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

export default InputSearch;