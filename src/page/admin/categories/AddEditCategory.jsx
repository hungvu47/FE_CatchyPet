import { useState } from "react";
import UploadImage from "../../../adminComponent/uploadImg/UploadImg";

function AddEditCategory({ recordForEdit, addOrEdit, onCancel }) {
  const [values, setValues] = useState({
    categoryId: recordForEdit ? recordForEdit.categoryId : "",
    categoryName: recordForEdit ? recordForEdit.categoryName : "",
    categoryImage: recordForEdit ? recordForEdit.categoryImage : "",
    categoryDes: recordForEdit ? recordForEdit.categoryDes : "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(prevValues => ({
      ...prevValues,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addOrEdit(values);
  };

  const handleImageChange = (imageUrl) => {
    setValues({
      ...values,
      categoryImage: imageUrl,
    });
  };

  return (
    <>
      <aside className="lQl2Zk">
        <div className="h_K92g undefined">
          <div className="w3X3nN">
            <div className="ZrzEDE">{recordForEdit ? "Cập nhật danh mục" : "Thêm danh mục mới"}</div>
            <form>
              <div className="jypd7H">
                <div className="kTXLeO">
                  <div className="R1TwAI">
                    <div className="OanBpz Jl3DqQ">
                      <div className="t0HxU5">
                        <div className="rG6mJB">Tên danh mục</div>
                        <input className="AukTuV" type="text" placeholder="Tên danh mục" maxLength="64" value={values.categoryName}
                          onChange={handleChange} name="categoryName" />
                      </div>
                    </div>
                    <div className="FqyAgi"></div>
                    <div className="OanBpz H7kyc3">
                      <div className="t0HxU5">
                        <div className="rG6mJB">Ảnh</div>
                        <UploadImage
                          setImageUrls={handleImageChange}
                          imageUrl={recordForEdit ? recordForEdit.categoryImage : ""} />
                      </div>
                    </div>
                  </div>

                  <div className="R1TwAI">
                    <div className="XODmKx">
                      <div className="LzFExT U42F79 j_0_nc">
                        <div className="DHKqPc">
                          <div className="cdREm2">Mô tả</div>
                          <input className="SvyEcF" type="text" placeholder="Mô tả" name="categoryDes" value={values.categoryDes}
                            onChange={handleChange} />
                        </div>
                      </div>
                      <div className="DoWgsT"></div>
                    </div>
                  </div>

                </div>
                <div className="Lr7eTF">
                  <button type="button" onClick={onCancel} className="zvyzwn Jp08En" >Trở Lại</button>
                  <button onClick={handleSubmit} className="zvyzwn Dr0Xm6">Hoàn thành</button></div>
              </div>
            </form>
          </div>
        </div>
        <div className="tavxpo"></div>
      </aside>
    </>
  );
}

export default AddEditCategory;