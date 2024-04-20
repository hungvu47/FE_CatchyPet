import instance from "./config"

const userApi = {
  UserList: async () => {
    return await instance.get(`/user/`)
  },
  ChangePassword: async (dataReq) => {
    return await instance.patch(`/user/change-password`, dataReq)
  },
  GetUser: async () => {
    return await instance.get(`/user/getUser`)
  }
}

export default userApi;