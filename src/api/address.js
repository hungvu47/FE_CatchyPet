import instance from "./config";

const addressApi = {
  AddressOfUser: async () => {
    return await instance.get(`/address/addressOfUser`)
  },
  DefaultAddress: async () => {
    return await instance.get(`/address/defaultAddress`)
  },
  AddAddress: async (formData) => {
    return await instance.post(`/address/addAddressUser`, formData)
  },
  UpdateAddress: async (addressId, formData) => {
    return await instance.put(`/address/updateAddressUser/${addressId}`, formData)
  },
  DeleteAddress: async (addressId) => {
    return await instance.delete(`/address/deleteAddress/${addressId}`)
  }
}

export default addressApi;