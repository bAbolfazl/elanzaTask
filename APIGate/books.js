import apiClient from "./axios";

export const getBooks = async () => {
  const { data } = await apiClient.get("/users");
  return data;
};
export const getSingleBook = async (id) => {
  const { data } = await apiClient.get(`/users/${id}`);
  return data;
};
