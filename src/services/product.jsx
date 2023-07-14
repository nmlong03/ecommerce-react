import instance from "./instance";

const getAllPro = () => {
  return instance.get(`/products`);
};
const getOnePro = (id) => {
  return instance.get(`/products/` + id);
};
const addPro = (product) => {
  return instance.post(`/products`, product);
};
const updatePro = (product) => {
  return instance.put(`/products/` + product.id, product);
};
const deletePro = (id) => {
  return instance.delete(`/products/` + id);
};
const uploadImg = (files) => {
  return instance.post('/images/upload', files)
}
export {uploadImg, getAllPro, getOnePro, updatePro, deletePro, addPro };
