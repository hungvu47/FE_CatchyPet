import { useDispatch, useSelector } from "react-redux";
import "./QuickView.scss"
import { addCartItem, updateCartItem } from "../../../slice/cartSlice";
import Helper from "../../../utiliti/helper/Helper";
import { useState } from "react";

function QuickViewProduct({ product, onClose }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const addToCart = () => {
    setLoading(true);
    const itemRequest = {
      productId: product.productId,
      quantity
    };
    dispatch(addCartItem(itemRequest))
      .then(() => {
        Helper.toast("success", "Đã thêm sản phẩm vào giỏ hàng");
      })
      .catch((error) => {
        Helper.toast("error", "Đã xảy ra lỗi khi thêm sản phẩm.");
        console.error("Error adding product to cart:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    if (!isNaN(newQuantity) && newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleClose = () => {
    onClose();
  };


  return (
    <>
      <div id="quick-view-product" className="quickview-product">
        <div className="quickview-overlay fancybox-overlay fancybox-overlay-fixed"></div>
        <div className="quick-view-product">
          <div className="block-quickview primary_block details-product">
            <div className="row">
              <div className="product-left-column product-images col-xs-12 col-sm-4 col-md-4 col-lg-5 col-xl-6">
                <div className="image-block large-image col_large_default">
                  <span className="view_full_size">
                    <a className="img-product" title="" href="">
                      <img src={product.productImage} id="product-featured-image-quickview" className="img-responsive product-featured-image-quickview" alt="quickview" />
                    </a>
                  </span>
                </div>
              </div>
              <div className="product-center-column product-info product-item col-xs-12 col-sm-6 col-md-8 col-lg-7 col-xl-6 details-pro style_product style_border" >
                <div className="head-qv group-status">
                  <h3 className="qwp-name title-product">
                    <a className="text2line" href="/den-chum-hien-dai-phong-khach-thiet-ke-khoi-ngan-ha">{product.productName}</a>
                  </h3>
                  <div className="vend-qv group-status">
                    <div className="left_vend">
                      <div className="first_status ">Tình trạng:
                        <span className="soluong status_name">Còn hàng</span>
                      </div>
                      <div className="top_sku first_status">Mã sản phẩm:
                        <span className="sku_ status_name"><span>Đang cập nhật</span></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="quickview-info">
                  <span className="prices price-box">
                    <span className="price product-price sale-price">{product.price}</span>
                    <del className="old-price">3.469.000₫</del>
                  </span>
                </div>
                <div className="product-description product-summary">
                  <div className="rte">
                    <p>{product.description}</p>
                  </div>
                </div>
                <form encType="multipart/form-data" className="quick_option variants form-ajaxtocart form-product" >
                  <span className="price-product-detail d-none" style={{ opacity: 0 }}>
                    <span className=""></span>
                  </span>
                  <div className="form_product_content">
                    <div className="count_btn_style quantity_wanted_p">
                      <div className=" soluong1 clearfix">
                        <span className="soluong_h">Số lượng:</span>
                        <div className="sssssscustom input_number_product">
                          <button onClick={decreaseQuantity} type="button" className="btn_num num_1 button button_qty">-</button>
                          <input type="text" id="quantity-detail" name="quantity" value={quantity} onChange={handleQuantityChange} className="form-control prd_quantity" />
                          <button onClick={increaseQuantity} type="button" className="btn_num num_2 button button_qty">+</button>
                        </div>
                      </div>
                      <div className="button_actions clearfix">
                        <button onClick={addToCart} disabled={loading} type="submit" className="btn_cool btn btn_base fix_add_to_cart ajax_addtocart btn_add_cart btn-cart add_to_cart add_to_cart_detail">
                          <span className="btn-content text_1">Thêm vào giỏ hàng</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <a onClick={handleClose} title="Close" className="quickview-close close-window">
            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="svg-inline--fa fa-times fa-w-10">
              <path fill="currentColor" d="M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z" className=""></path>
            </svg>
          </a>
        </div>
      </div>
    </>
  );

}
export default QuickViewProduct;