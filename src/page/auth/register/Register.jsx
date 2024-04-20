import { Link } from "react-router-dom";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import { useState } from "react";
import { signUp } from "../../../api/auth";

function Register() {
  const [register, setRegister] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
  })

  const [errorMessage, setErrorMessage] = useState("")
  const [successMessage, setSuccessMessage] = useState("")

  const handleInPutChange = (e) => {
    setRegister({ ...register, [e.target.name]: e.target.value })
  }

  const handleSignUp = async (e) => {
    e.preventDefault()
    try {
      const result = await signUp(register)
      setSuccessMessage(result)
      setErrorMessage("")
      setRegister({ fullName: "", email: "", password: "", phone: "" })
    } catch (error) {
      setSuccessMessage("")
      setErrorMessage(`Error ${error.message}`)
    }
  }

  return (
    <>
      <Header />

      <section className="section section-register">
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

                    <li><strong ><span>Đăng ký tài khoản</span></strong></li>

                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="container">
          <div className="wrap_background_aside padding-bottom-40 page_login">
            <div className="row">
              <div className="col-12 col-md-6 offset-md-3 col-lg-4 offset-lg-4">
                <div className="page-login">
                  {errorMessage && <p className="alert alert-danger">{errorMessage.message}</p>}
                  {successMessage && <p className="alert alert-success">{successMessage.message}</p>}
                  <div id="login">
                    <h1>
                      Thông tin cá nhân
                    </h1>
                    <form onSubmit={handleSignUp} id="customer_register" acceptCharset="UTF-8">
                      <input name="utf8" type="hidden" value="true" />
                      <div className="form-signup " style={{ color: 'red' }} >

                      </div>
                      <div className="form-signup clearfix">
                        <div className="row">
                          <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                            <fieldset className="form-group">
                              <label>Họ và tên <span className="required">*</span></label>
                              <input type="text" className="form-control form-control-lg" value={register.fullName} onChange={handleInPutChange} name="fullName" placeholder="Họ tên" required />
                            </fieldset>
                          </div>
                          <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                            <fieldset className="form-group">
                              <label>Số điện thoại <span className="required">*</span></label>
                              <input placeholder="Số điện thoại" type="text" pattern="\d+" id="Phone" className="form-control form-control-comment form-control-lg" name="phone" required value={register.phone} onChange={handleInPutChange} />
                            </fieldset>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                            <fieldset className="form-group">
                              <label>Email <span className="required">*</span></label>
                              <input type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$" className="form-control form-control-lg" name="email" id="email" placeholder="Email" value={register.email} onChange={handleInPutChange} required />
                            </fieldset>
                          </div>
                          <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                            <fieldset className="form-group">
                              <label>Mật khẩu <span className="required">*</span> </label>
                              <input type="password" className="form-control form-control-lg" value={register.password} onChange={handleInPutChange} name="password" id="password" placeholder="Mật khẩu" required />
                            </fieldset>
                          </div>
                        </div>
                        <div className="section margin-top-10 button_bottom">
                          <button type="submit" value="Đăng ký" className="btn  btn-style btn_50 btn_register">Đăng ký</button>
                          <span className="or">Bạn đã có tài khoản? Đăng nhập &nbsp;
                            <Link to={"/login"} style={{ textDecoration: 'underline' }} className="btn-link-style  btn-style margin-right-0">tại đây</Link></span>
                        </div>
                      </div>
                    </form>
                    <div className="block social-login--facebooks">
                      <p className="a-center">
                        Hoặc đăng nhập bằng
                      </p>
                      {/* <script>function loginFacebook(){var a={client_id:"947410958642584",redirect_uri:"https://store.mysapo.net/account/facebook_account_callback",state:JSON.stringify({redirect_url:window.location.href}),scope:"email",response_type:"code"},b="https://www.facebook.com/v3.2/dialog/oauth"+encodeURIParams(a,!0);window.location.href=b}function loginGoogle(){var a={client_id:"997675985899-pu3vhvc2rngfcuqgh5ddgt7mpibgrasr.apps.googleusercontent.com",redirect_uri:"https://store.mysapo.net/account/google_account_callback",scope:"email profile https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile",access_type:"online",state:JSON.stringify({redirect_url:window.location.href}),response_type:"code"},b="https://accounts.google.com/o/oauth2/v2/auth"+encodeURIParams(a,!0);window.location.href=b}function encodeURIParams(a,b){var c=[];for(var d in a)if(a.hasOwnProperty(d)){var e=a[d];null!=e&&c.push(encodeURIComponent(d)+"="+encodeURIComponent(e))}return 0==c.length?"":(b?"?":"")+c.join("&")}</script> */}
                      <a href="" className="social-login--facebook" ><img width="129px" height="37px" alt="facebook-login-button" src="//bizweb.dktcdn.net/assets/admin/images/login/fb-btn.svg" /></a>
                      <a href="" className="social-login--google" ><img width="129px" height="37px" alt="google-login-button" src="//bizweb.dktcdn.net/assets/admin/images/login/gp-btn.svg" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Register;