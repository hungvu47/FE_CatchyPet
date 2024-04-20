// import { Check, Save } from '@mui/icons-material'
// import { Box, CircularProgress, Fab } from '@mui/material'
// import { green } from '@mui/material/colors'
// import { useEffect, useState } from 'react'
// import { updateProduct } from '../../../slice/productSlice'
// import Helper from '../../../utiliti/helper/Helper'

// const ActionSave = ({ params, rowId, setRowId }) => {

//   const [loading, setLoading] = useState(false)
//   const [success, setSuccess] = useState(false)
//   const handleSave = () => {
//     try {
//       setLoading(true)
//       // console.log("params", params)
//       const { name, productImage } = params.row
//       const data = {
//         _id: params.id,
//         name,
//         // image,
//         // category
//       }
//       console.log(data)
//       setTimeout(async () => {
//         const { payload } = await updateProduct(data)
//         if (payload?.successCode) {
//           Helper.toast("success", "Update successful")
//           setSuccess(true)
//           setRowId(null)
//           setTimeout(() => {
//             setSuccess(false)
//           }, 3000)
//         }
//         if (payload?.errorCode) {
//           Helper.toast("error", "Update failed")
//         }
//         setLoading(false)
//       }, 300)
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   useEffect(() => {
//     if (rowId === params.productId && success) setSuccess(false)
//   }, [rowId])

//   return (
//     <Box
//       sx={{
//         m: 1,
//         position: "relative"
//       }}
//     >
//       {
//         success ? (
//           <Fab
//             color='primary'
//             sx={{
//               width: "40px",
//               height: "40px",
//               bgcolor: green[500],
//               "&:hover": { bgcolor: green[700] }
//             }}
//           >
//             <Check />
//           </Fab>
//         ) : (
//           <Fab
//             color='primary'
//             sx={{
//               width: "40px",
//               height: "40px",
//             }}
//             disabled={params.id !== rowId || loading}
//             onClick={handleSave}
//           >
//             <Save />
//           </Fab>
//         )
//       }
//       {
//         loading && (
//           <CircularProgress
//             size={52}
//             sx={{
//               color: green[500],
//               position: "absolute",
//               top: -6,
//               left: -6,
//               zIndex: 1
//             }}
//           />
//         )
//       }
//     </Box>
//   )
// }

// export default ActionSave