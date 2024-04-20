import "./address.css"

import { useEffect, useState } from "react";
import ModalConfirm from "./ModalConfirm"
import Helper from "../../utiliti/helper/Helper";
import AddAddress from "./AddAddress";
import { useDispatch, useSelector } from "react-redux";
import { addAddress, addressOfUser, deleteAddress, selectAddresses, updateAddress } from "../../slice/addressSlice";

function AddressProfile() {
  const dispatch = useDispatch();
  const [address, setAddress] = useState([]);
  const addresses = useSelector(selectAddresses);
  const [showAddAddressForm, setShowAddAddressForm] = useState(false);
  const [recordForEdit, setRecordForEdit] = useState(null);
  const [actionType, setActionType] = useState("add");
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [addressIdToDelete, setAddressIdToDelete] = useState(null);


  useEffect(() => {
    dispatch(addressOfUser());
  }, [dispatch]);


  useEffect(() => {
    setAddress(addresses);
  }, [addresses]);

  const toggleEditAddressForm = (addressId) => {
    const address = addresses.find(addr => addr.addressId === addressId);
    setRecordForEdit(address);
    setShowAddAddressForm(true);
    setActionType("edit");
  };

  const toggleAddNewAddressForm = () => {
    setShowAddAddressForm(true);
    setActionType("add");
    setRecordForEdit(null);
  };

  const toggleConfirmModal = (addressId) => {
    setAddressIdToDelete(addressId);
    setShowConfirmModal(!showConfirmModal);
  };

  const handleDeleteAddress = async () => {
    try {
      dispatch(deleteAddress(addressIdToDelete));
      Helper.toast("success", "Xóa địa chỉ thành công");
      setShowConfirmModal(false);
    } catch (error) {
      Helper.toast('error', 'Đã xảy ra lỗi khi xóa địa chỉ.');
      console.error('Error deleting address:', error);
    }
  };

  const addOrEdit = async (values) => {
    try {
      if (actionType === "add") {
        await dispatch(addAddress(values));
        Helper.toast("success", "Thêm địa chỉ thành công");
      } else if (actionType === "edit") {
        const { addressId, ...formData } = values;
        await dispatch(updateAddress({ addressId, formData }));
        Helper.toast("success", "Cập nhật địa chỉ thành công");
      }
      setRecordForEdit(null);
      setShowAddAddressForm(false);
    } catch (error) {
      Helper.toast('error', `Đã xảy ra lỗi khi ${actionType === "add" ? "thêm" : "cập nhật"} địa chỉ.`);
      console.error(`Error ${actionType === "add" ? "add" : "update"} address:`, error);
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
                    <a href="/account/profile"><span>Tài khoản</span></a>
                    <span className="mr_lr">&nbsp;/&nbsp;</span>
                  </li>
                  <li><strong><span>Địa chỉ</span></strong></li>
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
                <a className="jHbobZ" href="/user/account/profile">
                  <div className="U7dHrp"><img src="https://down-vn.img.susercontent.com/file/ba61750a46794d8847c3f463c5e71cc4" /></div>
                  <div className="mY8KSl"><span className="fnmbfn">Tài khoản của tôi</span></div>
                </a>
              </div>
              <div className="stardust-dropdown__item-body stardust-dropdown__item-body--open" style={{ opacity: 1 }}>
                <div className="hGOWVP">
                  <a className="HVZpoT" href="/account/profile"><span className="PcLlJr">Hồ sơ</span></a>
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
                  <div className="lOB9lY">Địa chỉ của tôi</div>
                  <div className="rT9Vbd"></div>
                </div>
                <div>
                  <div className="y3hZ9E">
                    <div style={{ display: "flex" }}>
                      <button onClick={toggleAddNewAddressForm} className="shopee-button-solid shopee-button-solid--primary qTzF0g">
                        <div className="psXjeQ">
                          <div className="zNqMl2">
                            <svg enableBackground="new 0 0 10 10" viewBox="0 0 10 10" x="0" y="0" className="shopee-svg-icon icon-plus-sign">
                              <polygon points="10 4.5 5.5 4.5 5.5 0 4.5 0 4.5 4.5 0 4.5 0 5.5 4.5 5.5 4.5 10 5.5 10 5.5 5.5 10 5.5"></polygon>
                            </svg>
                          </div>
                          <div>Thêm địa chỉ mới</div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="KK80cT">

                <div className="OrZkCF">
                  <div className="e65FdS">Địa chỉ</div>
                  {address.map(address => (
                    <div key={address.addressId} className="UUD4No SXp5o_">
                      <div className="_RPpod">
                        <div role="heading" className="X57SfF V4So7f">
                          <div id="address-card_158a342f-b5cc-4f91-a40a-8bd6963271e4_header" className="QyRpwQ lWXnp3">
                            <span className="Fi1zsg OwAhWT">
                              <div className="mjiDsj">{address.fullName}</div>
                            </span>
                            <div className="YJU6OK"></div>
                            <div role="row" className="N_WJUf lw_xYb E24UKj">{address.phone}</div>
                          </div>
                          <div className="YziUfM">
                            <button onClick={() => toggleEditAddressForm(address.addressId)} className="T_oZqJ">Cập nhật</button>
                            <button onClick={() => toggleConfirmModal(address.addressId)} className="T_oZqJ">Xóa</button>
                          </div>
                        </div>
                        <div id="address-card_158a342f-b5cc-4f91-a40a-8bd6963271e4_content" role="heading" className="X57SfF V4So7f">
                          <div className="QyRpwQ lWXnp3">
                            <div className="We6XvC">
                              <div role="row" className="E24UKj">{address.streetAddress}</div>
                              <div role="row" className="E24UKj">{address.commune}, {address.district}, {address.city}</div>
                            </div>
                          </div>
                          <div className="KFu3R3 YziUfM"><button className="k8tV5Y zvyzwn zDPndA" disabled="">Thiết lập mặc định</button></div>
                        </div>
                        <div id="address-card_158a342f-b5cc-4f91-a40a-8bd6963271e4_badge" role="row" className="vy2yND E24UKj">
                          {address.default && (
                            <span role="mark" className="wZ_1w7 aCY_5O ZDVTqW">Mặc định</span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <ModalConfirm
          isOpen={showConfirmModal}
          onCancel={() => setShowConfirmModal(false)}
          onConfirm={handleDeleteAddress}
        />
      </div>
      {showAddAddressForm && (
        <AddAddress
          recordForEdit={recordForEdit}
          addOrEdit={addOrEdit}
          actionType={actionType}
          onCancel={() => setShowAddAddressForm(false)}
        />
      )}
    </div>
  );
}

export default AddressProfile;