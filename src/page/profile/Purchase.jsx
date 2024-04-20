import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderOfUser } from "../../slice/orderSlice";
import { Link } from "react-router-dom";

function PurchaseOrder() {
  const dispatch = useDispatch();
  const orders = useSelector(state => state.order.orders)

  useEffect(() => {
    dispatch(orderOfUser());
  }, [dispatch])

  return (
    <div className="page_background">
      <div className="breadcrumb_background">
        <section className="bread-crumb">
          <span className="crumb-border"></span>
          <div className="container">
            <div className="rows">
              <div className="col-xs-12 a-left">
                <ul className="breadcrumb">
                  <li className="home">
                    <a href="/"><span>Tài khoản</span></a>
                    <span className="mr_lr">&nbsp;/&nbsp;</span>
                  </li>
                  <li><strong><span>Đơn mua</span></strong></li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="container BtZOqO">
        <div className="epUsgf">

          <div className="WDmP96">
            <div className="stardust-dropdown stardust-dropdown--open">
              <div className="stardust-dropdown__item-header">
                <a className="jHbobZ" href="/account/profile">
                  <div className="U7dHrp"><img src="https://down-vn.img.susercontent.com/file/ba61750a46794d8847c3f463c5e71cc4" /></div>
                  <div className="mY8KSl"><span className="fnmbfn">Tài khoản của tôi</span></div>
                </a>
              </div>
              <div className="stardust-dropdown__item-body stardust-dropdown__item-body--open" style={{ opacity: 1 }}>
                <div className="hGOWVP">
                  <a className="HVZpoT" href="/account/profile"><span className="PcLlJr">Hồ sơ</span></a>
                  <a className="HVZpoT VfX643" href="/account/address"><span className="PcLlJr">Địa chỉ</span></a>
                  <a className="HVZpoT" href="/account/change-password"><span className="PcLlJr">Đổi mật khẩu</span></a>
                </div>
              </div>
            </div>
            <div className="stardust-dropdown">
              <div className="stardust-dropdown__item-header">
                <a className="jHbobZ" href="#">
                  <div className="U7dHrp"><img src="https://down-vn.img.susercontent.com/file/f0049e9df4e536bc3e7f140d071e9078" /></div>
                  <div className="mY8KSl"><span className="fnmbfn">Đơn Mua</span></div>
                </a>
              </div>
              <div className="stardust-dropdown__item-body" style={{ opacity: 0 }}>
                <div className="hGOWVP"></div>
              </div>
            </div>

          </div>
        </div>

        <div className="fkIi86">
          <div className="CAysXD" role="main">
            <div className="YTmAr0">
              <div className="qtYn7m">
                <div className="Oe_bEi">
                  <div className="lOB9lY">Đơn mua</div>
                  <div className="rT9Vbd"></div>
                </div>
                <div>
                </div>
              </div>
              <div className="KK80cT">

                <div className="OrZkCF">
                  <div className="e65FdS">
                    <div className="table-responsive-block tab-all" style={{ overflowX: "auto" }}>
                      <table className="table table-cart table-order" id="my-orders-table">
                        <thead className="thead-default">
                          <tr>
                            <th>Đơn hàng</th>
                            <th>Ngày</th>
                            <th>Địa chỉ</th>
                            <th>Giá trị đơn hàng</th>
                            <th>TT thanh toán</th>
                            <th>TT vận chuyển</th>
                          </tr>
                        </thead>

                        <tbody>
                          {orders.map(order => (

                            <tr key={order.orderId} className="first odd">
                              <td><Link to={`/user/purchase/details/${order.orderId}`}>{"#" + order.orderId}</Link></td>
                              <td>{order.orderDate}</td>
                              <td>
                                {order.shippingAddress.streetAddress},
                                {order.shippingAddress.commune},
                                {order.shippingAddress.district},
                                {order.shippingAddress.city}
                              </td>
                              <td>
                                <span className="price">{order.totalAmount + 30000}</span>
                              </td>
                              <td>


                                <b className="span_pending" style={{ color: "#E49C06", fontWeight: "600" }}>Chưa thanh toán</b>


                              </td>
                              <td>


                                <span className="span_">Chưa chuyển</span>


                              </td>
                            </tr>
                          ))}

                        </tbody>
                      </table>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>

      </div>
    </div>
  );
}

export default PurchaseOrder;