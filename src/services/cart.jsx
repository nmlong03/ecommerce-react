import instance from "./instance";
const addToCart = (product) => {
    return instance.post('/cart',product)
  }
  const getCart = (id) => {
    return instance.get('/cart/' + id )
  }
  const deleteItemCart = (id) => {
    return instance.delete('/cart/' + id)
  }
  export {addToCart, getCart, deleteItemCart}