import { useSelector } from "react-redux"
import { selectProductTotalPrice } from "../../redux/cart/cart.selectors";
import CartItem from "../cart-item/index"
// Styles
import * as Styles from "./styles";

const Cart = ({ isVisible, setIsVisible }) => {
  const handleEscapeAreaClick = () => setIsVisible(false);

  const { products } = useSelector((rootReducer) => rootReducer.cartReducer)
  const productsTotalPrice = useSelector(selectProductTotalPrice)

  return (
    <Styles.CartContainer isVisible={isVisible}>
      <Styles.CartEscapeArea onClick={handleEscapeAreaClick} />
      <Styles.CartContent>
        <Styles.CartTitle>Seu Carrinho</Styles.CartTitle>
        {products.map(product => <CartItem product={product}/>)}       
        {productsTotalPrice === 0 ? (
          <Styles.VoidCart>
            <p>Nenhum Produto Adicionado no Carrinho!</p>
          </Styles.VoidCart>
        ) : (
          <Styles.TotalPrice>
            <p>Preço Total: <span>R${productsTotalPrice},00</span></p>
          </Styles.TotalPrice>
        )}
      </Styles.CartContent>
    </Styles.CartContainer>
  );
};

export default Cart;
