import { useDispatch } from "react-redux";
import "./Contact.css";
import { customerContact } from "../../slice/contactSlice"
import { useState } from "react";
import Modal from "react-modal";

function Contact() {
  const dispatch = useDispatch();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [error, setError] = useState("");
  const [values, setValues] = useState({
    contactId: "",
    customerName: "",
    phoneCustomer: "",
    emailCustomer: "",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(prevValues => ({
      ...prevValues,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    if (
      !values.customerName ||
      !values.phoneCustomer ||
      !values.emailCustomer ||
      !values.notes
    ) {
      setError("Vui lòng điền đầy đủ thông tin.");
      return;
    }
    dispatch(customerContact(values))
    setModalIsOpen(true);
  }
  return (
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
                  <li><strong><span>Liên hệ</span></strong></li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="page_contact page">
        <div className="container">
          <h1 className="title_page a-center"><span>Liên hệ</span></h1>
          <div className="row">
            <div className="col-md-4 col-12 col-contact">
              <div className="single-contact clearfix">
                <div className="contact-icon">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-phone-alt fa-w-16">
                    <path fill="currentColor" d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
                  </svg>
                </div>
                <h4 className="title-contact">Hỗ trợ tư vấn</h4>
                <a className="phone" href="tel:19006750">1900 6750</a> - <a className="phone" href="tel:19006750">1900 6750</a>
              </div>
            </div>
            <div className="col-md-4 col-12 col-contact">
              <div className="single-contact clearfix">
                <div className="contact-icon">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="svg-inline--fa fa-map-marker-alt fa-w-12">
                    <path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                  </svg>
                </div>
                <h4 className="title-contact">Văn phòng giao dịch</h4>
                <span>Tâng 6 toà nhà Ladeco, 266 Đội Cấn, phường Liễu Giai, Hà Nội,</span>
              </div>
            </div>
            <div className="col-md-4 col-12 col-contact">
              <div className="single-contact clearfix">
                <div className="contact-icon">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-envelope fa-w-16">
                    <path fill="currentColor" d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
                  </svg>
                </div>
                <h4 className="title-contact">Bộ phận hỗ trợ bán hàng</h4>
                <a href="mailto:support@sapo.vn">support@sapo.vn</a>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom_contact">
          <div className="iFrameMap">
            <div id="contact_map" className="map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.904611732553!2d105.81388241542348!3d21.03650239288885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab1946cc7e23%3A0x87ab3917166a0cd5!2zQ8O0bmcgdHkgY-G7lSBwaOG6p24gY8O0bmcgbmdo4buHIFNBUE8!5e0!3m2!1svi!2s!4v1555900531747!5m2!1svi!2s" width="600" height="550" style={{ border: '0' }} allowfullscreen></iframe>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-12 offset-lg-6 left_contact">
                <div className="des">
                  Bạn hãy điền nội dung tin nhắn vào form dưới đây. Chúng tôi sẽ trả lời bạn sau khi nhận được
                </div>
                <div id="pagelogin">
                  <div>
                    <input name="FormType" type="hidden" value="contact" />
                    <div className="form-signup clearfix">
                      <div className="row group_contact">
                        {error && <p className="error-message">{error}</p>}
                        <fieldset className="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <input placeholder="Họ tên:" type="text" className="form-control  form-control-lg" required name="customerName" onChange={handleChange} />
                          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-user fa-w-14">
                            <path fill="currentColor" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
                          </svg>
                        </fieldset>
                        <fieldset className="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <input type="number" placeholder="Số điện thoại:" name="phoneCustomer" onChange={handleChange} className="form-control form-control-lg" required />
                          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-phone-alt fa-w-16">
                            <path fill="currentColor" d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
                          </svg>
                        </fieldset>
                        <fieldset className="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <input placeholder="Email:" type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required id="email1" className="form-control form-control-lg" name="emailCustomer" onChange={handleChange} />
                          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-envelope fa-w-16">
                            <path fill="currentColor" d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
                          </svg>
                        </fieldset>
                        <fieldset className="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <textarea placeholder="Nội dung:" name="notes" onChange={handleChange} id="comment" className="form-control content-area form-control-lg" rows="5" required></textarea>
                          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="comment" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-comment fa-w-16">
                            <path fill="currentColor" d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32z"></path>
                          </svg>
                        </fieldset>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 a-left">
                          <button onClick={handleSubmit} type="button" className="btn btn-primary btn-lienhe">Gửi tin nhắn</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="banner_contact">
                  <img className="lazyload loaded" src="//bizweb.dktcdn.net/100/432/370/themes/894869/assets/banner_contact.png?1676276556806" alt="banner_contact" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal className="custom-modal" isOpen={modalIsOpen}>
        <h2>Thông báo</h2>
        <p>Thông tin liên hệ của bạn đã được gửi thành công.</p>
        <button className="contact-btn" onClick={() => setModalIsOpen(false)}>Đóng</button>
      </Modal>
    </div>

  );
}

export default Contact;
