import { Update } from '@mui/icons-material'
import { Box, Button } from '@mui/material'


const ActionUpdate = (props) => {
  const { params, openInPopup } = props

  return (
    <Box
    >
      <Button
        variant='contained'
        color='info'
        onClick={() => openInPopup(params.row)}
      >
        <Update />
      </Button>
    </Box>
  )
}

export default ActionUpdate