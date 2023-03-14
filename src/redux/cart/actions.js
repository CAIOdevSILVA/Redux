import CartActionTypes from "./acrtion-types";

export const addProductsToCart = (payload) => ({
  type: CartActionTypes.ADD_PRODUCT,
  payload,
})

export const removeProductsFromCart = (payload) => ({
  type: CartActionTypes.REMOVE_PRODUCT,
  payload,
})

export const addOneMoreProduct = (payload) => ({
  type: CartActionTypes.ADD_ONE_MORE_PRODUCT,
  payload
})

export const removeOneProduct = (payload) => ({
  type: CartActionTypes.REMOVE_ONE_PRODUCT,
  payload
})