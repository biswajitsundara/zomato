import { CDN_URL } from "../../utils/constants";
import nonveg from "../../../public/assets/nonveg.svg";
import veg from "../../../public/assets/veg.svg";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../utils/cartSlice";
import discount from "../../../public/assets/discount.png";

const CartItemList = (props) => {
  const { imageId, name, price } = props.cartItems || "";

  const restaurantName = useSelector((store) => store.cart.restaurantName);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="cart-item-list">
      <div className="cart-item-list-top">
        <div className="list-cart-header">
          <img src={`${CDN_URL}/${imageId}`} className="res-header-img"></img>
          <div className="cart-rest-info">
            <h4 className="cart-rest-name">{restaurantName}</h4>
            <p className="place-text">{"Bengaluru"}</p>
            <hr />
          </div>
        </div>

        <div className="cart-item">
          {props.cartItems?.itemAttribute?.vegClassifier == "NONVEG" ? (
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
          <img src={discount} alt="" className="discount-image" />
          <span>Apply Coupon</span>
        </div>

        <div className="bill-details">
          <p className="bill-detail-header">Bill Details</p>
          <div className="item-details">
            <span>Item Total</span>
            <span>285</span>
          </div>

          <div className="delivery-details">
            <span>Delivery Fee :0.7kms </span>
            <span>31</span>
          </div>
          <div className="bill-divider" />

          <div className="delivery-tip">
            <span>Delivery Tip</span>
            <span>AddTip</span>
          </div>

          <div className="platform-fee">
            <span>Platform Fee</span>
            <span>3</span>
          </div>

          <div className="GST">
            <span>GST and Restaurant Charges</span>
            <span>3</span>
          </div>

          <div className="bold-bill-divider" />

          <div className="total-pay">
            <span>Total Pay</span>
            <span>333</span>
          </div>
        </div>
        <button className="btn-clear-cart" onClick={handleClearCart}>
          Clear Cart
        </button>
      </div>

      <div className="cart-item-list-bottom">
        <div className="cart-savings">Savings of ₹2</div>

       
            <div className="cancellation-warning">
                  <p className="cancel-heading">Review your order and address details to avoid cancellations</p>
                  <p className="cancel-notice-message"><span className="note">Note: </span>If you cancel within 60 seconds of placing your order, a 100% refund will be issued. No refund for cancellations made after 60 seconds.</p>
                  <p className="avoid-note">Avoid cancellation as it leads to food wastage.</p>
                  <a href="" className="cancel-link">Read cancellation policy</a>
                  <br />
                  <br />
            </div>
            
      </div>
    </div>
  );
};

export default CartItemList;
