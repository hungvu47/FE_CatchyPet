import { useState } from "react";

function AddEditService({ recordForEdit, addOrEdit, onCancel }) {
  const [values, setValues] = useState({
    petCareId: recordForEdit ? recordForEdit.petCareId : "",
    serviceName: recordForEdit ? recordForEdit.serviceName : "",
    priceService: recordForEdit ? recordForEdit.priceService : "",
    classifications: recordForEdit ? recordForEdit.classifications.map(classification => ({
      classificationName: classification.classificationName,
      values: classification.values.map(value => value)
    })) : []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(prevValues => ({
      ...prevValues,
      [name]: value
    }));
  };

  const handleClassificationChange = (index, classificationName, value) => {
    const newValue = typeof value === 'string' ? value : value.join(',');
    const newClassifications = [...values.classifications];
    newClassifications[index] = {
      ...newClassifications[index],
      classificationName,
      values: newValue.split(',').map(val => val.trim())
    };
    setValues(prevValues => ({
      ...prevValues,
      classifications: newClassifications
    }));
  };

  const handleAddClassification = () => {
    setValues(prevValues => ({
      ...prevValues,
      classifications: [
        ...prevValues.classifications,
        { classificationName: '', values: [] }
      ]
    }));
  };

  const handleRemoveClassification = (index) => {
    const newClassifications = [...values.classifications];
    newClassifications.splice(index, 1);
    setValues(prevValues => ({
      ...prevValues,
      classifications: newClassifications
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!values.serviceName || !values.priceService) {
      alert("Vui lòng điền đầy đủ thông tin!");
      return;
    }
    addOrEdit(values);
  };

  return (
    <>
      <aside className="lQl2Zk">
        <div className="h_K92g undefined">
          <div className="w3X3nN">
            <div className="ZrzEDE">{recordForEdit ? "Cập nhật dịch vụ" : "Thêm dịch vụ mới"}</div>
            <form>
              <div className="jypd7H">
                <div className="kTXLeO">
                  <div className="R1TwAI">
                    <div className="OanBpz Jl3DqQ">
                      <div className="t0HxU5">
                        <div className="rG6mJB">Tên dịch vụ</div>
                        <input className="AukTuV" type="text" placeholder="Tên dịch vụ" maxLength="64" value={values.serviceName}
                          onChange={handleChange} name="serviceName" />
                      </div>
                    </div>
                    <div className="FqyAgi"></div>
                  </div>

                  <div className="R1TwAI">
                    <div className="XODmKx">
                      <div className="LzFExT U42F79 j_0_nc">
                        <div className="DHKqPc">
                          <div className="cdREm2">Giá</div>
                          <input className="SvyEcF" type="text" placeholder="Giá" name="priceService" value={values.priceService}
                            onChange={handleChange} />
                        </div>
                      </div>
                      <div className="DoWgsT"></div>
                    </div>
                  </div>

                  {values.classifications.map((classification, index) => (
                    <div key={index}>
                      <div className="R1TwAI">
                        <div className="XODmKx">
                          <div className="LzFExT U42F79 j_0_nc">
                            <div className="DHKqPc">
                              <div className="cdREm2">Phân loại {index + 1}</div>
                              <input className="SvyEcF" type="text" placeholder="Tên phân loại" value={classification.classificationName}
                                onChange={(e) => handleClassificationChange(index, e.target.value, classification.values)} />
                            </div>
                          </div>
                          <div className="DoWgsT"></div>
                        </div>
                        <div className="XODmKx">
                          <div className="LzFExT U42F79 j_0_nc">
                            <div className="DHKqPc">
                              <div className="cdREm2">Giá trị</div>
                              <input className="SvyEcF" type="text" placeholder="Giá trị" defaultValue={classification.values.map(val => val.value).join(',')}
                                onChange={(e) => handleClassificationChange(index, classification.classificationName, e.target.value)} />
                            </div>
                          </div>
                          <div className="DoWgsT"></div>
                        </div>
                        <button type="button" onClick={() => handleRemoveClassification(index)}>Xóa</button>
                      </div>
                    </div>
                  ))}
                  <button type="button" onClick={handleAddClassification}>Thêm phân loại</button>

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

export default AddEditService;