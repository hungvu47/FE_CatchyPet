import instance from './config';

const productApi = {
  ProductList: async () => {
    return await instance.get("product/collection")
  },
  ProductByCategory: async (categoryId) => {
    return await instance.get(`product/category/${categoryId}`);
  },
  ProductDetail: async (productId) => {
    return await instance.get(`product${productId}`);
  },
  ProductAdd: async (dataReq) => {
    return await instance.post("product/add-product", dataReq);
  },
  ProductUpdate: async (productId, dataReq) => {
    return await instance.put(`product/update/${productId}`, dataReq);
  },
  RemoveProduct: async (productId) => {
    return await instance.delete(`product/delete/${productId}`);
  },
  SearchProduct: async (data) => {
    return await instance.get(
      `search-product?search=${data?.search}&price=${data?.price}&authors=${data?.authors}&formbooks=${data?.formbooks}&supplieres=${data?.supplieres}`
    );
  }
}
export default productApi;