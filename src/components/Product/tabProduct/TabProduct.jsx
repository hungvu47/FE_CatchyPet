
import "./TabProduct.css"

function TabProduct() {
  return (
    <section className="awe-section-4">
      <section className="section_tab_product lazyload" data-src="//bizweb.dktcdn.net/100/432/370/themes/894869/assets/bg-tab.png?1676276556806">
        <div className="container">
          <div className="title_module_main">
            <h2 className="h2">
              <span>Sản phẩm shop đang bán</span>
            </h2>
          </div>
          <div className="wrap_tab_index not-dqtab e-tabs ajax-tab-1" data-section="ajax-tab-1">
            <div className="wrap_tab">
              <ul className="tabs nav-tab tabs-title tabtitle1 ajax clearfix">

                <li className="tab-link tab_cate has-content" data-tab="tab-1" data-url="thuc-an-cho-meo">
                  <span>Thức ăn cho Mèo</span>
                </li>

                <li className="tab-link tab_cate " data-tab="tab-2" data-url="thuc-an-cho-cho">
                  <span>Thức ăn cho Chó</span>
                </li>

                <li className="tab-link tab_cate " data-tab="tab-3" data-url="thuc-an-cho-hamster">
                  <span>Thức ăn cho Hamster</span>
                </li>

                <li className="tab-link tab_cate " data-tab="tab-4" data-url="phu-kien-cho-thu-cung">
                  <span>Thức ăn cho Chim</span>
                </li>

              </ul>

              <div className="tab-1 tab-content">

                <div className="swiper_tab_product swiper-container swiper-carousel ajax-carousel">
                  <div className="swiper-wrapper">

                    {/* {products.map(product => (
                      <div key={product.productId} className="item swiper-slide">
                        <div className="item_product_main">
                          <FormProduct />
                        </div>
                      </div>
                    ))} */}

                    <div className="item swiper-slide">
                      <div className="item_product_main">

                        <form action="/cart/add" method="post" className="variants wishItem" data-id="product-actions-22428814" encType="multipart/form-data">
                          <div className="product-thumbnail">
                            <a className="product_overlay" href="/thuc-an-hat-cho-meo-whiskat" title="Thức ăn hạt cho mèo Whiskat"></a>
                            <a className="image_thumb" href="/thuc-an-hat-cho-meo-whiskat" title="Thức ăn hạt cho mèo Whiskat">
                              <img className="lazyload" width="10" height="10" src="//bizweb.dktcdn.net/thumb/large/100/432/370/products/11.png?v=1626427911733" alt="Thức ăn hạt cho mèo Whiskat" />
                            </a>

                            <div className="product-action">
                              <div className="group_action">

                                <a title="Xem nhanh" href="/thuc-an-hat-cho-meo-whiskat" data-handle="thuc-an-hat-cho-meo-whiskat" className="xem_nhanh btn-circle btn-views btn_view btn right-to quick-view">
                                  <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="search-plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-search-plus fa-w-16"><path fill="currentColor" d="M312 196v24c0 6.6-5.4 12-12 12h-68v68c0 6.6-5.4 12-12 12h-24c-6.6 0-12-5.4-12-12v-68h-68c-6.6 0-12-5.4-12-12v-24c0-6.6 5.4-12 12-12h68v-68c0-6.6 5.4-12 12-12h24c6.6 0 12 5.4 12 12v68h68c6.6 0 12 5.4 12 12zm196.5 289.9l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L347.5 387.1c-2.3-2.3-3.5-5.3-3.5-8.5v-13.2c-36.5 31.5-84 50.6-136 50.6C93.1 416 0 322.9 0 208S93.1 0 208 0s208 93.1 208 208c0 52-19.1 99.5-50.6 136h13.2c3.2 0 6.2 1.3 8.5 3.5l121.4 121.4c4.7 4.7 4.7 12.3 0 17zM368 208c0-88.4-71.6-160-160-160S48 119.6 48 208s71.6 160 160 160 160-71.6 160-160z" className=""></path></svg>
                                  <span className="text">Xem nhanh</span>
                                </a>

                                <input type="hidden" name="variantId" value="48910650" />
                                <button className="btn-buy btn-cart btn-left btn btn-views left-to add_to_cart active" title="Thêm vào giỏ">
                                  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0" y="0" viewBox="0 0 490.666 490.666" className="">
                                    <g>
                                      <path d="M394.667,373.333c-29.397,0-53.333,23.936-53.333,53.333S365.269,480,394.667,480S448,456.064,448,426.666S424.064,373.333,394.667,373.333z M394.667,458.666c-17.643,0-32-14.357-32-32c0-17.643,14.357-32,32-32c17.643,0,32,14.357,32,32C426.667,444.309,412.309,458.666,394.667,458.666z" fill="#ffffff" data-original="#000000" className=""></path>
                                      <path d="M181.333,373.333c-29.397,0-53.333,23.936-53.333,53.333S151.936,480,181.333,480s53.333-23.936,53.333-53.333S210.731,373.333,181.333,373.333z M181.333,458.666c-17.643,0-32-14.357-32-32c0-17.643,14.357-32,32-32s32,14.357,32,32C213.333,444.309,198.976,458.666,181.333,458.666z" fill="#ffffff" data-original="#000000" className=""></path>
                                      <path d="M437.333,330.666H191.125c-25.323,0-47.317-18.027-52.288-42.88L85.12,19.242c-1.003-4.992-5.376-8.576-10.453-8.576h-64C4.779,10.666,0,15.445,0,21.333S4.779,32,10.667,32H65.92l51.989,259.989c6.955,34.773,37.76,60.011,73.216,60.011h246.208c5.888,0,10.667-4.779,10.667-10.667C448,335.445,443.221,330.666,437.333,330.666z" fill="#ffffff" data-original="#000000" className=""></path>
                                      <path d="M488,78.272c-2.027-2.283-4.928-3.605-8-3.605H96c-5.888,0-10.667,4.779-10.667,10.667S90.112,96,96,96h371.925l-15.168,121.301c-2.005,15.979-15.659,28.032-31.765,28.032H128c-5.888,0-10.667,4.779-10.667,10.667c0,5.888,4.779,10.667,10.667,10.667h292.992c26.837,0,49.6-20.075,52.928-46.72l16.661-133.291C490.965,83.626,490.027,80.554,488,78.272z" fill="#ffffff" data-original="#000000" className=""></path>
                                    </g>
                                  </svg>
                                  <span className="text">Mua ngay</span>
                                </button>

                              </div>
                            </div>
                          </div>
                          <div className="product-info">
                            <h3 className="product-name"><a href="/thuc-an-hat-cho-meo-whiskat" title="Thức ăn hạt cho mèo Whiskat">Thức ăn hạt cho mèo Whiskat</a></h3>
                            <div className="price-box">

                              <span className="price">120.000₫</span>

                              <span className="compare-price">200.000₫</span>

                            </div>
                          </div>
                        </form>
                      </div>
                    </div>

                    <div className="item swiper-slide">
                      <div className="item_product_main">

                        <form action="/cart/add" method="post" className="variants wishItem" data-id="product-actions-22428814" encType="multipart/form-data">
                          <div className="product-thumbnail">
                            <a className="product_overlay" href="/thuc-an-hat-cho-meo-whiskat" title="Thức ăn hạt cho mèo Whiskat"></a>
                            <a className="image_thumb" href="/thuc-an-hat-cho-meo-whiskat" title="Thức ăn hạt cho mèo Whiskat">
                              <img className="lazyload" width="10" height="10" src="//bizweb.dktcdn.net/thumb/large/100/432/370/products/11.png?v=1626427911733" alt="Thức ăn hạt cho mèo Whiskat" />
                            </a>

                            <div className="product-action">
                              <div className="group_action">

                                <a title="Xem nhanh" href="/thuc-an-hat-cho-meo-whiskat" data-handle="thuc-an-hat-cho-meo-whiskat" className="xem_nhanh btn-circle btn-views btn_view btn right-to quick-view">
                                  <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="search-plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-search-plus fa-w-16"><path fill="currentColor" d="M312 196v24c0 6.6-5.4 12-12 12h-68v68c0 6.6-5.4 12-12 12h-24c-6.6 0-12-5.4-12-12v-68h-68c-6.6 0-12-5.4-12-12v-24c0-6.6 5.4-12 12-12h68v-68c0-6.6 5.4-12 12-12h24c6.6 0 12 5.4 12 12v68h68c6.6 0 12 5.4 12 12zm196.5 289.9l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L347.5 387.1c-2.3-2.3-3.5-5.3-3.5-8.5v-13.2c-36.5 31.5-84 50.6-136 50.6C93.1 416 0 322.9 0 208S93.1 0 208 0s208 93.1 208 208c0 52-19.1 99.5-50.6 136h13.2c3.2 0 6.2 1.3 8.5 3.5l121.4 121.4c4.7 4.7 4.7 12.3 0 17zM368 208c0-88.4-71.6-160-160-160S48 119.6 48 208s71.6 160 160 160 160-71.6 160-160z" className=""></path></svg>
                                  <span className="text">Xem nhanh</span>
                                </a>

                                <input type="hidden" name="variantId" value="48910650" />
                                <button className="btn-buy btn-cart btn-left btn btn-views left-to add_to_cart active" title="Thêm vào giỏ">
                                  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0" y="0" viewBox="0 0 490.666 490.666" className="">
                                    <g>
                                      <path d="M394.667,373.333c-29.397,0-53.333,23.936-53.333,53.333S365.269,480,394.667,480S448,456.064,448,426.666S424.064,373.333,394.667,373.333z M394.667,458.666c-17.643,0-32-14.357-32-32c0-17.643,14.357-32,32-32c17.643,0,32,14.357,32,32C426.667,444.309,412.309,458.666,394.667,458.666z" fill="#ffffff" data-original="#000000" className=""></path>
                                      <path d="M181.333,373.333c-29.397,0-53.333,23.936-53.333,53.333S151.936,480,181.333,480s53.333-23.936,53.333-53.333S210.731,373.333,181.333,373.333z M181.333,458.666c-17.643,0-32-14.357-32-32c0-17.643,14.357-32,32-32s32,14.357,32,32C213.333,444.309,198.976,458.666,181.333,458.666z" fill="#ffffff" data-original="#000000" className=""></path>
                                      <path d="M437.333,330.666H191.125c-25.323,0-47.317-18.027-52.288-42.88L85.12,19.242c-1.003-4.992-5.376-8.576-10.453-8.576h-64C4.779,10.666,0,15.445,0,21.333S4.779,32,10.667,32H65.92l51.989,259.989c6.955,34.773,37.76,60.011,73.216,60.011h246.208c5.888,0,10.667-4.779,10.667-10.667C448,335.445,443.221,330.666,437.333,330.666z" fill="#ffffff" data-original="#000000" className=""></path>
                                      <path d="M488,78.272c-2.027-2.283-4.928-3.605-8-3.605H96c-5.888,0-10.667,4.779-10.667,10.667S90.112,96,96,96h371.925l-15.168,121.301c-2.005,15.979-15.659,28.032-31.765,28.032H128c-5.888,0-10.667,4.779-10.667,10.667c0,5.888,4.779,10.667,10.667,10.667h292.992c26.837,0,49.6-20.075,52.928-46.72l16.661-133.291C490.965,83.626,490.027,80.554,488,78.272z" fill="#ffffff" data-original="#000000" className=""></path>
                                    </g>
                                  </svg>
                                  <span className="text">Mua ngay</span>
                                </button>

                              </div>
                            </div>
                          </div>
                          <div className="product-info">
                            <h3 className="product-name"><a href="/thuc-an-hat-cho-meo-whiskat" title="Thức ăn hạt cho mèo Whiskat">Thức ăn hạt cho mèo Whiskat</a></h3>
                            <div className="price-box">

                              <span className="price">120.000₫</span>

                              <span className="compare-price">200.000₫</span>

                            </div>
                          </div>
                        </form>
                      </div>
                    </div>

                    <div className="item swiper-slide">
                      <div className="item_product_main">

                        <form action="/cart/add" method="post" className="variants wishItem" data-id="product-actions-22428814" encType="multipart/form-data">
                          <div className="product-thumbnail">
                            <a className="product_overlay" href="/thuc-an-hat-cho-meo-whiskat" title="Thức ăn hạt cho mèo Whiskat"></a>
                            <a className="image_thumb" href="/thuc-an-hat-cho-meo-whiskat" title="Thức ăn hạt cho mèo Whiskat">
                              <img className="lazyload" width="10" height="10" src="//bizweb.dktcdn.net/thumb/large/100/432/370/products/11.png?v=1626427911733" alt="Thức ăn hạt cho mèo Whiskat" />
                            </a>

                            <div className="product-action">
                              <div className="group_action">

                                <a title="Xem nhanh" href="/thuc-an-hat-cho-meo-whiskat" data-handle="thuc-an-hat-cho-meo-whiskat" className="xem_nhanh btn-circle btn-views btn_view btn right-to quick-view">
                                  <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="search-plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-search-plus fa-w-16"><path fill="currentColor" d="M312 196v24c0 6.6-5.4 12-12 12h-68v68c0 6.6-5.4 12-12 12h-24c-6.6 0-12-5.4-12-12v-68h-68c-6.6 0-12-5.4-12-12v-24c0-6.6 5.4-12 12-12h68v-68c0-6.6 5.4-12 12-12h24c6.6 0 12 5.4 12 12v68h68c6.6 0 12 5.4 12 12zm196.5 289.9l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L347.5 387.1c-2.3-2.3-3.5-5.3-3.5-8.5v-13.2c-36.5 31.5-84 50.6-136 50.6C93.1 416 0 322.9 0 208S93.1 0 208 0s208 93.1 208 208c0 52-19.1 99.5-50.6 136h13.2c3.2 0 6.2 1.3 8.5 3.5l121.4 121.4c4.7 4.7 4.7 12.3 0 17zM368 208c0-88.4-71.6-160-160-160S48 119.6 48 208s71.6 160 160 160 160-71.6 160-160z" className=""></path></svg>
                                  <span className="text">Xem nhanh</span>
                                </a>

                                <input type="hidden" name="variantId" value="48910650" />
                                <button className="btn-buy btn-cart btn-left btn btn-views left-to add_to_cart active" title="Thêm vào giỏ">
                                  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0" y="0" viewBox="0 0 490.666 490.666" className="">
                                    <g>
                                      <path d="M394.667,373.333c-29.397,0-53.333,23.936-53.333,53.333S365.269,480,394.667,480S448,456.064,448,426.666S424.064,373.333,394.667,373.333z M394.667,458.666c-17.643,0-32-14.357-32-32c0-17.643,14.357-32,32-32c17.643,0,32,14.357,32,32C426.667,444.309,412.309,458.666,394.667,458.666z" fill="#ffffff" data-original="#000000" className=""></path>
                                      <path d="M181.333,373.333c-29.397,0-53.333,23.936-53.333,53.333S151.936,480,181.333,480s53.333-23.936,53.333-53.333S210.731,373.333,181.333,373.333z M181.333,458.666c-17.643,0-32-14.357-32-32c0-17.643,14.357-32,32-32s32,14.357,32,32C213.333,444.309,198.976,458.666,181.333,458.666z" fill="#ffffff" data-original="#000000" className=""></path>
                                      <path d="M437.333,330.666H191.125c-25.323,0-47.317-18.027-52.288-42.88L85.12,19.242c-1.003-4.992-5.376-8.576-10.453-8.576h-64C4.779,10.666,0,15.445,0,21.333S4.779,32,10.667,32H65.92l51.989,259.989c6.955,34.773,37.76,60.011,73.216,60.011h246.208c5.888,0,10.667-4.779,10.667-10.667C448,335.445,443.221,330.666,437.333,330.666z" fill="#ffffff" data-original="#000000" className=""></path>
                                      <path d="M488,78.272c-2.027-2.283-4.928-3.605-8-3.605H96c-5.888,0-10.667,4.779-10.667,10.667S90.112,96,96,96h371.925l-15.168,121.301c-2.005,15.979-15.659,28.032-31.765,28.032H128c-5.888,0-10.667,4.779-10.667,10.667c0,5.888,4.779,10.667,10.667,10.667h292.992c26.837,0,49.6-20.075,52.928-46.72l16.661-133.291C490.965,83.626,490.027,80.554,488,78.272z" fill="#ffffff" data-original="#000000" className=""></path>
                                    </g>
                                  </svg>
                                  <span className="text">Mua ngay</span>
                                </button>

                              </div>
                            </div>
                          </div>
                          <div className="product-info">
                            <h3 className="product-name"><a href="/thuc-an-hat-cho-meo-whiskat" title="Thức ăn hạt cho mèo Whiskat">Thức ăn hạt cho mèo Whiskat</a></h3>
                            <div className="price-box">

                              <span className="price">120.000₫</span>

                              <span className="compare-price">200.000₫</span>

                            </div>
                          </div>
                        </form>
                      </div>
                    </div>

                    <div className="item swiper-slide">
                      <div className="item_product_main">

                        <form action="/cart/add" method="post" className="variants wishItem" data-id="product-actions-22428814" encType="multipart/form-data">
                          <div className="product-thumbnail">
                            <a className="product_overlay" href="/thuc-an-hat-cho-meo-whiskat" title="Thức ăn hạt cho mèo Whiskat"></a>
                            <a className="image_thumb" href="/thuc-an-hat-cho-meo-whiskat" title="Thức ăn hạt cho mèo Whiskat">
                              <img className="lazyload" width="10" height="10" src="//bizweb.dktcdn.net/thumb/large/100/432/370/products/11.png?v=1626427911733" alt="Thức ăn hạt cho mèo Whiskat" />
                            </a>

                            <div className="product-action">
                              <div className="group_action">

                                <a title="Xem nhanh" href="/thuc-an-hat-cho-meo-whiskat" data-handle="thuc-an-hat-cho-meo-whiskat" className="xem_nhanh btn-circle btn-views btn_view btn right-to quick-view">
                                  <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="search-plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-search-plus fa-w-16"><path fill="currentColor" d="M312 196v24c0 6.6-5.4 12-12 12h-68v68c0 6.6-5.4 12-12 12h-24c-6.6 0-12-5.4-12-12v-68h-68c-6.6 0-12-5.4-12-12v-24c0-6.6 5.4-12 12-12h68v-68c0-6.6 5.4-12 12-12h24c6.6 0 12 5.4 12 12v68h68c6.6 0 12 5.4 12 12zm196.5 289.9l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L347.5 387.1c-2.3-2.3-3.5-5.3-3.5-8.5v-13.2c-36.5 31.5-84 50.6-136 50.6C93.1 416 0 322.9 0 208S93.1 0 208 0s208 93.1 208 208c0 52-19.1 99.5-50.6 136h13.2c3.2 0 6.2 1.3 8.5 3.5l121.4 121.4c4.7 4.7 4.7 12.3 0 17zM368 208c0-88.4-71.6-160-160-160S48 119.6 48 208s71.6 160 160 160 160-71.6 160-160z" className=""></path></svg>
                                  <span className="text">Xem nhanh</span>
                                </a>

                                <input type="hidden" name="variantId" value="48910650" />
                                <button className="btn-buy btn-cart btn-left btn btn-views left-to add_to_cart active" title="Thêm vào giỏ">
                                  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0" y="0" viewBox="0 0 490.666 490.666" className="">
                                    <g>
                                      <path d="M394.667,373.333c-29.397,0-53.333,23.936-53.333,53.333S365.269,480,394.667,480S448,456.064,448,426.666S424.064,373.333,394.667,373.333z M394.667,458.666c-17.643,0-32-14.357-32-32c0-17.643,14.357-32,32-32c17.643,0,32,14.357,32,32C426.667,444.309,412.309,458.666,394.667,458.666z" fill="#ffffff" data-original="#000000" className=""></path>
                                      <path d="M181.333,373.333c-29.397,0-53.333,23.936-53.333,53.333S151.936,480,181.333,480s53.333-23.936,53.333-53.333S210.731,373.333,181.333,373.333z M181.333,458.666c-17.643,0-32-14.357-32-32c0-17.643,14.357-32,32-32s32,14.357,32,32C213.333,444.309,198.976,458.666,181.333,458.666z" fill="#ffffff" data-original="#000000" className=""></path>
                                      <path d="M437.333,330.666H191.125c-25.323,0-47.317-18.027-52.288-42.88L85.12,19.242c-1.003-4.992-5.376-8.576-10.453-8.576h-64C4.779,10.666,0,15.445,0,21.333S4.779,32,10.667,32H65.92l51.989,259.989c6.955,34.773,37.76,60.011,73.216,60.011h246.208c5.888,0,10.667-4.779,10.667-10.667C448,335.445,443.221,330.666,437.333,330.666z" fill="#ffffff" data-original="#000000" className=""></path>
                                      <path d="M488,78.272c-2.027-2.283-4.928-3.605-8-3.605H96c-5.888,0-10.667,4.779-10.667,10.667S90.112,96,96,96h371.925l-15.168,121.301c-2.005,15.979-15.659,28.032-31.765,28.032H128c-5.888,0-10.667,4.779-10.667,10.667c0,5.888,4.779,10.667,10.667,10.667h292.992c26.837,0,49.6-20.075,52.928-46.72l16.661-133.291C490.965,83.626,490.027,80.554,488,78.272z" fill="#ffffff" data-original="#000000" className=""></path>
                                    </g>
                                  </svg>
                                  <span className="text">Mua ngay</span>
                                </button>

                              </div>
                            </div>
                          </div>
                          <div className="product-info">
                            <h3 className="product-name"><a href="/thuc-an-hat-cho-meo-whiskat" title="Thức ăn hạt cho mèo Whiskat">Thức ăn hạt cho mèo Whiskat</a></h3>
                            <div className="price-box">

                              <span className="price">120.000₫</span>

                              <span className="compare-price">200.000₫</span>

                            </div>
                          </div>
                        </form>
                      </div>
                    </div>

                    <div className="item swiper-slide">
                      <div className="item_product_main">

                        <form action="/cart/add" method="post" className="variants wishItem" data-id="product-actions-22428814" encType="multipart/form-data">
                          <div className="product-thumbnail">
                            <a className="product_overlay" href="/thuc-an-hat-cho-meo-whiskat" title="Thức ăn hạt cho mèo Whiskat"></a>
                            <a className="image_thumb" href="/thuc-an-hat-cho-meo-whiskat" title="Thức ăn hạt cho mèo Whiskat">
                              <img className="lazyload" width="10" height="10" src="//bizweb.dktcdn.net/thumb/large/100/432/370/products/11.png?v=1626427911733" alt="Thức ăn hạt cho mèo Whiskat" />
                            </a>

                            <div className="product-action">
                              <div className="group_action">

                                <a title="Xem nhanh" href="/thuc-an-hat-cho-meo-whiskat" data-handle="thuc-an-hat-cho-meo-whiskat" className="xem_nhanh btn-circle btn-views btn_view btn right-to quick-view">
                                  <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="search-plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-search-plus fa-w-16"><path fill="currentColor" d="M312 196v24c0 6.6-5.4 12-12 12h-68v68c0 6.6-5.4 12-12 12h-24c-6.6 0-12-5.4-12-12v-68h-68c-6.6 0-12-5.4-12-12v-24c0-6.6 5.4-12 12-12h68v-68c0-6.6 5.4-12 12-12h24c6.6 0 12 5.4 12 12v68h68c6.6 0 12 5.4 12 12zm196.5 289.9l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L347.5 387.1c-2.3-2.3-3.5-5.3-3.5-8.5v-13.2c-36.5 31.5-84 50.6-136 50.6C93.1 416 0 322.9 0 208S93.1 0 208 0s208 93.1 208 208c0 52-19.1 99.5-50.6 136h13.2c3.2 0 6.2 1.3 8.5 3.5l121.4 121.4c4.7 4.7 4.7 12.3 0 17zM368 208c0-88.4-71.6-160-160-160S48 119.6 48 208s71.6 160 160 160 160-71.6 160-160z" className=""></path></svg>
                                  <span className="text">Xem nhanh</span>
                                </a>

                                <input type="hidden" name="variantId" value="48910650" />
                                <button className="btn-buy btn-cart btn-left btn btn-views left-to add_to_cart active" title="Thêm vào giỏ">
                                  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0" y="0" viewBox="0 0 490.666 490.666" className="">
                                    <g>
                                      <path d="M394.667,373.333c-29.397,0-53.333,23.936-53.333,53.333S365.269,480,394.667,480S448,456.064,448,426.666S424.064,373.333,394.667,373.333z M394.667,458.666c-17.643,0-32-14.357-32-32c0-17.643,14.357-32,32-32c17.643,0,32,14.357,32,32C426.667,444.309,412.309,458.666,394.667,458.666z" fill="#ffffff" data-original="#000000" className=""></path>
                                      <path d="M181.333,373.333c-29.397,0-53.333,23.936-53.333,53.333S151.936,480,181.333,480s53.333-23.936,53.333-53.333S210.731,373.333,181.333,373.333z M181.333,458.666c-17.643,0-32-14.357-32-32c0-17.643,14.357-32,32-32s32,14.357,32,32C213.333,444.309,198.976,458.666,181.333,458.666z" fill="#ffffff" data-original="#000000" className=""></path>
                                      <path d="M437.333,330.666H191.125c-25.323,0-47.317-18.027-52.288-42.88L85.12,19.242c-1.003-4.992-5.376-8.576-10.453-8.576h-64C4.779,10.666,0,15.445,0,21.333S4.779,32,10.667,32H65.92l51.989,259.989c6.955,34.773,37.76,60.011,73.216,60.011h246.208c5.888,0,10.667-4.779,10.667-10.667C448,335.445,443.221,330.666,437.333,330.666z" fill="#ffffff" data-original="#000000" className=""></path>
                                      <path d="M488,78.272c-2.027-2.283-4.928-3.605-8-3.605H96c-5.888,0-10.667,4.779-10.667,10.667S90.112,96,96,96h371.925l-15.168,121.301c-2.005,15.979-15.659,28.032-31.765,28.032H128c-5.888,0-10.667,4.779-10.667,10.667c0,5.888,4.779,10.667,10.667,10.667h292.992c26.837,0,49.6-20.075,52.928-46.72l16.661-133.291C490.965,83.626,490.027,80.554,488,78.272z" fill="#ffffff" data-original="#000000" className=""></path>
                                    </g>
                                  </svg>
                                  <span className="text">Mua ngay</span>
                                </button>

                              </div>
                            </div>
                          </div>
                          <div className="product-info">
                            <h3 className="product-name"><a href="/thuc-an-hat-cho-meo-whiskat" title="Thức ăn hạt cho mèo Whiskat">Thức ăn hạt cho mèo Whiskat</a></h3>
                            <div className="price-box">

                              <span className="price">120.000₫</span>

                              <span className="compare-price">200.000₫</span>

                            </div>
                          </div>
                        </form>
                      </div>
                    </div>

                  </div>
                </div>
                <div className="btn-readmore">
                  <a className="tab-viewall" href="/thuc-an-cho-meo" title="Xem thêm sản phẩm">Xem thêm sản phẩm <svg aria-hidden="true" width="16" height="16" focusable="false" data-prefix="far" data-icon="long-arrow-alt-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-long-arrow-alt-right fa-w-14"><path fill="currentColor" d="M340.485 366l99.03-99.029c4.686-4.686 4.686-12.284 0-16.971l-99.03-99.029c-7.56-7.56-20.485-2.206-20.485 8.485v71.03H12c-6.627 0-12 5.373-12 12v32c0 6.627 5.373 12 12 12h308v71.03c0 10.689 12.926 16.043 20.485 8.484z" className=""></path></svg></a>
                </div>
              </div>

              <div className="tab-2 tab-content">
              </div>

              <div className="tab-3 tab-content">
              </div>

              <div className="tab-4 tab-content">
              </div>

            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default TabProduct;