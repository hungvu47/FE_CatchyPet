import { useState } from "react";

function AddAddress({ recordForEdit, addOrEdit, onCancel }) {
  const [values, setValues] = useState({
    addressId: recordForEdit ? recordForEdit.addressId : "",
    fullName: recordForEdit ? recordForEdit.fullName : "",
    phone: recordForEdit ? recordForEdit.phone : "",
    streetAddress: recordForEdit ? recordForEdit.streetAddress : "",
    commune: recordForEdit ? recordForEdit.commune : "",
    district: recordForEdit ? recordForEdit.district : "",
    city: recordForEdit ? recordForEdit.city : "",
    default: recordForEdit ? recordForEdit.default : false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(prevValues => ({
      ...prevValues,
      [name]: value
    }));
  };

  const handleCheckboxChange = () => {
    setValues(prevValues => ({
      ...prevValues,
      isDefault: !prevValues.default
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addOrEdit(values);
  };
  return (
    <aside className="lQl2Zk">
      <div className="h_K92g undefined">
        <div className="w3X3nN">
          <div className="ZrzEDE">{recordForEdit ? "Cập nhật địa chỉ" : "Thêm địa chỉ mới"}</div>
          <form>
            <div className="jypd7H">
              <div className="kTXLeO">
                <div className="R1TwAI">
                  <div className="OanBpz Jl3DqQ">
                    <div className="t0HxU5">
                      <div className="rG6mJB">Họ và tên</div>
                      <input className="AukTuV" type="text" placeholder="Họ và tên" maxLength="64" value={values.fullName}
                        onChange={handleChange} name="fullName" />
                    </div>
                  </div>
                  <div className="FqyAgi"></div>
                  <div className="OanBpz H7kyc3">
                    <div className="t0HxU5">
                      <div className="rG6mJB">Số điện thoại</div>
                      <input className="AukTuV" type="text" placeholder="Số điện thoại" name="phone" value={values.phone} onChange={handleChange} />
                    </div>
                  </div>
                </div>

                <div className="R1TwAI">
                  <div className="XODmKx">
                    <div className="LzFExT U42F79 j_0_nc">
                      <div className="DHKqPc">
                        <div className="cdREm2">Địa chỉ cụ thể</div>
                        <input className="SvyEcF" type="text" placeholder="Số nhà, tên đường" name="streetAddress" value={values.streetAddress}
                          onChange={handleChange} />
                      </div>
                    </div>
                    <div className="DoWgsT"></div>
                  </div>
                </div>
                <div className="R1TwAI">
                  <div className="XODmKx">
                    <div className="LzFExT U42F79 j_0_nc">
                      <div className="DHKqPc">
                        <div className="cdREm2">Xã/Phường</div>
                        <input className="SvyEcF" type="text" placeholder="Xã/Phường" name="commune" value={values.commune}
                          onChange={handleChange} />
                      </div>
                    </div>
                    <div className="DoWgsT"></div>
                  </div>
                </div>
                <div className="R1TwAI">
                  <div className="XODmKx">
                    <div className="LzFExT U42F79 j_0_nc">
                      <div className="DHKqPc">
                        <div className="cdREm2">Quận/Huyện</div>
                        <input className="SvyEcF" type="text" placeholder="Quận/Huyện" name="district" value={values.district}
                          onChange={handleChange} />
                      </div>
                    </div>
                    <div className="DoWgsT"></div>
                  </div>
                </div>
                <div className="R1TwAI">
                  <div className="XODmKx">
                    <div className="LzFExT U42F79 j_0_nc">
                      <div className="DHKqPc">
                        <div className="cdREm2">Tỉnh/Thành Phố</div>
                        <input className="SvyEcF" type="text" placeholder="Tỉnh/Thành Phố" name="city" value={values.city}
                          onChange={handleChange} />
                      </div>
                    </div>
                    <div className="DoWgsT"></div>
                  </div>
                </div>
                <div className="NlC19f">
                  <label className="_uXoWc">
                    <input checked={values.default} disabled={values.default} onClick={handleCheckboxChange} className="sp7inB" type="checkbox" role="checkbox" />
                    <div className="H4iGzY">Đặt làm địa chỉ mặc đinh</div>
                  </label>
                </div>
              </div>
              <div className="Lr7eTF">
                <button onClick={onCancel} className="zvyzwn Jp08En">Trở Lại</button>
                <button onClick={handleSubmit} className="zvyzwn Dr0Xm6">Hoàn thành</button></div>
            </div>
          </form>
        </div>
      </div>
      <div className="tavxpo"></div>
    </aside>
  );
}

export default AddAddress;