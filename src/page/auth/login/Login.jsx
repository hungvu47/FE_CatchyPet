import { Link, useNavigate } from "react-router-dom";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import { signIn } from "../../../api/auth";
import { AuthContext } from "./AuthProvider";
import "./Login.css";
import { useContext, useState } from "react";

function Login() {
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    email: "",
    password: ""
  });

  const { handleLogin } = useContext(AuthContext);

  const handleInputChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const success = await signIn(login);
      if (success) {
        const token = success.token;
        handleLogin(token);
        navigate("/");
      } else {
        setErrorMessage("Sai tên tài khoản hoặc mật khẩu");
      }
    } catch (error) {
      console.error("Error signing in:", error);
      setErrorMessage("Đã xảy ra lỗi khi đăng nhập");
    }
  };

  return (
    <>
      <Header />

      <section className="section-login section">
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

                    <li><strong ><span>Đăng nhập tài khoản</span></strong></li>

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
                  <div id="login">
                    <h1>
                      Đăng nhập
                    </h1>
                    <p className="des">
                      Nếu bạn có một tài khoản, xin vui lòng đăng nhập
                    </p>
                    {errorMessage && <p className="alert alert-danger">{errorMessage}sai</p>}
                    <form onSubmit={handleSubmit} id="customer_login" acceptCharset="UTF-8">
                      <input name="FormType" type="hidden" value="customer_login" />
                      <input name="utf8" type="hidden" value="true" />
                      <div className="form-signup margin-bottom-15"></div>

                      <div className="form-signup clearfix">
                        <fieldset className="form-group">
                          <label>Email <span className="required">*</span></label>
                          <input type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$" className="form-control form-control-lg" value={login.email} onChange={handleInputChange} name="email" id="customer_email" placeholder="Email" required />
                        </fieldset>
                        <fieldset className="form-group">
                          <label>Mật khẩu <span className="required">*</span> </label>
                          <input type="password" className="form-control form-control-lg" value={login.password} onChange={handleInputChange} name="password" id="customer_password" placeholder="Mật khẩu" required />
                        </fieldset>
                        <div className="pull-xs-left button_bottom a-center">
                          <button className="btn btn-style btn_50 btn-login" type="submit" value="Đăng nhập">Đăng nhập</button>
                          <p style={{ fontSize: '16px' }}>
                            Bạn chưa có tài khoản <Link to={"/register"} className="btn-link-style btn-register" style={{ textDecoration: 'underline' }}>Đăng ký tại đây</Link>
                          </p>
                          <p style={{ fontSize: '16px' }}>
                            Bạn quên mật khẩu <a href="#" className="btn-link-style" style={{ marginRight: '30px' }}>Lấy lại tại đây</a>
                          </p>
                        </div>

                      </div>
                    </form>
                  </div>

                  {/* <div id="recover-password" style={{ display: 'none' }} className="form-signup page-login">
                  <h2>
                    Đặt lại mật khẩu
                  </h2>
                  <p>
                    Chúng tôi sẽ gửi cho bạn một email để kích hoạt việc đặt lại mật khẩu.
                  </p>
                  <form method="post" action="/account/recover" id="recover_customer_password" acceptCharset="UTF-8"><input name="FormType" type="hidden" value="recover_customer_password" /><input name="utf8" type="hidden" value="true" />
                    <div className="form-signup" style="color: red;">

                    </div>
                    <div className="form-signup clearfix">
                      <fieldset className="form-group">
                        <input type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$" className="form-control form-control-lg" value="" name="Email" id="recover-email" placeholder="Email" required />
                      </fieldset>
                    </div>
                    <div className="action_bottom">
                      <input className="btn btn-style btn-primary btn-recover" type="submit" value="Gửi" />
                      <a href="#" className="btn btn-style btn-style-active" >Hủy</a>
                    </div>
                  </form>
                </div> */}


                </div>
                <div className="block social-login--facebooks margin-top-20">
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
      </section>

      <Footer />
    </>
  );
}

export default Login;