import instance from "./config";

const orderAPI = {
  OrderList: async () => {
    return await instance.get(`/order/allOrder`)
  },
  Payment: async (orderRequest) => {
    return await instance.post(`/order/process`, orderRequest)
  },
  GetOrderById: async (orderId) => {
    return await instance.get(`/order/${orderId}`);
  },
  GetOrderOfUser: async () => {
    return await instance.get(`/order/order-of-user`);
  },
}

export default orderAPI;