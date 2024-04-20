import { Box, Button } from '@mui/material';
import { useState } from 'react';
import { Delete } from '@mui/icons-material';
import ConfirmDialog from '../../../utiliti/notifi/confirmDialog';
import Helper from '../../../utiliti/helper/Helper';
import { removeProduct } from '../../../slice/productSlice';
import { useDispatch } from 'react-redux';

const ActionDelete = ({ product }) => {
  const dispatch = useDispatch();
  const [dialog, setDialog] = useState({ isOpen: false, title: '', subTitle: '' });

  const handleDelete = () => {
    setDialog({
      isOpen: true,
      title: 'Bạn chắc muốn xóa sản phẩm này?',
      subTitle: 'Bạn không thể hoàn tác hành động.'
    });
  };

  const handleConfirmDelete = async () => {
    try {
      dispatch(removeProduct(product.productId));
      Helper.toast('success', 'Xóa sản phẩm thành công!');
    } catch (error) {
      Helper.toast('error', 'Đã xảy ra lỗi khi xóa sản phẩm.');
      console.error('Error deleting product:', error);
    } finally {
      setDialog({ isOpen: false, title: '', subTitle: '' });
    }
  };

  return (
    <Box>
      <Button color="error" variant="contained" onClick={handleDelete}>
        <Delete />
      </Button>
      <ConfirmDialog
        confirmDialog={dialog}
        setConfirmDialog={setDialog}
        onConfirm={handleConfirmDelete}
      />
    </Box>
  );
};

export default ActionDelete;
