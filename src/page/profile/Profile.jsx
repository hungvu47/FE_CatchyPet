import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../slice/userSlice";

function ProfileUser() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.users);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch])

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
                  <li><strong><span>Hồ sơ</span></strong></li>
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
                  <a className="HVZpoT" href="#"><span className="PcLlJr">Hồ sơ</span></a>
                  <a className="HVZpoT VfX643" href="/account/address"><span className="PcLlJr">Địa chỉ</span></a>
                  <a className="HVZpoT" href="/account/change-password"><span className="PcLlJr">Đổi mật khẩu</span></a>
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
            <div className="YTmAr0">
              <div className="qtYn7m">
                <div className="Oe_bEi">
                  <div className="lOB9lY">Hồ sơ của tôi</div>
                  <div className="rT9Vbd"></div>
                </div>
                <div>
                </div>
              </div>
              <div className="KK80cT">

                <div className="OrZkCF">
                  <div className="e65FdS">
                    <p>Họ và tên: <span>{user.fullName}</span></p>
                    <p>Email: <span>{user.email}</span></p>
                    <p>Số điện thoại: <span>{user.phone}</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileUser;