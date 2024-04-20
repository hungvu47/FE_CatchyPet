import instance from "./config";

const cartApi = {
  CartList: async () => {
    return await instance.get(`cart/items`);
  },
  CartAdd: async (itemRequest) => {
    return await instance.post("cart/add", itemRequest);
  },
  CartUpdate: async (cartItemId, itemRequest) => {
    return await instance.put(`cart/update/${cartItemId}`, itemRequest);
  },
  RemoveCart: async (cartItemId) => {
    return await instance.delete(`cart/delete/${cartItemId}`);
  },
}
export default cartApi;