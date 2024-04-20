import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material'
import NotListedLocationIcon from '@mui/icons-material/NotListedLocation';


const ConfirmDialog = (props) => {
  const { confirmDialog, setConfirmDialog, onConfirm } = props
  const handleRemove = (e) => {
    if (e.type === "click") {
      setConfirmDialog({
        ...confirmDialog,
        isOpen: false
      })
      onConfirm(confirmDialog.id)
    }
  }
  return (
    <Dialog
      open={confirmDialog.isOpen}
      disableScrollLock
      sx={{
      }}
    >

      <DialogTitle
        sx={{
          textAlign: "center"
        }}
      >
        <NotListedLocationIcon
          sx={{
            margin: "auto",
            width: "50px",
            color: "red",
            fontSize: "70px"
          }}
        />
      </DialogTitle>

      <DialogContent>
        <Typography
          variant='h2'
          sx={{
            fontSize: "18px",
            color: "red",
            textTransform: "uppercase"

          }}
        >
          {confirmDialog.title}
        </Typography>

        <Typography
          variant='subtitle2'
          sx={{
            fontSize: "12px",
            color: "#616f85",
            marginLeft: "2px",
            marginTop: "4px",
            textTransform: "capitalize"

          }}
        >
          {confirmDialog.subTitle}
        </Typography>

      </DialogContent>

      <DialogActions
      >
        <Button onClick={() => setConfirmDialog({ ...confirmDialog, isOpen: false })}>NO</Button>
        <Button onClick={handleRemove}>YES</Button>
      </DialogActions>
    </Dialog>
  )
}

export default ConfirmDialog