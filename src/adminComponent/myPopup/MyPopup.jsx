import { Button, Dialog, DialogContent, DialogTitle } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import PropTypes from "prop-types";


const Popup = (props) => {
  const { title, children, openPopup, setOpenPopup } = props
  const onHandleOnClose = () => {
    setOpenPopup(false)
  }

  return (
    <Dialog
      open={openPopup}
      maxWidth="md"
      scroll="body"
      onClose={onHandleOnClose}
    >
      <DialogTitle
        sx={{
          display: "flex"
          , justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "100%",
          margin: "auto"
        }}
      >
        <Typography
          variant='h2'
          color="#172b4d"
          sx={{ fontSize: "20px", textTransform: "capitalize" }}
        >
          {title}
        </Typography>
        <Button
          variant='text'
          onClick={() => setOpenPopup(false)}
          autoFocus
          sx={{
            position: "absolute",
            top: 10,
            right: 3
          }}
        >
          <CloseIcon />
        </Button>
      </DialogTitle>

      <DialogContent
        sx={{
          width: "100%",
          margin: "auto",
        }}
      >
        {children}
      </DialogContent>
    </Dialog>

  )
}

Popup.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  openPopup: PropTypes.bool.isRequired,
  setOpenPopup: PropTypes.func.isRequired,
};

export default Popup