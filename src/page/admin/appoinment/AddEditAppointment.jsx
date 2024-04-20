import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllService } from "../../../slice/petServiceSlice";

function AddEditAppointment({ recordForEdit, addOrEdit, onCancel }) {
  const [values, setValues] = useState({
    appointmentId: recordForEdit ? recordForEdit.appointmentId : "",
    customerName: recordForEdit ? recordForEdit.customerName : "",
    customerPhone: recordForEdit ? recordForEdit.customerPhone : "",
    customerEmail: recordForEdit ? recordForEdit.customerEmail : "",
    totalAmount: recordForEdit ? recordForEdit.totalAmount : "",
    petServiceId: recordForEdit ? recordForEdit.petServiceId : "",
    // classifications: recordForEdit ? recordForEdit.classifications.map(classification => ({
    //   classificationName: classification.classificationName,
    //   values: classification.values.map(value => value)
    // })) : []
  });

  console.log("values", values);

  const dispatch = useDispatch();
  const [selectedService, setSelectedService] = useState('');
  const [selectedClassifications, setSelectedClassifications] = useState({});
  const services = useSelector(state => state.service.petServices);

  const { petCare } = recordForEdit || {};
  console.log("data", petCare);

  useEffect(() => {
    dispatch(fetchAllService())
  }, [dispatch])

  useEffect(() => {
    if (recordForEdit != null && recordForEdit.petCare) {
      setSelectedService(recordForEdit.petCare.serviceName);
      setValues(prevValues => ({
        ...prevValues,
        petServiceId: recordForEdit.petCare.petCareId,
        classificationValues: recordForEdit.classificationValues || {}
      }));
    }
  }, [recordForEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(prevValues => ({
      ...prevValues,
      [name]: value
    }));
  };

  const handleServiceChange = (event) => {
    const selectedServiceName = event.target.value;
    setSelectedService(selectedServiceName);
    setSelectedClassifications({});
    const selectedService = services.find(service => service.serviceName === selectedServiceName);
    if (selectedService) {
      setValues(prevValues => ({
        ...prevValues,
        petServiceId: selectedService.petCareId
      }));
    }
  };

  const handleClassificationChange = (classificationName, event) => {
    setSelectedClassifications({
      ...selectedClassifications,
      [classificationName]: event.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addOrEdit(values);
  };
  return (
    <>
      <aside className="lQl2Zk">
        <div className="h_K92g undefined">
          <div className="w3X3nN">
            <div className="ZrzEDE">{recordForEdit ? "Cập nhật đơn" : "Thêm đơn mới"}</div>
            <form>
              <div className="jypd7H">
                <div className="kTXLeO">
                  <div className="R1TwAI">
                    <div className="OanBpz Jl3DqQ">
                      <div className="t0HxU5">
                        <div className="rG6mJB">Họ và tên</div>
                        <input className="AukTuV" type="text" placeholder="Họ và tên" maxLength="64" value={values.customerName}
                          onChange={handleChange} name="customerName" />
                      </div>
                    </div>
                    <div className="FqyAgi"></div>
                    <div className="OanBpz H7kyc3">
                      <div className="t0HxU5">
                        <div className="rG6mJB">Số điện thoại</div>
                        <input className="AukTuV" type="text" placeholder="Số điện thoại" name="customerPhone" value={values.customerPhone} onChange={handleChange} />
                      </div>
                    </div>
                  </div>

                  <div className="R1TwAI">
                    <div className="XODmKx">
                      <div className="LzFExT U42F79 j_0_nc">
                        <div className="DHKqPc">
                          <div className="cdREm2">Email</div>
                          <input className="SvyEcF" type="text" placeholder="Email" name="customerEmail" value={values.customerEmail}
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
                          <div className="cdREm2">Tổng tiền</div>
                          <input className="SvyEcF" type="text" placeholder="Tổng tiền" name="totalAmount" value={values.totalAmount}
                            onChange={handleChange} />
                        </div>
                      </div>
                      <div className="DoWgsT"></div>
                    </div>
                  </div>

                  <div>
                    <select value={selectedService} onChange={handleServiceChange}>
                      <option value="">Chọn dịch vụ</option>
                      {services.map(service => (
                        <option key={service.petCareId} value={service.serviceName}>{service.serviceName}</option>
                      ))}
                    </select>
                    {selectedService && (
                      <div>
                        <p>Chọn phân loại:</p>
                        {services.find(service => service.serviceName === selectedService)?.classifications.map(classification => (
                          <div key={classification.classificationPetId}>
                            <label>{classification.classificationName}: </label>
                            <select
                              value={selectedClassifications[classification.classificationName] || ''}
                              onChange={(event) => handleClassificationChange(classification.classificationName, event)}
                            >
                              <option value="">Chọn {classification.classificationName.toLowerCase()}</option>
                              {classification.values.map(item => (
                                <option key={item.id} value={item.id}>{item.value}</option>
                              ))}
                            </select>
                          </div>
                        ))}
                      </div>
                    )}
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
    </>
  );
}

export default AddEditAppointment;