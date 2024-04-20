import "./Slider.css"

function Slider() {
  return (
    <section className="awe-section-1">
      <section className="section_slider">
        <div className="home-slider swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <a href="#" className="clearfix" title="Slider1">
                <picture>
                  <source
                    media="(min-width: 1200px)"
                    srcSet="//bizweb.dktcdn.net/100/432/370/themes/894869/assets/slider_1.png?1676276556806" />
                  <source
                    media="(min-width: 992px)"
                    srcSet="//bizweb.dktcdn.net/100/432/370/themes/894869/assets/slider_1.png?1676276556806" />
                  <source
                    media="(min-width: 569px)"
                    srcSet="//bizweb.dktcdn.net/100/432/370/themes/894869/assets/slider_1.png?1676276556806" />
                  <source
                    media="(max-width: 480px)"
                    srcSet="//bizweb.dktcdn.net/thumb/large/100/432/370/themes/894869/assets/slider_1.png?1676276556806" />
                  <img
                    src="//bizweb.dktcdn.net/100/432/370/themes/894869/assets/slider_1.png?1676276556806"
                    alt="Slider 1" width="10" height="10" className="img-responsive center-block" />
                </picture>
              </a>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Slider;