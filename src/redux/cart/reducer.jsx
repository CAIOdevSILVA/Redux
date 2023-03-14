import CartActionTypes from "./acrtion-types";
//É uma boa prática do redux colocar toda lógica
//que envolve os valores do reducer no arquivo do 
//próprio reducer.

const initialState = {
  products: [],
}

const cartReducer = (state = initialState, action ) => {
  switch(action.type){
    case CartActionTypes.ADD_PRODUCT:
      //Verificar se o produto ja existe no state
      const productIsAlreadyInCart = state.products.some((product) =>
        product.id === action.payload.id
      );
      //se ele estivar, aumentar a quantidade em 1
      if(productIsAlreadyInCart){
        return {
          ...state,
          products: state.products.map((product) => 
            product.id === action.payload.id ? {...product, quantity: product.quantity + 1} :
            product
          ),
        };
      }
      //se ele não estiver, adicioná-lo
      return{
        ...state,
        products: [...state.products, { ...action.payload, quantity: 1}]
      };

    case CartActionTypes.REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(product => product.id !== action.payload)
      };

      case CartActionTypes.ADD_ONE_MORE_PRODUCT:
        return {
          ...state,
          products: state.products.map((product) => 
            product.id === action.payload && {...product, quantity: product.quantity + 1}
          )
        }

      case CartActionTypes.REMOVE_ONE_PRODUCT:
        return {
          ...state,
          products: state.products.map((product) => 
            product.id === action.payload && {...product, quantity: product.quantity -1}
          ).filter(product => product.quantity > 0)
        }
    default:
      return state;
  }
}

export default cartReducer