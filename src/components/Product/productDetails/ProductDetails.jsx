import { useNavigate, useParams } from "react-router-dom";
import "./ProductDetails.scss"
import { useDispatch, useSelector } from "react-redux";
import { addCartItem } from "../../../slice/cartSlice";
import Helper from "../../../utiliti/helper/Helper";
import { useEffect, useState } from "react";

function ProductDetails() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { productId } = useParams();
  const [actionType, setActionType] = useState('');
  const [quantity, setQuantity] = useState(1);
  const product = useSelector(state => state.product.products.find(product => product.productId === parseInt(productId)));

  console.log("11", product)

  useEffect(() => {
    if (actionType === 'buyNow') {
      navigate('/cart');
    }
  }, [actionType, navigate]);

  const addToCart = () => {
    const itemRequest = {
      productId: product.productId,
      quantity
    };
    dispatch(addCartItem(itemRequest))
      .then(() => {
        Helper.toast("success", "Đã thêm sản phẩm vào giỏ hàng");
        if (actionType === 'buyNow') {
          navigate('/cart');
        }
      })
      .catch((error) => {
        Helper.toast("error", "Đã xảy ra lỗi khi thêm sản phẩm.");
        console.error("Error adding product to cart:", error);
      })
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

  const handleBuyNow = () => {
    setActionType('buyNow');
    addToCart();
  };

  const handleAddToCart = () => {
    setActionType('addToCart');
    addToCart();
  };

  return (
    <>
      <div className="page_background">
        <div className="breadcrumb_background">
          <section className="bread-crumb">
            <span className="crumb-border"></span>
            <div className="container">
              <div className="rows">
                <div className="col-xs-12 a-left">
                  <ul className="breadcrumb">
                    <li className="home">
                      <a href="/"><span>Trang chủ</span></a>
                      <span className="mr_lr">&nbsp;/&nbsp;</span>
                    </li>
                    <li>
                      <a href="/user/purchase"><span>Phụ kiện cho thú cưng</span></a>
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

        <section className="product details-main" itemScope="" itemType="https://schema.org/Product">

          <div className="form_background form-inline margin-bottom-0">
            <div className="container">
              <div className="section wrap-padding-15 wp_product_main">
                <div className="details-product section">
                  <div className="row ">
                    <div className="product-detail-left product-images left-content col-xs-12 col-sm-12 col-md-12 col-lg-7 col-xl-6">

                      <div className="col_large_default large-image">
                        <div className="swiper-container swiper_big_image clearfix margin-bottom-20 swiper-container-initialized swiper-container-horizontal">
                          <div className="swiper-wrapper" id="swiper-wrapper-9133ef30f89ed362" aria-live="polite">

                            <div className="item swiper-slide swiper-slide-active" style={{ width: "405px" }} role="group" aria-label="1 / 5">
                              <a className="img_big img-product" href="#" title="Click để xem" rel="lightbox-demo" >
                                <img src={product.productImage} className="lazyload img-responsive mx-auto d-block loaded" />
                              </a>
                            </div>
                          </div>
                          <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5 col-xl-6 details-pro">
                      <h1 className="title-product">{product.productName}</h1>
                      <div className="group-status">
                        <span className="product_type first_status">Thương hiệu:&nbsp;
                          <span className="status_name ">Tropiclean</span>
                        </span>
                        <span className="first_status status_2">Tình trạng:&nbsp;
                          <span className="status_name availabel hasvariant"><link href="http://schema.org/InStock" />Còn hàng</span>
                        </span>
                      </div>
                      <div className="price-box">
                        <span className="special-price"><span className="price product-price">{Helper.maskValuePrice(product.price)}₫</span>
                        </span>
                      </div>
                      <div className="form-product col-sm-12">
                        <div className="form-group form_button_details">
                          <div className="form_product_content type1">
                            <div className="soluong soluong_type_1 show">
                              <label className="sl section">Số lượng:</label>
                              <div className="custom input_number_product custom-btn-number form-control">
                                <button onClick={decreaseQuantity} className="btn_num num_1 button button_qty" type="button">
                                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="svg-inline--fa fa-caret-down fa-w-10"><path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" className=""></path></svg>
                                </button>
                                <input type="text" id="qtym" name="quantity" value={quantity} onChange={handleQuantityChange} className="form-control prd_quantity " />
                                <button onClick={increaseQuantity} className="btn_num num_2 button button_qty" type="button">
                                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-up" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="svg-inline--fa fa-caret-up fa-w-10">
                                    <path fill="currentColor" d="M288.662 352H31.338c-17.818 0-26.741-21.543-14.142-34.142l128.662-128.662c7.81-7.81 20.474-7.81 28.284 0l128.662 128.662c12.6 12.599 3.676 34.142-14.142 34.142z" className=""></path>
                                  </svg>
                                </button>
                              </div>
                            </div>
                            <div className="button_actions clearfix">
                              <button onClick={handleBuyNow} type="button" className="btn_buynow btn_base">
                                <span className="txt-main text_1">Mua ngay</span>
                              </button>
                              <button onClick={handleAddToCart} type="button" className="btn btn_base btn_add_cart btn-cart add_to_cart"><span className="text_1">Thêm vào giỏ hàng</span></button>
                            </div>
                          </div>
                        </div>

                        <div className="service_item clearfix">
                          <div className="service_image">
                            <img src="//bizweb.dktcdn.net/100/432/370/themes/894869/assets/service_product_1.png?1676276556806" />
                          </div>
                          <div className="content_service">
                            <span className="service-title">
                              Vận chuyển toàn quốc:
                            </span>
                            <span className="des_service">
                              Miễn phí vận chuyển trong bán kính 15km
                            </span>
                          </div>
                        </div>

                        <div className="service_item clearfix">
                          <div className="service_image">
                            <img src="//bizweb.dktcdn.net/100/432/370/themes/894869/assets/service_product_2.png?1676276556806" />
                          </div>
                          <div className="content_service">
                            <span className="service-title">
                              Hỗ trợ đổi trả:
                            </span>
                            <span className="des_service">
                              Trong vòng 15 ngày kể từ khi mua hàng
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className="section sec_tab ">
            <div className="container">
              <div className="row">
                <div className="tab_h col-xs-12 col-lg-12 col-sm-12 col-md-12">
                  <div className="section bg_white">
                    <div className="product-tab e-tabs not-dqtab">
                      <ul className="tabs tabs-title clearfix">

                        <li className="tab-link current" >
                          <h3><span>Mô tả sản phẩm</span></h3>
                        </li>

                      </ul>
                      <div className="tab-float">
                        <div id="tab-1" className="tab-content content_extab current">
                          <div className="rte product_getcontent">
                            <p>{product.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="section_prd_feature" id="sidebarproduct">
                    <div className="title_module section">
                      <h2 className="bf_flower">
                        <a href="/phu-kien-cho-thu-cung" title="Sản phẩm liên quan">Sản phẩm liên quan</a>
                      </h2>
                    </div>

                    <div className="swiper-container swiper_related swiper-container-initialized swiper-container-horizontal">
                      <div className=" section products product_related swiper-wrapper" style={{ transform: "translate3d(0px, 0px, 0px)" }}>
                        <div className="item swiper-slide swiper-slide-visible swiper-slide-active" style={{ width: "210px", marginRight: "30px" }} role="group" aria-label="1 / 6">
                          <div className="item_product_main">
                            <div className="variants wishItem">
                              <div className="product-thumbnail">
                                <a className="product_overlay" href="/sua-bot-cho-meo-110g-dr-kyan-precaten" title="Sữa bột cho mèo 110g Dr.Kyan Precaten"></a>
                                <a className="image_thumb" href="/sua-bot-cho-meo-110g-dr-kyan-precaten" title="Sữa bột cho mèo 110g Dr.Kyan Precaten" style={{ height: "210px" }}>
                                  <img className="lazyload loaded" width="10" height="10" src="//bizweb.dktcdn.net/thumb/large/100/432/370/products/sua-bot-cho-meo-dr-kyan-precaten-anh.jpg?v=1626752115833" />
                                </a>

                                <div className="product-action">
                                  <div className="group_action">
                                    <a title="Xem nhanh" href="/sua-bot-cho-meo-110g-dr-kyan-precaten" data-handle="sua-bot-cho-meo-110g-dr-kyan-precaten" className="xem_nhanh btn-circle btn-views btn_view btn right-to quick-view">
                                      <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="search-plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-search-plus fa-w-16">
                                        <path fill="currentColor" d="M312 196v24c0 6.6-5.4 12-12 12h-68v68c0 6.6-5.4 12-12 12h-24c-6.6 0-12-5.4-12-12v-68h-68c-6.6 0-12-5.4-12-12v-24c0-6.6 5.4-12 12-12h68v-68c0-6.6 5.4-12 12-12h24c6.6 0 12 5.4 12 12v68h68c6.6 0 12 5.4 12 12zm196.5 289.9l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L347.5 387.1c-2.3-2.3-3.5-5.3-3.5-8.5v-13.2c-36.5 31.5-84 50.6-136 50.6C93.1 416 0 322.9 0 208S93.1 0 208 0s208 93.1 208 208c0 52-19.1 99.5-50.6 136h13.2c3.2 0 6.2 1.3 8.5 3.5l121.4 121.4c4.7 4.7 4.7 12.3 0 17zM368 208c0-88.4-71.6-160-160-160S48 119.6 48 208s71.6 160 160 160 160-71.6 160-160z" className="">
                                        </path>
                                      </svg>
                                      <span className="text">Xem nhanh</span>
                                    </a>
                                    <button onClick={addToCart} className="btn-buy btn-cart btn-left btn btn-views left-to add_to_cart active " title="Thêm vào giỏ">
                                      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0" y="0" viewBox="0 0 490.666 490.666" style={{ enableBackground: "new 0 0 512 512" }} className=""><g>
                                        <path d="M394.667,373.333c-29.397,0-53.333,23.936-53.333,53.333S365.269,480,394.667,480S448,456.064,448,426.666    S424.064,373.333,394.667,373.333z M394.667,458.666c-17.643,0-32-14.357-32-32c0-17.643,14.357-32,32-32    c17.643,0,32,14.357,32,32C426.667,444.309,412.309,458.666,394.667,458.666z" fill="#ffffff" data-original="#000000" className=""></path>
                                        <path d="M181.333,373.333c-29.397,0-53.333,23.936-53.333,53.333S151.936,480,181.333,480s53.333-23.936,53.333-53.333    S210.731,373.333,181.333,373.333z M181.333,458.666c-17.643,0-32-14.357-32-32c0-17.643,14.357-32,32-32s32,14.357,32,32    C213.333,444.309,198.976,458.666,181.333,458.666z" fill="#ffffff" data-original="#000000" className=""></path>
                                        <path d="M437.333,330.666H191.125c-25.323,0-47.317-18.027-52.288-42.88L85.12,19.242c-1.003-4.992-5.376-8.576-10.453-8.576h-64    C4.779,10.666,0,15.445,0,21.333S4.779,32,10.667,32H65.92l51.989,259.989c6.955,34.773,37.76,60.011,73.216,60.011h246.208    c5.888,0,10.667-4.779,10.667-10.667C448,335.445,443.221,330.666,437.333,330.666z" fill="#ffffff" data-original="#000000" className=""></path>
                                        <path d="M488,78.272c-2.027-2.283-4.928-3.605-8-3.605H96c-5.888,0-10.667,4.779-10.667,10.667S90.112,96,96,96h371.925    l-15.168,121.301c-2.005,15.979-15.659,28.032-31.765,28.032H128c-5.888,0-10.667,4.779-10.667,10.667    c0,5.888,4.779,10.667,10.667,10.667h292.992c26.837,0,49.6-20.075,52.928-46.72l16.661-133.291    C490.965,83.626,490.027,80.554,488,78.272z" fill="#ffffff" data-original="#000000" className=""></path>
                                      </g>
                                      </svg>
                                      <span className="text">Mua ngay</span>
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <div className="product-info">
                                <h3 className="product-name"><a href="/sua-bot-cho-meo-110g-dr-kyan-precaten" title="Sữa bột cho mèo 110g Dr.Kyan Precaten">Sữa bột cho mèo 110g Dr.Kyan Precaten</a></h3>
                                <div className="price-box">
                                  <span className="price">50.000₫</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>

                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
    </>
  );
}

export default ProductDetails;