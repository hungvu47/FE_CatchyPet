import { useEffect, useState } from "react";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { getCartItems, removeCartItem, updateCartItem } from "../../slice/cartSlice";
import Helper from "../../utiliti/helper/Helper";


function Cart() {
  const dispatch = useDispatch();
  const [carts, setCarts] = useState([]);
  const cartItems = useSelector(state => state.cart.cartItems);
  const [totalAmount, setTotalAmount] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { payload } = dispatch(getCartItems());
        if (Array.isArray(payload.data)) {
          setCarts(payload.data);
        } else {
          console.error("Invalid data format for carts:", payload.data);
        }
      } catch (error) {
        console.log("error", error);
      }
    })
  }, [dispatch]);

  useEffect(() => {
    setCarts(cartItems);
  }, [cartItems]);

  const handleDeleteCartItem = async (cartItemId) => {
    try {
      dispatch(removeCartItem(cartItemId))

      Helper.toast("success", "Xóa thành công");
    } catch (error) {
      console.error('Error removing product from cart:', error);
    }
  };

  const handleIncrement = async (cartItemId) => {
    const updatedQuantity = cartItems.find(item => item.cartItemId === cartItemId).quantity + 1;
    const itemRequest = {
      quantity: updatedQuantity
    }
    dispatch(updateCartItem({ cartItemId, itemRequest }));
  };

  const handleDecrement = async (cartItemId) => {
    const currentQuantity = cartItems.find(item => item.cartItemId === cartItemId).quantity;
    if (currentQuantity > 1) {
      const newQuantity = currentQuantity - 1;
      const itemRequest = {
        quantity: newQuantity
      }
      dispatch(updateCartItem({ cartItemId, itemRequest }));
    }
  };

  useEffect(() => {
    let totalAmount = 0;
    carts.forEach(cartItem => {
      const itemTotal = cartItem.product.price * cartItem.quantity;
      totalAmount += itemTotal;
    });
    setTotalAmount(totalAmount);
  }, [carts])

  return (
    <>
      <div className="breadcrumb_background">
        <section className="bread-crumb">
          <span className="crumb-border"></span>
          <div className="container">
            <div className="rows">
              <div className="col-xs-12 a-left">
                <ul className="breadcrumb" >
                  <li className="home">
                    <a href="/" ><span >Trang chủ</span></a>
                    <span className="mr_lr">&nbsp;/&nbsp;</span>
                  </li>

                  <li><strong ><span>Giỏ hàng</span></strong></li>

                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="main-cart-page main-container col1-layout">
        <div className="main container cartpcstyle">
          <div className="wrap_background_aside padding-bottom-40">
            <div className="header-cart">
              <h1 className="title_cart">
                <span>Giỏ hàng của bạn</span>
              </h1>
              <div className="header-cart title_cart_pc hidden-sm hidden-xs">

              </div>
            </div>
            <div className="col-main cart_desktop_page cart-page">
              <div className="cart page_cart hidden-xs hidden-sm row">
                <div className="bg-scroll">
                  <div className="cart-thead">
                    <div style={{ width: "18%" }} className="a-center">Ảnh sản phẩm</div>
                    <div style={{ width: "32%" }} className="a-center">Tên sản phẩm</div>
                    <div style={{ width: "17%" }} className="a-center">Đơn giá</div>
                    <div style={{ width: "14%" }} className="a-center">Số lượng</div>
                    <div style={{ width: "14%" }} className="a-center">Thành tiền</div>
                    <div style={{ width: "5%" }} className="a-center">Xóa</div>
                  </div>
                  <div className="cart-tbody">
                    {carts.map((cartItem) => (

                      <div key={cartItem.cartItemId} className="item-cart">
                        <div style={{ width: "18%" }} className="image">
                          <a className="product-image a-left" title="" href="">
                            <img width="75" height="auto" alt="" src={cartItem.product.productImage} />
                          </a>
                        </div>

                        <div style={{ width: "32%" }} className="a-center">
                          <h3 className="product-name">
                            <a className="text2line" href="" title="">{cartItem.product.productName}</a>
                          </h3>
                          <span className="variant-title"></span>
                        </div>

                        <div style={{ width: "17%" }} className="a-center">
                          <span className="cart-prices">
                            <span className="prices">{Helper.maskValuePrice(cartItem.product.price)}đ</span>
                          </span>
                        </div>

                        <div style={{ width: "14%" }} className="a-center">
                          <div className="input_qty_pr">
                            <button onClick={() => handleDecrement(cartItem.cartItemId)} disabled="" className="reduced_pop items-count btn-minus" type="button">-</button>
                            <input type="text" maxLength="3" readOnly="" min="0" className="check_number_here input-text number-sidebar input_pop input_pop qtyItem49192493" id="qtyItem49192493" name="Lines" size="4" value={cartItem.quantity} />
                            <button onClick={() => handleIncrement(cartItem.cartItemId)} className="increase_pop items-count btn-plus" type="button">+</button>
                          </div>
                        </div>

                        <div style={{ width: "14%" }} className="a-center">
                          <span className="cart-price">
                            <span className="price">{Helper.maskValuePrice(cartItem.product.price * cartItem.quantity)}đ</span>
                          </span>
                        </div>

                        <div style={{ width: "5%" }} className="a-center">
                          <a className="remove-itemx remove-item-cart" title="Xóa" href="#" onClick={() => handleDeleteCartItem(cartItem.cartItemId)} >
                            <span><i className="fa fa-trash-alt"></i></span>
                          </a>
                        </div>

                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-lg-7 col-md-7">
                  <a href="/" className="form-cart-continue">Tiếp tục mua hàng</a>
                </div>

                <div className="col-lg-5 col-md-5">
                  <div className="section bg_cart shopping-cart-table-total">
                    <div className="table-total">
                      <table className="table">
                        <tbody><tr>
                          <td colSpan="20" className="total-text">Tổng tiền thanh toán: </td>
                          <td className="txt-right totals_price price_end a-right">{Helper.maskValuePrice(totalAmount)}đ</td>
                        </tr>
                        </tbody></table>
                    </div>
                  </div>
                  <div className="section continued">
                    <a href="/check-out" className="btn-checkout-cart button_checkfor_buy">Tiến hành thanh toán</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="wrap_background_aside padding-top-15 padding-left-0 padding-right-0 cartmbstyle">
          <div className="cart-mobile container">
            <form action="/cart" method="post" noValidate="" className="margin-bottom-0">
              <div className="header-cart">

                <div className="title-cart title_cart_mobile">
                  <h3>Giỏ hàng</h3>
                </div>

              </div>

              <div className="header-cart-content">


              </div>

            </form>
          </div>
        </div> */}

      </section>
    </>
  );
}

export default Cart;