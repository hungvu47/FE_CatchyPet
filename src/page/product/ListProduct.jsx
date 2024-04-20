import FormProduct from "../../components/Product/formProduct/FormProduct";
import "./ListProduct.css";
import { useEffect } from "react";
import { getAllProduct } from "../../slice/productSlice";
import { useDispatch, useSelector } from "react-redux";
import SideBar from "../../components/sideBar";

function ListProduct() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch]);

  if (!products) {
    return <div>Loading...</div>;
  }

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
                  <li><strong ><span> Tất cả sản phẩm</span></strong></li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="section wrap_background padding-bottom-40">
        <div className="container ">
          <div className="bg_collection section">
            <div className="row">

              <SideBar />

              <div className="main_container collection right-content col-xl-9 col-lg-9 col-md-12 col-sm-12">
                <h1 className="collectiontitle">Tất cả sản phẩm</h1>
                <div className="category-products products">

                  <div className="section">
                    <div className="sortPagiBar clearfix">
                      <div className="sort-cate clearfix">
                        <div id="sort-by">
                          <label className="left hidden">Xếp theo</label>
                          <ul className="ul_col">
                            <li><span>Sắp xếp theo</span>
                              <ul className="content_ul">
                                <li><a href="" >Mặc định</a></li>
                                <li><a href="" >A &rarr; Z</a></li>
                                <li><a href="" >Z &rarr; A</a></li>
                                <li><a href="" >Giá tăng dần</a></li>
                                <li><a href="" >Giá giảm dần</a></li>
                                <li><a href="" >Hàng mới nhất</a></li>
                                <li><a href="" >Hàng cũ nhất</a></li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <section className="products-view products-view-grid collection_reponsive list_hover_pro">
                    <div className="row">

                      {products.map((product) => (
                        <div key={product.productId} className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-3 product-col">
                          <div className="item_product_main margin-bottom-40">
                            <FormProduct
                              product={product} />
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="section pagenav">
                      <nav className="clearfix relative nav_pagi w_100">
                        <ul className="pagination clearfix">

                          <li className="page-item disabled">
                            <a className="page-link" href="#"><i className="icon icon-left" aria-hidden="true"></i></a>
                          </li>

                          <li className="active page-item disabled">
                            <a className="page-link" href="javascript:;">1</a>
                          </li>

                          <li className="page-item"><a className="page-link" href="javascript:;">2</a></li>

                          <li className="page-item hidden-xs">
                            <a className="page-link" href="javascript:;"><i className="icon icon-right" aria-hidden="true"></i></a>
                          </li>

                        </ul>
                      </nav>
                    </div>
                  </section>
                </div>

              </div>

            </div>
          </div>
        </div >
      </div >
    </>
  );
}

export default ListProduct;