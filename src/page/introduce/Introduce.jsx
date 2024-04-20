import "./Introduce.scss"

function Introduce() {
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

                  <li><strong ><span>Giới thiệu</span></strong></li>

                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="about-us">
        <div>
          <h3>Giới thiệu</h3>
          <p>Chúng tôi là cửa hàng chăm sóc thú cư hàng đầu với hơn 10 năm kinh nghiệm trong lĩnh vực. Sứ mệnh của chúng tôi là mang lại cuộc sống tốt đẹp và hạnh phúc cho các thú cư thông qua các sản phẩm chăm sóc chất lượng và dịch vụ tận tâm.</p>
        </div>
        <div>
          <h3>Lịch Sử</h3>
          <p>Cửa hàng của chúng tôi được thành lập vào năm 2010 bởi Jane Smith, một người yêu thú cư và có kinh nghiệm trong việc chăm sóc động vật. Từ khi bắt đầu nhỏ nhưng đam mê, chúng tôi đã phát triển thành một điểm đến uy tín cho các bậc cha mẹ thú cư.</p>
        </div>
        <div>
          <h3>Đội Ngũ</h3>
          <p>Đội ngũ của chúng tôi gồm những chuyên gia chăm sóc thú cư và nhân viên đầy đam mê, luôn sẵn sàng để giúp đỡ và tư vấn cho các bạn về việc chăm sóc và nuôi dưỡng thú cư.</p>
        </div>
        <div>
          <h3>Sứ Mệnh và Giá Trị</h3>
          <p>Sứ Mệnh: Mang lại hạnh phúc và sức khỏe cho thú cư thông qua các sản phẩm và dịch vụ chăm sóc tốt nhất.</p>
          <p>Giá Trị: Chất lượng, Tận Tâm, Sáng Tạo, và Trách Nhiệm.</p>
        </div>
      </section>
    </>
  );
}

export default Introduce;