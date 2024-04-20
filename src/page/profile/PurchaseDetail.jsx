import { useParams } from "react-router-dom";
import Helper from "../../utiliti/helper/Helper";
import { useSelector } from "react-redux";

function PurchaseDetail() {

  const { orderId } = useParams();
  const order = useSelector(state => state.order.orders.find(order => order.orderId === parseInt(orderId)));

  if (!order) {
    return <div>Loading...</div>;
  }

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
                  <li>
                    <a href="/user/purchase"><span>Đơn mua</span></a>
                    <span className="mr_lr">&nbsp;/&nbsp;</span>
                  </li>
                  <li>
                    <strong><span>Chi tiết</span></strong>
                  </li>
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
                <a className="jHbobZ" href="/user/purchase">
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
                                  {/* <div className="rsautk" tabIndex="0">Phân loại hàng: Xanh Đậm,L</div> */}
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

      </div>
    </div>
  );
}

export default PurchaseDetail;