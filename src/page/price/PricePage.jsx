import "./PricePage.css"

function PricePage() {
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

                  <li><strong ><span>Bảng giá</span></strong></li>

                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="page page_price_list">
        <div className="container">
          <div className="wrap_background_aside padding-top-15">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12">
                <h1 className="title_page a-center"><span>Bảng giá</span></h1>
                <div className="box_price">
                  <h2 style={{ textAlign: 'center' }}>Chăm sóc thú cưng</h2>
                  <table border={1} cellPadding={1} cellSpacing={1} style={{ width: '100%' }}>
                    <tbody>
                      <tr>
                        <td>Tắm gội cho thú cưng&nbsp;</td>
                        <td>100.000đ</td>
                      </tr>
                      <tr>
                        <td>Cắt tỉa móng tay móng chân</td>
                        <td>200.000đ</td>
                      </tr>
                      <tr>
                        <td>Cắt tóc tạo kiểu lông thú cưng</td>
                        <td>300.000đ</td>
                      </tr>
                      <tr>
                        <td>Massage cho thú cưng</td>
                        <td>800.000đ</td>
                      </tr>
                      <tr>
                        <td>Vệ sinh móng tay móng chân</td>
                        <td>150.000đ</td>
                      </tr>
                      <tr>
                        <td>Dịch vụ đặc biệt</td>
                        <td>1.000.000đ</td>
                      </tr>
                    </tbody></table>
                </div>
                <div className="banner_price">
                  <img className="lazyload loaded" src="//bizweb.dktcdn.net/100/432/370/themes/894869/assets/banner_price.png?1676276556806" alt="banner_booking" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PricePage;