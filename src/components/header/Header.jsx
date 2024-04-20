import { Link } from "react-router-dom";
import "./Header.css"
import { Logout } from "./Logout";
import CartItem from "../cart/CartItem";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartItems } from "../../slice/cartSlice";

function Header() {
  const isLoggedIn = localStorage.getItem("token")
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);

  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch]);

  return (
    <header className="header header_index">
      <div className="topHead">
        <div className="container">
          <div className="topBar_right">
            <div className="cartGroup">
              <div className="top-cart-contain">
                <div className="mini-cart text-xs-center">
                  <Link className="img_hover_cart" to={"/cart"} title="Giỏ hàng">
                    <div className="icon-cart">
                      <img src="//bizweb.dktcdn.net/100/432/370/themes/894869/assets/icon-cart.png" />
                    </div>
                    <span className="count_item count_item_pr">{cartItems.length}</span>
                  </Link>
                  <div className="top-cart-content">
                    <ul id="cart-sidebar" className="mini-products-list count_li">
                      {cartItems.length > 0 && (
                        <ul className="list-item-cart">
                          {cartItems.map((cartItem) => (
                            <li key={cartItem.cartItemId} className="item">
                              <CartItem cartItem={cartItem} />
                            </li>
                          ))}
                        </ul>
                      )}
                      <div className="pd"><div className="top-subtotal"></div></div>

                      <div className="pd right_ct">
                        <a href="/cart" className="btn btn-white"><span>Giỏ hàng</span></a>
                        <a href="/check-out" className="btn btn-primary">Thanh toán</a>
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="account">
              <svg width="16" height="16" viewBox="0 0 460.8 460.8" className="hovered-paths icon-big">
                <g>
                  <path d="M230.432,0c-65.829,0-119.641,53.812-119.641,119.641s53.812,119.641,119.641,119.641s119.641-53.812,119.641-119.641S296.261,0,230.432,0z" fill="#000000" />
                  <path d="M435.755,334.89c-3.135-7.837-7.314-15.151-12.016-21.943c-24.033-35.527-61.126-59.037-102.922-64.784c-5.224-0.522-10.971,0.522-15.151,3.657c-21.943,16.196-48.065,24.555-75.233,24.555s-53.29-8.359-75.233-24.555c-4.18-3.135-9.927-4.702-15.151-3.657c-41.796,5.747-79.412,29.257-102.922,64.784c-4.702,6.792-8.882,14.629-12.016,21.943c-1.567,3.135-1.045,6.792,0.522,9.927c4.18,7.314,9.404,14.629,14.106,20.898c7.314,9.927,15.151,18.808,24.033,27.167c7.314,7.314,15.673,14.106,24.033,20.898c41.273,30.825,90.906,47.02,142.106,47.02s100.833-16.196,142.106-47.02c8.359-6.269,16.718-13.584,24.033-20.898c8.359-8.359,16.718-17.241,24.033-27.167c5.224-6.792,9.927-13.584,14.106-20.898C436.8,341.682,437.322,338.024,435.755,334.89z" fill="#000000" />
                </g>
              </svg>

              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sort-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="svg-inline--fa fa-sort-down fa-w-10 icon-small">
                <path fill="currentColor" d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z" className=""></path>
              </svg>
              <div className="ac_hover">
                {isLoggedIn ? (
                  <Logout />
                ) : (
                  <ul className="account_header">
                    <li>
                      <Link to={"/login"}>Đăng nhập</Link>
                    </li>
                    <li>
                      <Link to={"/register"}>Đăng ký</Link>
                    </li>
                  </ul>
                )}
              </div>
            </div>
            <div className="header-search">
              <div className="icon-search">
                <img src="//bizweb.dktcdn.net/100/432/370/themes/894869/assets/icon-search.png?1676276556806" alt="logo Template Catchy Pet" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mid-header">
        <div className="container">
          <div className="menu-bar-mobile menu-bar-h nav-mobile-button">
            <div className="menu-bar">
              <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="bars" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-bars fa-w-14">
                <path fill="currentColor" d="M442 114H6a6 6 0 0 1-6-6V84a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6z" className=""></path>
              </svg>
            </div>
          </div>

          <div className="logo_center logo-mobile">
            <div className="logo">

              <a href="/" className="logo-wrapper ">
                <img src="//bizweb.dktcdn.net/100/432/370/themes/894869/assets/logo.png?1676276556806" alt="logo Template Catchy Pet" />
              </a>

            </div>
          </div>
          <a className="cart-mobile-header" href="/cart" title="Giỏ hàng">
            <div className="icon-cart">
              <img src="//bizweb.dktcdn.net/100/432/370/themes/894869/assets/icon-cart.png?1676276556806" alt="logo Template Catchy Pet" />
            </div>
            <span className="count_item count_item_pr"></span>
          </a>
        </div>
      </div>
      <div className="container">
        <div className="header_menu clearfix">
          <div className="wrap_main menu_mobile">
            <div className="search_mobile clearfix">
              <form action="/search" method="get" className="input-group search-bar" role="search">
                <input type="text" name="query" value="" placeholder="Tìm kiếm sản phẩm..." className="input-group-field auto-search" required="" />
                <span className="input-group-btn">
                  <button type="submit" className="btn icon-fallback-text">
                    <span className="icon-search">
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-search fa-w-16"><path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" className=""></path></svg>
                    </span>
                  </button>
                </span>
              </form>
            </div>
            <div className="account_mb">
              <svg width="16" height="16" viewBox="0 0 460.8 460.8" className="hovered-paths">
                <g>
                  <path d="M230.432,0c-65.829,0-119.641,53.812-119.641,119.641s53.812,119.641,119.641,119.641s119.641-53.812,119.641-119.641S296.261,0,230.432,0z" fill="#000000" />
                  <path d="M435.755,334.89c-3.135-7.837-7.314-15.151-12.016-21.943c-24.033-35.527-61.126-59.037-102.922-64.784c-5.224-0.522-10.971,0.522-15.151,3.657c-21.943,16.196-48.065,24.555-75.233,24.555s-53.29-8.359-75.233-24.555c-4.18-3.135-9.927-4.702-15.151-3.657c-41.796,5.747-79.412,29.257-102.922,64.784c-4.702,6.792-8.882,14.629-12.016,21.943c-1.567,3.135-1.045,6.792,0.522,9.927c4.18,7.314,9.404,14.629,14.106,20.898c7.314,9.927,15.151,18.808,24.033,27.167c7.314,7.314,15.673,14.106,24.033,20.898c41.273,30.825,90.906,47.02,142.106,47.02s100.833-16.196,142.106-47.02c8.359-6.269,16.718-13.584,24.033-20.898c8.359-8.359,16.718-17.241,24.033-27.167c5.224-6.792,9.927-13.584,14.106-20.898C436.8,341.682,437.322,338.024,435.755,334.89z" fill="#000000" />
                </g>
              </svg>

              Tài khoản
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="svg-inline--fa fa-angle-down fa-w-10 icon icon-plus">
                <path fill="currentColor" d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" className=""></path>
              </svg>
              <ul className="account_mobile">

                <li>
                  <Link to={"/login"}>Đăng nhập</Link>
                </li>
                <li>
                  <Link to={"/register"}>Đăng kí</Link>
                </li>

              </ul>
            </div>
            <div className="bg-header-nav">
              <div className="rows row-noGutter-2">
                <nav className="header-nav">
                  <ul className="item_big">

                    <li className="nav-item  active ">
                      <a className="a-img" href="/" title="Trang chủ">
                        <span>Trang chủ</span>
                      </a>
                    </li>

                    <li className="nav-item level0 ">
                      <Link to={"/san-pham"} className="a-img" title="Sản phẩm">
                        <span>Sản phẩm
                          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="svg-inline--fa fa-angle-down fa-w-10">
                            <path fill="currentColor" d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" className=""></path>
                          </svg>
                        </span>
                      </Link>

                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="svg-inline--fa fa-chevron-right fa-w-10 icon icon-plus">
                        <path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
                      </svg>

                      <ul className="item_small">

                        <li className="level1">
                          <a href="/thuc-an-cho-cho" title="Thức ăn cho chó">Thức ăn cho chó</a>
                        </li>

                        <li className="level1">
                          <a href="/thuc-an-cho-meo" title="Thức ăn cho mèo">Thức ăn cho mèo </a>

                        </li>

                        <li className="level1">
                          <a href="/thuc-an-cho-hamster" title="Thức ăn cho Hamster">Thức ăn cho Hamster </a>

                        </li>

                        <li className="level1">
                          <a href="/thuc-an-cho-hamster" title="Thức ăn cho chim">Thức ăn cho chim </a>

                        </li>

                        <li className="level1">
                          <a href="/phu-kien-cho-thu-cung" title="Phụ kiện cho chó">Phụ kiện cho chó </a>

                        </li>

                        <li className="level1">
                          <a href="/phu-kien-cho-thu-cung" title="Phụ kiện cho mèo">Phụ kiện cho mèo </a>

                        </li>

                      </ul>
                    </li>

                    <li className="nav-item ">
                      <Link to={"/gioi-thieu"} className="a-img" title="Bảng giá">
                        <span>Giới thiệu</span>
                      </Link>
                    </li>


                  </ul>
                  <ul className="logo_center">
                    <li className="logo">

                      <a href="/" className="logo-wrapper ">
                        <img width="10" height="10" src="//bizweb.dktcdn.net/100/432/370/themes/894869/assets/logo.png?1676276556806" alt="logo Template Catchy Pet" />
                      </a>

                    </li>
                  </ul>
                  <ul className="item_big">
                    <li className="nav-item ">
                      <a className="a-img" href="/tin-tuc" title="Tin thú cưng">
                        <span>Tin thú cưng</span>
                      </a>
                    </li>

                    <li className="nav-item ">
                      <Link to={"/bang-gia"} className="a-img" title="Đặt lịch">
                        <span>Bảng giá</span>
                      </Link>
                    </li>

                    <li className="nav-item ">
                      <Link to={"/lien-he"} className="a-img" title="Liên hệ">
                        <span>Liên hệ</span>
                      </Link>
                    </li>

                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;