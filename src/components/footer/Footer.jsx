import "./Footer.css"

function Footer() {
  return (
    <footer className="footer lazyload" style={{ backgroundImage: 'url(//bizweb.dktcdn.net/100/432/370/themes/894869/assets/bg-footer.png)' }}>
      <div className="mid-footer">
        <div className="container">
          <div className="block-logo">
            <a href="/">
              <img className="lazyload loaded" width="10" height="10" src="//bizweb.dktcdn.net/100/432/370/themes/894869/assets/logo-footer.png?1676276556806" alt="logo Template Catchy Pet" />
            </a>
          </div>
          <ul className="list-menu">

            <li className="li_menu">
              <a href="/">Trang chủ</a>
            </li>

            <li className="li_menu">
              <a href="/collections/all">Sản phẩm</a>
            </li>

            <li className="li_menu">
              <a href="/bang-gia">Bảng giá</a>
            </li>

            <li className="li_menu">
              <a href="/tin-tuc">Tin thú cưng</a>
            </li>

            <li className="li_menu">
              <a href="/dat-lich">Đặt lịch</a>
            </li>

            <li className="li_menu">
              <a href="/lien-he">Liên hệ</a>
            </li>

          </ul>
          <ul className="social-footer">

            <li>
              <a className="facebook" href="#" target="_blank" aria-label="Facebook" title="Theo dõi Template Catchy Pet trên Facebook">
                <svg width="12" height="12" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="svg-inline--fa fa-facebook-f fa-w-10">
                  <path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" className=""></path>
                </svg>
              </a>
            </li>


            <li>
              <a className="instagram" href="#" target="_blank" aria-label="instagram" title="Theo dõi Template Catchy Pet trên instagram">
                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-instagram fa-w-14"><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" className=""></path></svg>
              </a>
            </li>


            <li>
              <a className="twitter" href="#" target="_blank" aria-label="Twitter" title="Theo dõi Template Catchy Pet trên Twitter">
                <svg width="12" height="12" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-twitter fa-w-16">
                  <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" className=""></path>
                </svg>
              </a>
            </li>


            <li>
              <a className="tiktok" href="#" target="_blank" aria-label="Tiktok" title="Theo dõi Template Catchy Pet trên Tiktok">
                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="tiktok" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-tiktok fa-w-14">
                  <path fill="currentColor" d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" className=""></path>
                </svg>
              </a>
            </li>


            <li>
              <a className="youtube" href="#" target="_blank" aria-label="Youtube" title="Theo dõi Template Catchy Pet trên Youtube">
                <svg width="12" height="12" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="youtube" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="svg-inline--fa fa-youtube fa-w-18"><path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" className=""></path></svg>
              </a>
            </li>

          </ul>
        </div>
      </div>
      <div className="copyright clearfix">
        <div className="container">
          <div className="row tablet">
            <div id="copyright" className="col-lg-12 col-md-12 col-xs-12 fot_copyright">
              <span className="wsp">

                <span className="mobile">© Bản quyền thuộc về <b>Cafein  Team</b>
                  <span className="dash hidden-xs">|</span>
                </span >

                <span className="opacity1">Cung cấp bởi</span>

                <a href="https://www.sapo.vn/" rel="nofollow" title="Sapo" target="_blank">Sapo</a>

              </span>
            </div>
          </div>
        </div>
      </div>


      <a href="#" className="backtop" title="Lên đầu trang">
        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="arrow-up" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-arrow-up fa-w-14"><path fill="currentColor" d="M6.101 261.899L25.9 281.698c4.686 4.686 12.284 4.686 16.971 0L198 126.568V468c0 6.627 5.373 12 12 12h28c6.627 0 12-5.373 12-12V126.568l155.13 155.13c4.686 4.686 12.284 4.686 16.971 0l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L232.485 35.515c-4.686-4.686-12.284-4.686-16.971 0L6.101 244.929c-4.687 4.686-4.687 12.284 0 16.97z" className=""></path></svg></a>

    </footer>
  );
}

export default Footer;