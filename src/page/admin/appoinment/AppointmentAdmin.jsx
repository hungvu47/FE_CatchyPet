import { useTable } from "react-table";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAppointment, fetchAllAppointment, removeAppointment, updateAppointment } from "../../../slice/appointmentSlice";
import { Delete, Edit } from "@mui/icons-material";
import Helper from "../../../utiliti/helper/Helper";
import AddEditAppointment from "./AddEditAppointment";
import Modal from "react-modal";

function AppointmentAdmin() {
  const dispatch = useDispatch();
  const appointments = useSelector((state) => state.appointment.appointments)

  const [recordForEdit, setRecordForEdit] = useState(null);
  const [showAddEditForm, setShowAddEditForm] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [appointmentIdToDelete, setCategoryIdToDelete] = useState(null);
  const [actionType, setActionType] = useState("add");

  useEffect(() => {
    dispatch(fetchAllAppointment());
  }, [dispatch])


  const data = React.useMemo(() => appointments, [appointments]);

  const columns = React.useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'appointmentId',
        Cell: ({ value }) => `#${value}`,
      },
      {
        Header: 'Tên khách hàng ',
        accessor: 'customerName',
      },
      {
        Header: 'Số điện thoại',
        accessor: 'customerPhone',
      },
      {
        Header: 'Loại dịch vụ',
        accessor: 'petCare',
        Cell: ({ value }) => value.serviceName,
      },
      {
        Header: 'Tổng tiền',
        accessor: 'totalAmount',
        Cell: ({ value }) => `${value.toLocaleString()}đ`,
      }, {
        Header: 'Ghi chú',
        accessor: 'notes',
      },
      {
        Header: 'Hành động',
        Cell: ({ row }) => (
          <div>
            <Edit onClick={() => toggleEditAddressForm(row.original.appointmentId)} style={{ cursor: 'pointer' }} />
            <Delete onClick={() => toggleConfirmModal(row.original.appointmentId)} style={{ cursor: 'pointer' }} />
          </div>
        ),
      },
    ],
    [appointments]
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
      dispatch(removeAppointment(appointmentIdToDelete));
      Helper.toast("success", "Xóa đơn thành công");
      setShowConfirmModal(false);
    } catch (error) {
      Helper.toast('error', 'Đã xảy ra lỗi khi xóa đơn.');
      console.error('Error deleting address:', error);
    }
  };

  const toggleEditAddressForm = (appointmentId) => {
    const appointmentToEdit = appointments.find(addr => addr.appointmentId === appointmentId);
    setRecordForEdit(appointmentToEdit);
    setShowAddEditForm(true);
    setActionType("edit");
  }

  const toggleAddNewAddressForm = () => {
    setShowAddEditForm(true);
    setActionType("add");
    setRecordForEdit(null);
  };

  const toggleConfirmModal = (appointmentId) => {
    setCategoryIdToDelete(appointmentId);
    setShowConfirmModal(!showConfirmModal);
  };

  const addOrEdit = async (values) => {
    try {
      if (actionType === "add") {
        dispatch(addAppointment(values));
        Helper.toast("success", "Thêm đơn thành công");
      } else if (actionType === "edit") {
        const { appointmentId, ...dataReq } = values;
        console.log("value", values)
        dispatch(updateAppointment({ appointmentId, dataReq }));
        Helper.toast("success", "Cập nhật đơn thành công");
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
          <div>Thêm đơn mới</div>
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
        <button className="contact-btn" onClick={() => handleDelete(appointmentIdToDelete)}>Xóa</button>
      </Modal>
      {showAddEditForm && (
        <AddEditAppointment
          recordForEdit={recordForEdit}
          addOrEdit={addOrEdit}
          actionType={actionType}
          onCancel={onCancelHandler}
        />
      )}
    </>
  );
}

export default AppointmentAdmin;