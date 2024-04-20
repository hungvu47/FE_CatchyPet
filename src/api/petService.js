import instance from "./config";

const PetServiceApi = {
  PetServiceList: async () => {
    return await instance.get(`/pet-service/all-services`)
  },
  AddPetService: async (formData) => {
    return await instance.post(`/pet-service/create`, formData)
  },
  UpdatePetService: async (petCareId, formData) => {
    return await instance.put(`/pet-service/update/${petCareId}`, formData)
  },
  DeletePetService: async (petCareId) => {
    return await instance.delete(`/pet-service/delete/${petCareId}`)
  }
}

export default PetServiceApi;