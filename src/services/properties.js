import apiClient from "./api/apiClient"

const PROPERTIES_LIST = "/properties"

export const fetchProperties = async (page = 1, limit = 10) => {
  const { data } = await apiClient.get(PROPERTIES_LIST, {
    params: { page, limit }
  })
  return data
}

export const fetchPropertyById = async (propertyId) => {
  const { data } = await apiClient.get(`${PROPERTIES_LIST}/${propertyId}`)
  return data
}

export const fetchPropertiesStats = async () => {
  const { data } = await apiClient.get(`${PROPERTIES_LIST}/stats`)
  return data
}

