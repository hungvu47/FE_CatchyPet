import instance from './config';

const categoryApi = {
  CategoryList: async () => {
    return await instance.get(`category/all-categories`);
  },
  CategoryAdd: async (itemRequest) => {
    return await instance.post(`category/add-category`, itemRequest);
  },
  CategoryUpdate: async (categoryId, itemRequest) => {
    return await instance.put(`category/update/${categoryId}`, itemRequest);
  },
  RemoveCategory: async (cartItemId) => {
    return await instance.delete(`category/remove/${cartItemId}`);
  },
}
export default categoryApi;