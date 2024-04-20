import { Modal } from "@mui/material";
import { useTable } from "react-table";
import React, { useEffect, useState } from "react";
import { allOrder } from "../../../slice/orderSlice";
import { useDispatch, useSelector } from "react-redux";
import OrderDetailsAdmin from "./OrderDetailsAdmin";

function OrderAdmin() {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.order.orders)

  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showOrderDetailsModal, setShowOrderDetailsModal] = useState(false);

  useEffect(() => {
    dispatch(allOrder());
  }, [dispatch])


  const data = React.useMemo(() => orders, [orders]);

  const columns = React.useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'orderId',
        Cell: ({ value }) => `#${value}`,
      },
      {
        Header: 'Ngày đặt hàng ',
        accessor: 'orderDate',
      },
      {
        Header: 'Phương thức thanh toán',
        accessor: 'paymentMethod',
      },
      {
        Header: 'Tổng tiền',
        accessor: 'totalAmount',
        Cell: ({ value }) => `${value.toLocaleString()}đ`,
      },
      {
        Header: 'Trạng thái',
        accessor: 'orderStatus',
      },
      {
        Header: 'Hành động',
        Cell: ({ row }) => (
          <div>
            <button onClick={() => openOrderDetailsModal(row.original.orderId)}>Chi tiết</button>
            <button>Hủy</button>
          </div>
        ),
      },
    ],
    [orders]
  );

  // Hook của React Table để tạo bảng
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  const openOrderDetailsModal = (orderId) => {
    setSelectedOrder(orderId);
    setShowOrderDetailsModal(true);
  };

  const closeOrderDetailsModal = () => {
    setSelectedOrder(null);
    setShowOrderDetailsModal(false);
  };

  return (
    <>
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
      {/* <Modal className="custom-modal" isOpen={showConfirmModal}>
        <p>Bạn có chắc muốn xóa danh mục này?</p>
        <button className="contact-btn" onClick={() => setShowConfirmModal(false)} style={{ float: "left", fontSize: "13px" }}>Đóng</button>
        <button className="contact-btn">Xóa</button>
      </Modal> */}
      {showOrderDetailsModal &&
        <OrderDetailsAdmin
          open={showOrderDetailsModal}
          onClose={closeOrderDetailsModal}
          orderId={selectedOrder} />
      }
    </>
  );
}

export default OrderAdmin;