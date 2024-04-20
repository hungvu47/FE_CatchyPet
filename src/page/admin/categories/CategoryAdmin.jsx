import { Add, Edit, Delete } from "@mui/icons-material";
import Popup from "../../../adminComponent/myPopup/MyPopup";
import InputSearch from "../../../adminComponent/inputSearch/InputSearch";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { addCategory, fetchAllCategory, removeCategory, selectCategories, updateCategory } from "../../../slice/categorySlice";
import { useTable } from "react-table";
import Modal from "react-modal";
import AddEditCategory from "./AddEditCategory";
import Helper from "../../../utiliti/helper/Helper";

function CategoryAdmin() {
  const dispatch = useDispatch();
  const [category, setCategory] = useState([]);
  const categories = useSelector(selectCategories)

  const [recordForEdit, setRecordForEdit] = useState(null);
  const [showAddEditForm, setShowAddEditForm] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [categoryIdToDelete, setCategoryIdToDelete] = useState(null);
  const [actionType, setActionType] = useState("add");


  useEffect(() => {
    dispatch(fetchAllCategory())
  }, [dispatch])

  useEffect(() => {
    setCategory(categories);
  }, [categories]);

  const toggleEditAddressForm = (categoryId) => {
    const categoryToEdit = categories.find(addr => addr.categoryId === categoryId);
    setRecordForEdit(categoryToEdit);
    setShowAddEditForm(true);
    setActionType("edit");
  }

  const toggleAddNewAddressForm = () => {
    setShowAddEditForm(true);
    setActionType("add");
    setRecordForEdit(null);
  };

  const data = React.useMemo(() => category, [category]);

  const columns = React.useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'categoryId',
      },
      {
        Header: 'Tên danh mục',
        accessor: 'categoryName',
      },
      {
        Header: 'Ảnh',
        accessor: 'categoryImage',
        Cell: ({ value }) => <img src={value} alt="Category Image" style={{ width: '50px', height: '50px' }} />,
      },
      {
        Header: 'Mô tả',
        accessor: 'categoryDes',
      },
      {
        Header: 'Hành động',
        Cell: ({ row }) => (
          <div>
            <Edit onClick={() => toggleEditAddressForm(row.original.categoryId)} style={{ cursor: 'pointer' }} />
            <Delete onClick={() => toggleConfirmModal(row.original.categoryId)} style={{ cursor: 'pointer' }} />
          </div>
        ),
      },
    ],
    [category]
  );

  // Hook của React Table để tạo bảng
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  const handleDelete = async () => {
    try {
      dispatch(removeCategory(categoryIdToDelete));
      Helper.toast("success", "Xóa danh mục thành công");
      setShowConfirmModal(false);
    } catch (error) {
      Helper.toast('error', 'Đã xảy ra lỗi khi xóa danh mục.');
      console.error('Error deleting address:', error);
    }
  };

  const toggleConfirmModal = (categoryId) => {
    setCategoryIdToDelete(categoryId);
    setShowConfirmModal(!showConfirmModal);
  };

  const addOrEdit = async (values) => {
    try {
      if (actionType === "add") {
        dispatch(addCategory(values));
        Helper.toast("success", "Thêm danh mục thành công");
      } else if (actionType === "edit") {
        const { categoryId, ...dataReq } = values;
        console.log("1", values)
        dispatch(updateCategory({ categoryId, dataReq }));
        Helper.toast("success", "Cập nhật danh mục thành công");
      }
      setRecordForEdit(null);
      setShowAddEditForm(false);
    } catch (error) {
      Helper.toast('error', `Đã xảy ra lỗi khi ${actionType === "add" ? "thêm" : "cập nhật"} địa chỉ.`);
      console.error(`Error ${actionType === "add" ? "add" : "update"} address:`, error);
    }
  };

  const onCancelHandler = () => {
    setShowAddEditForm(false);
  };

  return (
    <>
      <button onClick={toggleAddNewAddressForm} className="shopee-button-solid shopee-button-solid--primary qTzF0g">
        <div className="psXjeQ">
          <div className="zNqMl2">
            <svg enableBackground="new 0 0 10 10" viewBox="0 0 10 10" x="0" y="0" className="shopee-svg-icon icon-plus-sign">
              <polygon points="10 4.5 5.5 4.5 5.5 0 4.5 0 4.5 4.5 0 4.5 0 5.5 4.5 5.5 4.5 10 5.5 10 5.5 5.5 10 5.5"></polygon>
            </svg>
          </div>
          <div>Thêm danh mục mới</div>
        </div>
      </button>
      <div>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr key={headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th key={column.id} {...column.getHeaderProps()}>{column.render('Header')}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map(row => {
              prepareRow(row);
              return (
                <tr key={row.id} {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return <td key={cell.id} {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Modal className="custom-modal" isOpen={showConfirmModal}>
        <p>Bạn có chắc muốn xóa danh mục này?</p>
        <button className="contact-btn" onClick={() => setShowConfirmModal(false)} style={{ float: "left", fontSize: "13px" }}>Đóng</button>
        <button className="contact-btn" onClick={() => handleDelete(categoryIdToDelete)}>Xóa</button>
      </Modal>
      {showAddEditForm && (
        <AddEditCategory
          recordForEdit={recordForEdit}
          addOrEdit={addOrEdit}
          actionType={actionType}
          onCancel={onCancelHandler}
        />
      )}
    </>
  );
}

export default CategoryAdmin;