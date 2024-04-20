import { useEffect, useState } from 'react';

import { Add } from "@mui/icons-material";
import { Paper, Toolbar } from "@mui/material";
import Controls from "../../../adminComponent/controls/Controls";
import Popup from "../../../adminComponent/myPopup/MyPopup";

import InputSearch from "../../../adminComponent/inputSearch/InputSearch";
import { getAllProduct, addNewProduct, updateProduct, searchProduct } from "../../../slice/productSlice";
import CustomPaginationActionsTable from "../../../adminComponent/table/table.component";
import FormAddOrEdit from './formAddOrEdit';
import Helper from "../../../utiliti/helper/Helper";
import { fetchAllCategory } from '../../../slice/categorySlice';

import ActionDelete from './ActionDelete';
import ActionUpdate from './ActionUpdate';
import { useDispatch, useSelector } from 'react-redux';


function ProductList() {
  const dispatch = useDispatch();

  const [openPopup, setOpenPopup] = useState(false);
  const [recordForEdit, setRecordForEdit] = useState(null);
  const [rowId, setRowId] = useState(null);
  const [rowsData, setRowsData] = useState([]);
  const [optionCategory, setOptionCategory] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchError, setSearchError] = useState(false);

  const products = useSelector(state => state.product.products);
  const categories = useSelector(state => state.category.categories);

  const openInPopup = (item) => {
    setOpenPopup(true);
    setRecordForEdit(item);
  };

  const columnsData = [
    { field: 'productId', headerName: 'ID', width: 100 },
    { field: 'productName', headerName: 'Tên sản phẩm', width: 200 },
    { field: 'price', headerName: 'Giá', width: 200, valueFormatter: (params) => `${Helper.maskValuePrice(params)}đ` },
    { field: 'stockQuantity', headerName: 'Số lượng', width: 200 },
    {
      field: 'productImage',
      headerName: 'Ảnh',
      width: 200, height: 400,
      renderCell: (params) => (
        <img src={params.value} alt="Product Image" style={{ width: '100px', height: 'auto' }} />
      ),
    },
    {
      field: "actions",
      headerName: "Actions",
      type: "actions",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="w-full flex justify-between items-center" style={{ display: 'flex' }}>
            {/* <ActionSave {...{ params, rowId, setRowId }} /> */}
            <ActionUpdate
              params={params}
              openInPopup={openInPopup}
            />
            <ActionDelete product={params.row} onDeleteSuccess={null} />
          </div>
        );
      },
    },
  ];

  useEffect(() => {
    (async () => {
      try {
        dispatch(getAllProduct());
        dispatch(fetchAllCategory());
      } catch (error) {
        Helper.toast("error");
      }
    })();
  }, []);

  useEffect(() => {
    setRowsData(products);
    setOptionCategory(categories)
  }, [categories, products]);

  const handleSearch = async (keyword) => {
    setSearchKeyword(keyword);
    if (!keyword.trim()) {
      setSearchResults([]);
      setSearchError(false);
      return;
    }

    try {
      const response = dispatch(searchProduct(keyword));
      setSearchResults(response);
      setSearchError(response.length === 0);
    } catch (error) {
      console.error('Error searching products:', error);
    }
  };

  const addOrEdit = async (values, resetForm) => {
    if (!values.productId) {
      try {
        dispatch(addNewProduct(values));
        Helper.toast("success", "Thêm sản phẩm thành công");
      } catch (error) {
        Helper.toast('error', 'Đã xảy ra lỗi khi thêm sản phẩm.');
        console.error('Error deleting product:', error);
      }
    } else {
      try {
        const { productId, categoryName, category, ...formData } = values;
        console.log(values)
        dispatch(updateProduct({ productId, dataReq: formData }));
        Helper.toast("success", "Cập nhật sản phẩm thành công");
      } catch (error) {
        Helper.toast('error', 'Đã xảy ra lỗi khi cập nhật sản phẩm.');
        console.error('Error deleting product:', error);
      }
    }
    resetForm();
    setRecordForEdit(null);
  };

  return (
    <>
      <Paper
        sx={{
          margin: 5,
          padding: "20px",
          flex: 4,
        }}
      >
        <Toolbar>
          <InputSearch handleSearch={handleSearch} />
          <Controls.Button
            text="Thêm mới"
            variant="outlined"
            startIcon={<Add />}
            sx={{ position: "absolute", right: "10px" }}
            onClick={() => {
              setRecordForEdit(null);
              setOpenPopup(true);
            }}
          />
        </Toolbar>

        <div className="mt-[30px]">
          {searchError ? (
            <p>Không tìm thấy sản phẩm.</p>
          ) : (
            <CustomPaginationActionsTable
              rowsData={searchResults.length > 0 ? searchResults : rowsData}
              columnsData={columnsData}
              rowId="productId"
              setRowId={setRowId}
            />
          )}
        </div>
      </Paper>
      <Popup
        title={recordForEdit ? "Cập nhật sản phẩm" : "Thêm sản phẩm mới"}
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <FormAddOrEdit
          recordForEdit={recordForEdit}
          addOrEdit={addOrEdit}
          optionCategory={optionCategory}

        />
      </Popup>
    </>
  );
}

export default ProductList;