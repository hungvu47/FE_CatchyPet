import { useDispatch, useSelector } from "react-redux";
import { changePassword } from "../../slice/userSlice"
import { useState } from "react";
import Helper from "../../utiliti/helper/Helper"

function ChangePassword() {
  const dispatch = useDispatch();
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmationPassword, setConfirmationPassword] = useState('');
  const error = useSelector((state) => state.user.error);
  const success = useSelector((state) => state.user.success);
  const loading = useSelector((state) => state.user.loading);

  const handleChangePassword = () => {
    const requestData = {
      currentPassword,
      newPassword,
      confirmationPassword,
    };
    dispatch(changePassword(requestData))
    if (success == "Đổi mật khẩu thành công") {
      setCurrentPassword('');
      setNewPassword('');
      setConfirmationPassword('');
    }
  };

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
                    <a href="/"><span>Tài khoản</span></a>
                    <span className="mr_lr">&nbsp;/&nbsp;</span>
                  </li>
                  <li><strong><span>Đổi mật khẩu</span></strong></li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="container BtZOqO">
        <div className="epUsgf">
          <div className="WDmP96">
            <div className="stardust-dropdown stardust-dropdown--open">
              <div className="stardust-dropdown__item-header">
                <a className="jHbobZ" href="/account/profile">
                  <div className="U7dHrp"><img src="https://down-vn.img.susercontent.com/file/ba61750a46794d8847c3f463c5e71cc4" /></div>
                  <div className="mY8KSl"><span className="fnmbfn">Tài khoản của tôi</span></div>
                </a>
              </div>
              <div className="stardust-dropdown__item-body stardust-dropdown__item-body--open" style={{ opacity: 1 }}>
                <div className="hGOWVP">
                  <a className="HVZpoT" href="/account/profile"><span className="PcLlJr">Hồ sơ</span></a>
                  <a className="HVZpoT VfX643" href="/account/address"><span className="PcLlJr">Địa chỉ</span></a>
                  <a className="HVZpoT" href="#"><span className="PcLlJr">Đổi mật khẩu</span></a>
                </div>
              </div>
            </div>
            <div className="stardust-dropdown">
              <div className="stardust-dropdown__item-header">
                <a className="jHbobZ" href="/user/purchase">
                  <div className="U7dHrp"><img src="https://down-vn.img.susercontent.com/file/f0049e9df4e536bc3e7f140d071e9078" /></div>
                  <div className="mY8KSl"><span className="fnmbfn">Đơn Mua</span></div>
                </a>
              </div>
              <div className="stardust-dropdown__item-body" style={{ opacity: 0 }}>
                <div className="hGOWVP"></div>
              </div>
            </div>

          </div>
        </div>

        <div className="fkIi86">
          <div className="CAysXD" role="main">
            <div className="eKNr3O">
              <form>
                <div className="lUJ6Ss">
                  <div className="KC5T1i">
                    <h1 className="hDnM0h">Đổi mật khẩu</h1>
                    <div className="tvFH75">Để bảo mật tài khoản, vui lòng không chia sẻ mật khẩu cho người khác</div>
                  </div>
                  {error && <p style={{ color: "red" }}>{error}</p>}
                  {success && <p style={{ color: "green" }}>{success}</p>}
                  <div className="bqHUZD">
                    <div className="sXoB1J d8lbmP">
                      <div className="fft2OC lBNFRA">
                        <div className="H56s_d"><label className="DIzkRh">Mật khẩu cũ</label></div>
                      </div>
                      <div className="EpETgI">
                        <div className="QBBl6m">
                          <div className="q18aRr">
                            <input required className="Btdmxp" type="password" autoComplete="off" name="currentPassword" maxLength="16"
                              value={currentPassword}
                              onChange={(e) => setCurrentPassword(e.target.value)} />
                            <button className="wakoZ5">
                              <svg fill="none" viewBox="0 0 20 10" className="f1xgWd">
                                <path stroke="none" fill="#000" fillOpacity=".54" d="M19.834 1.15a.768.768 0 00-.142-1c-.322-.25-.75-.178-1 .143-.035.036-3.997 4.712-8.709 4.712-4.569 0-8.71-4.712-8.745-4.748a.724.724 0 00-1-.071.724.724 0 00-.07 1c.07.106.927 1.07 2.283 2.141L.631 5.219a.69.69 0 00.036 1c.071.142.25.213.428.213a.705.705 0 00.5-.214l1.963-2.034A13.91 13.91 0 006.806 5.86l-.75 2.535a.714.714 0 00.5.892h.214a.688.688 0 00.679-.535l.75-2.535a9.758 9.758 0 001.784.179c.607 0 1.213-.072 1.785-.179l.75 2.499c.07.321.392.535.677.535.072 0 .143 0 .179-.035a.714.714 0 00.5-.893l-.75-2.498a13.914 13.914 0 003.248-1.678L18.3 6.147a.705.705 0 00.5.214.705.705 0 00.499-.214.723.723 0 00.036-1l-1.82-1.891c1.463-1.071 2.32-2.106 2.32-2.106z"></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="sXoB1J d8lbmP">
                      <div className="fft2OC lBNFRA">
                        <div className="H56s_d"><label className="DIzkRh">Mật khẩu mới</label></div>
                      </div>
                      <div className="EpETgI">
                        <div className="QBBl6m">
                          <div className="q18aRr">
                            <input required className="Btdmxp" type="password" autoComplete="off" name="newPassword" maxLength="16"
                              value={newPassword}
                              onChange={(e) => setNewPassword(e.target.value)} />
                            <button className="wakoZ5">
                              <svg fill="none" viewBox="0 0 20 10" className="f1xgWd">
                                <path stroke="none" fill="#000" fillOpacity=".54" d="M19.834 1.15a.768.768 0 00-.142-1c-.322-.25-.75-.178-1 .143-.035.036-3.997 4.712-8.709 4.712-4.569 0-8.71-4.712-8.745-4.748a.724.724 0 00-1-.071.724.724 0 00-.07 1c.07.106.927 1.07 2.283 2.141L.631 5.219a.69.69 0 00.036 1c.071.142.25.213.428.213a.705.705 0 00.5-.214l1.963-2.034A13.91 13.91 0 006.806 5.86l-.75 2.535a.714.714 0 00.5.892h.214a.688.688 0 00.679-.535l.75-2.535a9.758 9.758 0 001.784.179c.607 0 1.213-.072 1.785-.179l.75 2.499c.07.321.392.535.677.535.072 0 .143 0 .179-.035a.714.714 0 00.5-.893l-.75-2.498a13.914 13.914 0 003.248-1.678L18.3 6.147a.705.705 0 00.5.214.705.705 0 00.499-.214.723.723 0 00.036-1l-1.82-1.891c1.463-1.071 2.32-2.106 2.32-2.106z"></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d8lbmP">
                      <div className="fft2OC lBNFRA">
                        <div className="H56s_d"><label className="DIzkRh">Xác nhận mật khẩu</label></div>
                      </div>
                      <div className="EpETgI">
                        <div className="QBBl6m">
                          <div className="q18aRr">
                            <input required className="Btdmxp" type="password" autoComplete="off" name="confirmationPassword" maxLength="16"
                              value={confirmationPassword}
                              onChange={(e) => setConfirmationPassword(e.target.value)} />
                            <button className="wakoZ5">
                              <svg fill="none" viewBox="0 0 20 10" className="f1xgWd">
                                <path stroke="none" fill="#000" fillOpacity=".54" d="M19.834 1.15a.768.768 0 00-.142-1c-.322-.25-.75-.178-1 .143-.035.036-3.997 4.712-8.709 4.712-4.569 0-8.71-4.712-8.745-4.748a.724.724 0 00-1-.071.724.724 0 00-.07 1c.07.106.927 1.07 2.283 2.141L.631 5.219a.69.69 0 00.036 1c.071.142.25.213.428.213a.705.705 0 00.5-.214l1.963-2.034A13.91 13.91 0 006.806 5.86l-.75 2.535a.714.714 0 00.5.892h.214a.688.688 0 00.679-.535l.75-2.535a9.758 9.758 0 001.784.179c.607 0 1.213-.072 1.785-.179l.75 2.499c.07.321.392.535.677.535.072 0 .143 0 .179-.035a.714.714 0 00.5-.893l-.75-2.498a13.914 13.914 0 003.248-1.678L18.3 6.147a.705.705 0 00.5.214.705.705 0 00.499-.214.723.723 0 00.036-1l-1.82-1.891c1.463-1.071 2.32-2.106 2.32-2.106z"></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="SuYZLv d8lbmP">
                      <div className="lBNFRA"></div>
                      <div className="EpETgI">
                        <button onClick={handleChangePassword} disabled={loading} type="button" className="btn btn-solid-primary btn--m btn--inline btn-solid-primary--disabled" aria-disabled="true">{loading ? 'Loading...' : 'Xác nhận'}</button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;