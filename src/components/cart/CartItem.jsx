import { useDispatch, useSelector } from "react-redux";
import "./CartItem.css";
import { removeCartItem, updateCartItem } from "../../slice/cartSlice";
import Helper from "../../utiliti/helper/Helper";
import { useEffect, useState } from "react";

function CartItem({ cartItem }) {
  const [carts, setCarts] = useState([]);
  const cartItems = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();

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

  return (
    <>
      <div className="border_list">
        <div className="image_drop">
          <a href="" className="product-image">
            <img src={cartItem.product.productImage} alt="" />
          </a>
        </div>
        <div className="detail-item">
          <div className="product-details">
            <span onClick={() => handleDeleteCartItem(cartItem.cartItemId)} className="remove-item-cart i_close_svg"></span>
            <p className="product-name">
              <a href="">{cartItem.product.productName}</a>
            </p>
          </div>
          <span className="variant-title"></span>
          <div className="product-details-bottom">
            <span className="price">{cartItem.product.price}</span>
            <div className="quantity-select qty_drop_cart">
              <button onClick={() => handleDecrement(cartItem.cartItemId)} className="btn_reduced reduced items-count btn-minus">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="svg-inline--fa fa-caret-down fa-w-10">
                  <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z">
                  </path>
                </svg>
              </button>
              <input type="text" className="input-text number-sidebar" value={cartItem.quantity} />
              <button onClick={() => handleIncrement(cartItem.cartItemId)} className="btn_increase increase items-count btn-plus">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-up" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="svg-inline--fa fa-caret-up fa-w-10">
                  <path fill="currentColor" d="M288.662 352H31.338c-17.818 0-26.741-21.543-14.142-34.142l128.662-128.662c7.81-7.81 20.474-7.81 28.284 0l128.662 128.662c12.6 12.599 3.676 34.142-14.142 34.142z">
                  </path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div >
    </>
  );
}

export default CartItem;