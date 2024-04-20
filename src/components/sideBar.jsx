import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCategory } from "../slice/categorySlice";
import { Link } from "react-router-dom";
import convertToSlug from "../utiliti/convertToSlug";

function SideBar() {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.category.categories)

  useEffect(() => {
    dispatch(fetchAllCategory());
  }, [])
  return (
    <aside className="dqdt-sidebar sidebar left-content col-xl-3 col-lg-3 col-md-4 col-sm-4">
      <div className="wrap_background_aside asidecollection">

        <aside className="aside-item sidebar-category collection-category">
          <div className="aside-title">
            <h2 className="title-head margin-top-0 cate"><span>Danh mục sản phẩm</span></h2>
          </div>
          <div className="aside-content">
            <nav className="nav-category navbar-toggleable-md">
              <ul className="nav navbar-pills">

                {categories.map(category => (
                  <li key={category.categoryId} className="nav-item">
                    <Link className="nav-link" to={`/sanpham/${category.categoryId}/${convertToSlug(category.categoryName)}`}><span>{category.categoryName}</span></Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </aside>

        <div className="filter-content aside-filter">
          <div className="filter-container">
            <div className="filter-container__selected-filter clearfix">
              <div className="filter-container__selected-filter-header clearfix">
                <span className="filter-container__selected-filter-header-title"><i className="fa fa-arrow-left hidden-sm-up"></i> Bạn chọn</span>
                <a href="" className="filter-container__clear-all">Bỏ hết <i className="fa fa-angle-right"></i></a>
              </div>

              <div className="filter-container__selected-filter-list">
                <ul></ul>
              </div>
            </div>

            {/* <!-- Lọc Thương hiệu --> */}

            <aside className="aside-item filter-sidebar filter-vendor">
              <div className="aside-title">
                <h2 className="title-filter title-head margin-top-0">
                  <span>
                    Chọn thương hiệu
                  </span>
                </h2>
              </div>
              <div className="aside-content margin-top-0 filter-group">
                <div className="search-collection">
                  <input type="text" placeholder="Bạn muốn tìm gì?" className="form-control filter-vendor-list" />
                  <div className="button_search">
                    <button type="submit" className="btn btn-default">
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-search fa-w-16">
                        <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" >
                        </path>
                      </svg>
                    </button>
                  </div>
                </div>
                <ul>

                  <li className="filter-item filter-item--check-box filter-item--green ">
                    <span>
                      <label htmlFor="filter-doca">
                        <input type="checkbox" id="filter-doca" data-group="Hãng" data-field="vendor" data-text="Doca" value="(Doca)" data-operator="OR" />
                        <i className="fa"></i>
                        Doca
                      </label>
                    </span>
                  </li>

                </ul>
              </div>
            </aside>

            {/* <!-- End Lọc Thương hiệu -->
            <!-- Lọc giá --> */}

            <aside className="aside-item filter-sidebar filter-price f-left">
              <div className="aside-title">
                <h2 className="title-filter title-head margin-top-0">
                  <span>
                    Khoảng giá
                  </span>
                </h2>
              </div>


              <link href="//bizweb.dktcdn.net/100/432/370/themes/894869/assets/jquery-ui.min.css?1676276556806" rel="stylesheet" type="text/css" media="all" />
              <script src="//bizweb.dktcdn.net/100/432/370/themes/894869/assets/jquery-ui-min.js?1676276556806" type="text/javascript"></script>


              <div className="aside-content filter-groupi filter-ui-slider">

                <div id='start'><input value="0" /></div>
                <div id='stop'><input value="100.000.000₫" /></div>
                <div id='slider' className="ui-slider ui-widget ui-widget-content">
                  <div className="ui-slider-range ui-corner-all ui-widget-header"></div>
                  <span className="ui-slider-handle ui-corner-all ui-state-default" tabIndex={0}></span>
                  <span className="ui-slider-handle ui-corner-all ui-state-default" tabIndex={0}></span>
                </div>
                <span className="price_val"></span>
                <a id="old-value" href=""></a>
                <a id="filter-value" className="btn btn-primary" href="" data-value="(>-1 AND <100000001)" >Lọc giá</a>

              </div>


            </aside>

          </div>
        </div>

        <div className="aside-item aside-banner">

          <a href="#" className="img_banner" title="Banner_collection">
            <img className="lazyload loaded" src="//bizweb.dktcdn.net/100/432/370/themes/894869/assets/banner_collection.png?1676276556806" alt="Banner_collection" />
          </a>
        </div>

      </div>
    </aside>
  );
}

export default SideBar;