import "./Pay.css";

import { useEffect, useState } from "react";
import { defaultAddress, selectAddresses } from "../../slice/addressSlice";
import { getCartItems } from "../../slice/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import Helper from "../../utiliti/helper/Helper";
import { payment } from "../../slice/orderSlice";
import ModalConfirm from "./ModalConfirm";

function Pay() {
  const dispatch = useDispatch();
  const addressDefault = useSelector(selectAddresses);
  const cartItems = useSelector(state => state.cart.cartItems);
  const [isModalOpen, setIsModalOpen] = useState(false);
  let totalAmount = 0;

  cartItems.forEach(cartItem => {
    const itemTotal = cartItem.product.price * cartItem.quantity;
    totalAmount += itemTotal;
  });

  useEffect(() => {
    dispatch(defaultAddress());
    dispatch(getCartItems());
  }, [dispatch]);

  const handleSubmit = async () => {
    try {

      const addressId = addressDefault.addressId;

      const products = cartItems.map(cartItem => ({
        productId: cartItem.product.productId,
        quantity: cartItem.quantity,
      }));
      dispatch(payment({ addressId, products }));
      setIsModalOpen(true);
    } catch (error) {
      console.error("Lỗi khi thanh toán:", error);
      Helper.toast("error", "Xảy ra lỗi! Thanh toán thất bại")
    }
  }


  return (
    <>
      <div className="pay-content">

        <div className="form" >

          <div className="wrap">
            <main className="main">
              <header className="main__header">
                <div className="logo logo--left">

                  <div className="shop__name">
                    <a href="/"><img src="https://firebasestorage.googleapis.com/v0/b/webservicepet.appspot.com/o/images%2FBrown%20and%20Orange%20Dog%20Illustrative%20Pet%20Shop%20Logo_preview_rev_1.png?alt=media&token=30bb0f5d-b90c-4b0f-9b28-f7a13813cf17" alt="" /></a>
                  </div>

                </div>
              </header>
              <div className="main__content">
                <article className="animate-floating-labels row">
                  <div className=" col--75">
                    <section className="section">
                      <div className="section__header">
                        <div className="layout-flex">
                          <h2 className="section__title layout-flex__item layout-flex__item--stretch">
                            <i className="fa fa-id-card-o fa-lg section__title--icon hide-on-desktop"></i>

                            Thông tin nhận hàng

                          </h2>


                          <a href="/account/login?returnUrl=/checkout/e838de8e92ed4498852f4956fcab77c3">
                            <i className="fa fa-user-circle-o fa-lg"></i>
                            <span>Đăng nhập </span>
                          </a>


                        </div>
                      </div>
                      <div className="section__content">
                        <div className="fieldset">

                          <div className="m6A2B1">
                            <div className="xBNaac"></div>
                            <div className="hYgtuo">
                              <div className="SvK9MH">
                                <div className="IZawzb">
                                  <div className="qclVa9">
                                    <svg height="16" viewBox="0 0 12 16" width="12" className="shopee-svg-icon icon-location-marker">
                                      <path d="M6 3.2c1.506 0 2.727 1.195 2.727 2.667 0 1.473-1.22 2.666-2.727 2.666S3.273 7.34 3.273 5.867C3.273 4.395 4.493 3.2 6 3.2zM0 6c0-3.315 2.686-6 6-6s6 2.685 6 6c0 2.498-1.964 5.742-6 9.933C1.613 11.743 0 8.498 0 6z" fillRule="evenodd"></path>
                                    </svg>
                                  </div>
                                  <h2>Địa chỉ nhận hàng</h2>
                                </div>
                              </div>
                              <div className="i1xLmh">
                                <div>

                                  <div className="y0jyrJ">
                                    <div className="PzGLCh">{addressDefault.fullName}, {addressDefault.phone}</div>
                                    <div className="a9c4OR">{addressDefault.streetAddress}, {addressDefault.commune}, {addressDefault.district}, {addressDefault.city}</div>
                                    <div className="dIzOca"> Mặc định</div>
                                  </div>
                                </div>
                                <button className="VNkBIJ div-style">Thay đổi</button>
                              </div>
                              <div>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                    </section>

                    <div className="fieldset floating-labels">
                      <h3 className="visually-hidden">Ghi chú</h3>
                      <div className="field ">
                        <div className="field__input-wrapper">
                          <label htmlFor="note" className="field__label">
                            Ghi chú (tùy chọn)
                          </label>
                          <textarea name="note" id="note" className="field__input"></textarea>
                        </div>

                      </div>
                    </div>

                  </div>
                  <div className=" col--25">
                    <section className="section" data-define="{shippingMethod: '768803_0,40.000 VND'}">
                      <div className="section__header">
                        <div className="layout-flex">
                          <h2 className="section__title layout-flex__item layout-flex__item--stretch">
                            <i className="fa fa-truck fa-lg section__title--icon hide-on-desktop"></i>
                            Vận chuyển
                          </h2>
                        </div>
                      </div>
                      <div className="section__content" id="shippingMethodList">
                        {/* <div className="alert alert--loader spinner spinner--active hide" data-bind-show="isLoadingShippingMethod">
                          <svg xmlns="http://www.w3.org/2000/svg" className="spinner-loader">
                            <use href="#spinner"></use>
                          </svg>
                        </div> */}


                        {/* <div className="alert alert-retry alert--danger hide" data-bind-event-click="handleShippingMethodErrorRetry()" data-bind-show="!isLoadingShippingMethod &amp;&amp; !isAddressSelecting &amp;&amp; isLoadingShippingError">
                          <span data-bind="loadingShippingErrorMessage">Không thể load phí vận chuyển. Vui lòng thử lại</span> <i className="fa fa-refresh"></i>
                        </div> */}


                        <div className="content-box" data-bind-show="!isLoadingShippingMethod &amp;&amp; !isAddressSelecting &amp;&amp; !isLoadingShippingError">

                          <div className="content-box__row">
                            <div className="radio-wrapper">
                              <div className="radio__input">
                                <input type="radio" className="input-radio" name="shippingMethod" checked />
                              </div>
                              <label htmlFor="shippingMethod-768803_0" className="radio__label">
                                <span className="radio__label__primary">
                                  <span>Giao hàng tận nơi</span>

                                </span>
                                <span className="radio__label__accessory">

                                  <span className="content-box__emphasis price">
                                    30.000₫
                                  </span>

                                </span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>

                    <section className="section">
                      <div className="section__header">
                        <div className="layout-flex">
                          <h2 className="section__title layout-flex__item layout-flex__item--stretch">
                            <i className="fa fa-credit-card fa-lg section__title--icon hide-on-desktop"></i>
                            Thanh toán
                          </h2>
                        </div>
                      </div>
                      <div className="section__content">

                        <div className="content-box">


                          <div className="content-box__row">
                            <div className="radio-wrapper">
                              <div className="radio__input">
                                <input name="paymentMethod" type="radio" className="input-radio" value="COD"
                                  checked onChange />
                              </div>
                              <label htmlFor="paymentMethod-645389" className="radio__label">
                                <span className="radio__label__primary">Thu hộ (COD)</span>
                                <span className="radio__label__accessory">
                                  <span className="radio__label__icon">
                                    <i className="payment-icon payment-icon--4"></i>
                                  </span>
                                </span>

                              </label>
                            </div>

                          </div>

                          <div className="content-box__row">
                            <div className="radio-wrapper">
                              <div className="radio__input">
                                <input name="paymentMethod" type="radio" className="input-radio" value="Chuyển khoản"
                                  checked onChange />
                              </div>
                              <label htmlFor="paymentMethod-645387" className="radio__label">
                                <span className="radio__label__primary">Chuyển khoản</span>
                                <span className="radio__label__accessory">
                                  <span className="radio__label__icon">
                                    <i className="payment-icon payment-icon--3"></i>
                                  </span>
                                </span>

                              </label>
                            </div>

                          </div>

                        </div>
                      </div>
                    </section>
                  </div>
                </article>
                {/* <div className="field__input-btn-wrapper field__input-btn-wrapper--vertical hide-on-desktop">
                  <button type="submit" className="btn btn-checkout spinner" data-bind-className="{'spinner--active': isSubmitingCheckout}" data-bind-disabled="isSubmitingCheckout || isLoadingReductionCode">
                    <span className="spinner-label">ĐẶT HÀNG</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="spinner-loader">
                      <use href="#spinner"></use>
                    </svg>
                  </button>

                  <a href="/cart" className="previous-link">
                    <i className="previous-link__arrow">❮</i>
                    <span className="previous-link__content">Quay về giỏ hàng</span>
                  </a>

                </div> */}

                {/* <div id="common-alert" data-tg-refresh="refreshError">


                  <div className="alert alert--danger hide-on-desktop hide" data-bind-show="!isSubmitingCheckout &amp;&amp; isSubmitingCheckoutError" data-bind="submitingCheckoutErrorMessage">Có lỗi xảy ra khi xử lý. Vui lòng thử lại</div>
                </div> */}
              </div>

            </main>
            <aside className="sidebar">
              <div className="sidebar__header">
              </div>
              <div className="sidebar__content">
                <div id="order-summary" className="order-summary order-summary--is-collapsed">
                  <div className="order-summary__sections">

                    <div className="UWJJw6">
                      <div className="kvWjhK">
                        <div className="iSSCtq">
                          <div className="k7UefF l0wK0t">
                            <h2 className="zgWBzz">Sản phẩm</h2>
                          </div>
                          <div className="k7UefF">Đơn giá</div>
                          <div className="k7UefF">Số lượng</div>
                          <div className="k7UefF J2gurn">Thành tiền</div>
                        </div>
                      </div>
                      <div>
                        <div className="QroV_K">
                          <div>
                            <div className="A3VoHf">
                              {cartItems.map(cartItem => (

                                <div key={cartItem.cartItemId} className="_MbENL">
                                  <div className="CZ00qG gTUoYD">
                                    <div className="FisIRS ysaw0G">
                                      <img className="Yzo0tI" alt="product image" src={cartItem.product.productImage} width="40" height="40" />
                                      <span className="dUcW_h">
                                        <span className="TvB7XR">{cartItem.product.productName}</span>
                                      </span>
                                    </div>
                                    <div className="FisIRS">{Helper.maskValuePrice(cartItem.product.price) + "đ"}</div>
                                    <div className="FisIRS">{cartItem.quantity}</div>
                                    <div className="FisIRS BeMjeR">{Helper.maskValuePrice(cartItem.product.price * cartItem.quantity) + "đ"}</div>
                                  </div>
                                </div>
                              ))}

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="order-summary__section order-summary__section--discount-code" id="discountCode">
                      <h3 className="visually-hidden">Mã khuyến mại</h3>
                      <div className="edit_checkout animate-floating-labels">
                        <div className="fieldset">
                          <div className="field ">
                            <div className="field__input-btn-wrapper">
                              <div className="field__input-wrapper floating-labels">
                                <label htmlFor="reductionCode" className="field__label ">Nhập mã giảm giá</label>
                                <input name="reductionCode" id="reductionCode" type="text" className="field__input" autoComplete="off" />
                              </div>
                              <button className=" btn spinner btn--disabled" type="button" >
                                <span className="spinner-label">Áp dụng</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="spinner-loader">
                                  <use href="#spinner"></use>
                                </svg>
                              </button>
                            </div>

                            <p className="field__message field__message--error field__message--error-always-show hide">Có lỗi xảy ra khi áp dụng khuyến mãi. Vui lòng thử lại</p>
                          </div>

                        </div>
                      </div>
                    </div>
                    <div className="order-summary__section order-summary__section--total-lines order-summary--collapse-element" id="orderSummary">
                      <table className="total-line-table">
                        <caption className="visually-hidden">Tổng giá trị</caption>
                        <thead>
                          <tr>
                            <td><span className="visually-hidden">Mô tả</span></td>
                            <td><span className="visually-hidden">Giá tiền</span></td>
                          </tr>
                        </thead>
                        <tbody className="total-line-table__tbody">
                          <tr className="total-line total-line--subtotal">
                            <th className="total-line__name">
                              Tạm tính
                            </th>
                            <td className="total-line__price">{Helper.maskValuePrice(totalAmount) + "₫"}</td>
                          </tr>

                          <tr className="total-line total-line--shipping-fee">
                            <th className="total-line__name">
                              Phí vận chuyển
                            </th>
                            <td className="total-line__price" >30.000₫</td>
                          </tr>

                        </tbody>
                        <tfoot className="total-line-table__footer">
                          <tr className="total-line payment-due">
                            <th className="total-line__name">
                              <span className="payment-due__label-total">
                                Tổng cộng
                              </span>
                            </th>
                            <td className="total-line__price">
                              <span className="payment-due__price">{Helper.maskValuePrice(totalAmount + 30000) + "₫"}</span>
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                    <div className="order-summary__nav field__input-btn-wrapper hide-on-mobile layout-flex--row-reverse">
                      <button onClick={handleSubmit} type="submit" className="btn btn-checkout spinner">
                        <span className="spinner-label">ĐẶT HÀNG</span>
                      </button>


                      <a href="/cart" className="previous-link">
                        <i className="previous-link__arrow">❮</i>
                        <span className="previous-link__content">Quay về giỏ hàng</span>
                      </a>

                    </div>
                    <div id="common-alert-sidebar" data-tg-refresh="refreshError">
                      <div className="alert alert--danger hide-on-mobile hide">Có lỗi xảy ra khi xử lý. Vui lòng thử lại</div>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
      <div>
        <ModalConfirm
          isOpen={isModalOpen}
          onCancel={() => setIsModalOpen(false)} />
      </div>
    </>
  );
}

export default Pay;