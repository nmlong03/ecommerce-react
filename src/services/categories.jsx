import instance from "./instance";

const getAllCate = () => {
    return instance.get('/categories')
}
const getCate = (id) => {
    return instance.get('/categories/' + id)
}

export {getAllCate, getCate}