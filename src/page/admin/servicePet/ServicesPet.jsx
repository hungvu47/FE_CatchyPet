import { useDispatch, useSelector } from "react-redux";
import { AddPetService, DeletePetService, UpdatePetService, fetchAllService } from "../../../slice/petServiceSlice";
import Helper from "../../../utiliti/helper/Helper";
import AddEditService from "./AddEditService";
import { useState } from "react";
import { useEffect } from "react";
import React from "react";
import { Delete, Edit } from "@mui/icons-material";
import Modal from "react-modal";
import { useTable } from "react-table";

function ServicesPet() {
  const dispatch = useDispatch();
  const services = useSelector((state) => state.service.petServices)

  const [recordForEdit, setRecordForEdit] = useState(null);
  const [showAddEditForm, setShowAddEditForm] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [petCareIdToDelete, setPetCareIdToDelete] = useState(null);
  const [actionType, setActionType] = useState("add");

  useEffect(() => {
    dispatch(fetchAllService());
  }, [dispatch])


  const data = React.useMemo(() => services, [services]);

  const columns = React.useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'petCareId',
        Cell: ({ value }) => `#${value}`,
      },
      {
        Header: 'Tên dịch vụ ',
        accessor: 'serviceName',
      },

      {
        Header: 'Giá',
        accessor: 'priceService',
        Cell: ({ value }) => `${value.toLocaleString()}đ`,
      },
      {
        Header: 'Hành động',
        Cell: ({ row }) => (
          <div>
            <Edit onClick={() => toggleEditAddressForm(row.original.petCareId)} style={{ cursor: 'pointer' }} />
            <Delete onClick={() => toggleConfirmModal(row.original.petCareId)} style={{ cursor: 'pointer' }} />
          </div>
        ),
      },
    ],
    [services]
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
      dispatch(DeletePetService(petCareIdToDelete));
      Helper.toast("success", "Xóa đơn thành công");
      setShowConfirmModal(false);
    } catch (error) {
      Helper.toast('error', 'Đã xảy ra lỗi khi xóa đơn.');
      console.error('Error deleting address:', error);
    }
  };

  const toggleEditAddressForm = (petCareId) => {
    const serviceToEdit = services.find(addr => addr.petCareId === petCareId);
    setRecordForEdit(serviceToEdit);
    setShowAddEditForm(true);
    setActionType("edit");
  }

  const toggleAddNewAddressForm = () => {
    setShowAddEditForm(true);
    setActionType("add");
    setRecordForEdit(null);
  };

  const toggleConfirmModal = (petCareId) => {
    setPetCareIdToDelete(petCareId);
    setShowConfirmModal(!showConfirmModal);
  };

  const addOrEdit = async (values) => {
    try {
      if (actionType === "add") {
        dispatch(AddPetService(values));
        Helper.toast("success", "Thêm dịch vụ thành công");
      } else if (actionType === "edit") {
        const { petCareId, ...dataReq } = values;
        console.log("value", values)
        dispatch(UpdatePetService({ petCareId, dataReq }));
        Helper.toast("success", "Cập nhật dịch vụ thành công");
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
          <div>Thêm dịch vụ mới</div>
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
        <p>Bạn có chắc muốn xóa dịch vụ này?</p>
        <button className="contact-btn" onClick={() => setShowConfirmModal(false)} style={{ float: "left", fontSize: "13px" }}>Đóng</button>
        <button className="contact-btn" onClick={() => handleDelete(petCareIdToDelete)}>Xóa</button>
      </Modal>
      {showAddEditForm && (
        <AddEditService
          recordForEdit={recordForEdit}
          addOrEdit={addOrEdit}
          actionType={actionType}
          onCancel={onCancelHandler}
        />
      )}
    </>
  );
}

export default ServicesPet;