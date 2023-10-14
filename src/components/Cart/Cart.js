import { useSelector } from "react-redux";
import CartItemList from "./CartItemList";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  if(cartItems.length === 0){
    return <div className="empty-cart">
      <img src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0'} alt="" style={{width:'30%'}}/>
      <h4 className="empty-cart-header">Your cart is empty</h4>
      <p className="empty-cart-text">You can go to home page to view more restaurants</p>
      <button className="btn-explore-restaurants">See restaurants near you</button>
    </div>
  }

  return (
    <div className="cart-container">
      <div className="cart-checkout">{"Hello World"}</div>
      <CartItemList cartItems={cartItems[0]} />
    </div>
  );
};

export default Cart;
