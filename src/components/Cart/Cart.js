import { useSelector } from "react-redux";
import { CDN_URL } from "../../utils/constants";
import nonveg from "../../../public/assets/nonveg.svg";
import veg from "../../../public/assets/veg.svg";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const restaurantName = useSelector((store) => store.cart.restaurantName);

  const { imageId, name, price } = cartItems[0];

  return (
    <div className="cart-container">
      <div className="cart-checkout">{JSON.stringify(cartItems)}</div>
      {console.log(imageId)}

      <div className="cart-item-list">
        <div className="list-cart-header">
          <img src={`${CDN_URL}/${imageId}`} className="res-header-img"></img>
          <div className="cart-rest-info">
            <h4 className="cart-rest-name">{restaurantName}</h4>
            <p className="place-text">{"Bengaluru"}</p>
            <hr />
          </div>
        </div>

        <div className="cart-item">
          {cartItems[0]?.itemAttribute?.vegClassifier == "NONVEG" ? (
            <img src={nonveg}></img>
          ) : (
            <img src={veg}></img>
          )}

          <p>{name}</p>
          <div className="counter-btn">
            <div>{"-"}</div>
            <div>{"1"}</div>
            <div>{"+"}</div>
          </div>
          <p>&#8377;{price / 100}</p>
        </div>

        <div className="suggestion">
          <p>{"Any suggestions? We will pass it on..."}</p>
        </div>

        <div className="no-contact-delivery">
          <div>
            <input type="checkbox" name="CUTLERY_INSTRUCTION_CHK_BOX" />
          </div>

          <div>
            <p className="no-delivery-header">
              {"Opt in for No-contact Delivery"}
            </p>
            <p className="no-delivery-text">
              {
                "Unwell, or avoiding contact? Please select no-contact delivery. Partner will safely place the order outside your door (not for COD)"
              }
            </p>
          </div>
        </div>

        <div className="apply-coupon">
          
        </div>
      </div>
    </div>
  );
};

export default Cart;
