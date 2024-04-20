import instance from "./config";

const appointmentApi = {
  AllAppointment: async () => {
    return await instance.get(`/appointments/all`)
  },
  AddAppointment: async (formData) => {
    return await instance.post(`/appointments/create`, formData)
  },
  UpdateAppointment: async (appointmentId, formData) => {
    return await instance.put(`/appointments/update/${appointmentId}`, formData)
  },
  DeleteAppointment: async (appointmentId) => {
    return await instance.delete(`/appointments/delete/${appointmentId}`)
  }
}

export default appointmentApi;