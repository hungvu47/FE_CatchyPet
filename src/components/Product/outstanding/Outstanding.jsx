import "./Outstanding.css"


function Outstanding() {
  return (
    <section className="awe-section-3">

      <section className="section_bestsale">
        <div className="container">
          <div className="title_module_main">
            <h2>
              <a href="san-pham-noi-bat" title="Sản phẩm nổi bật">Sản phẩm nổi bật</a>
            </h2>
          </div>
          <div className="box-bestsale">

            <div className="swiper_bestsale swiper-container">
              <div className="swiper-wrapper">


                {/* {products.map(product => (

                  <div key={product.productId} className="item swiper-slide" style={{ width: '253.75px', marginRight: '30px' }}>
                    <div className="item_product_main">
                      <FormProduct product={product} />
                    </div>
                  </div>

                ))} */}

              </div>
            </div>
            <div id="prev-bestsale" className="swiper-button-prev"></div>
            <div id="next-bestsale" className="swiper-button-next"></div>

          </div>
        </div>
        <div className="banner_index">
          <a href="#" title="Banner_1">
            <img className="lazyload" width="10" height="10" src="//bizweb.dktcdn.net/100/432/370/themes/894869/assets/banner_index.png?1676276556806" alt="Banner_1" />
          </a>
        </div>
      </section>
    </section >
  );
}

export default Outstanding;