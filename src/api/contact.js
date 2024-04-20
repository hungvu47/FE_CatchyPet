import instance from "./config";

const contactApi = {
  ContactList: async () => {
    return await instance.get(`/contact/contactList`);
  },
  CustomerContact: async (formData) => {
    return await instance.post(`/contact/customer`, formData)
  }
}

export default contactApi;