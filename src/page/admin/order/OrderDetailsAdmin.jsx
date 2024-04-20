import { useSelector } from "react-redux";
import Helper from "../../../utiliti/helper/Helper"

function OrderDetailsAdmin({ open, onClose, orderId }) {

  const orders = useSelector((state) => state.order.orders);
  const order = orders.find((order) => order.orderId === orderId);

  return (
    <>
      <div className="container BtZOqO">
        <div className="fkIi86">
          <div className="ashFMQ">
            <main className="gZSLwa">
              <section>
                <div>
                  <div className="As_i5J">
                    <div className="sZoQ_a">
                      <div className="S2fAjM" tabIndex="0">Địa chỉ nhận hàng</div>
                    </div>
                    <div className="PC1hTf">
                      <div className="jXhS5s">
                        <div className="BWtzco" tabIndex="0">{order.shippingAddress.fullName}</div>
                        <div className="rRE7pF"><span tabIndex="0">{order.shippingAddress.phone}</span><br /><span tabIndex="0">{order.shippingAddress.streetAddress}, {order.shippingAddress.commune}, {order.shippingAddress.district}, {order.shippingAddress.city}</span></div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>Ngày đặt hàng: <span>{order.orderDate}</span></div>
                    <div>Phương thức thanh toán: <span>{order.paymentMethod}</span></div>
                  </div>
                </div>

              </section>
              <section>
                <div className="qj8u7l">
                  <div className="ElUDW8"></div>
                  <div className="FNHV0p">
                    <div>
                      <section>
                        {order.orderDetails.map((orderDetail, index) => (
                          <a key={index} className="mZ1OWk" aria-label="" href="/Quần-lót-nam-đùi-thun-lanh-TIDA.OFFICIAL-QLD01-i.851157471.19286753518">
                            <div className="dJaa92">
                              <img src={orderDetail.product.productImage} className="gQuHsZ" alt="" tabIndex="0" />
                              <div className="nmdHRf">
                                <div>
                                  <div className="zWrp4w"><span className="DWVWOJ" tabIndex="0">{orderDetail.product.productName}</span></div>
                                </div>
                                <div>
                                  <div className="rsautk" tabIndex="0">Phân loại hàng: Xanh Đậm,L</div>
                                  <div className="j3I_Nh" tabIndex="0">{"x" + orderDetail.quantity}</div>
                                </div>
                              </div>
                            </div>
                            <div className="ylYzwa" tabIndex="0">
                              <div className="YRp1mm"><span className="nW_6Oi PNlXhK">{Helper.maskValuePrice(orderDetail.product.price) + "đ"}</span></div>
                            </div>
                          </a>
                        ))}
                      </section>
                    </div>
                    <div className="PB3XKx"></div>
                  </div>
                </div>
                <div className="wGEXn5">
                  <div className="kW3VDc">
                    <div className="Vg5MF2"><span>Tổng tiền hàng</span></div>
                    <div className="Tfejtu">
                      <div>{Helper.maskValuePrice(order.totalAmount) + "đ"}</div>
                    </div>
                  </div>
                  <div className="kW3VDc">
                    <div className="Vg5MF2"><span>Phí vận chuyển</span></div>
                    <div className="Tfejtu">
                      <div>30.000đ</div>
                    </div>
                  </div>
                  <div className="kW3VDc WKCLpC">
                    <div className="Vg5MF2 oKK6bX"><span>Thành tiền</span></div>
                    <div className="Tfejtu">
                      <div className="PUZuMi">{Helper.maskValuePrice(order.totalAmount + 30000) + "đ"}</div>
                    </div>
                  </div>
                </div>
              </section>
            </main>
          </div>
        </div>
        <button onClick={onClose}>Quay lại</button>
      </div>
    </>
  );
}

export default OrderDetailsAdmin;