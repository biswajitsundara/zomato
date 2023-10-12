import nonveg from "../../../public/assets/nonveg.svg";
import veg from "../../../public/assets/veg.svg";
import starFillOrange from "../../../public/assets/star-fill-orange.svg";
import { CDN_URL } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from '../../utils/cartSlice';

const ItemList = ({ itemCard, isLastItem }) => {
  //console.log(itemCard);

  const dispatch = useDispatch();

  const handleAddItem = (item) =>{
    dispatch(addItem(item));
  }

  const bestSellerRibbon = (
    <div>
      <img src={starFillOrange} alt="Star Icon" />
      <span className="best-seller-text">{"Bestseller"}</span>
    </div>
  );

  return (
    <>
      <div
        key={itemCard?.card?.info?.id}
        id={itemCard?.card?.info?.id}
        className="res-item-card"
      >
        <div className="item-info">
          <div className="item-ribbon">
            {itemCard?.card?.info?.itemAttribute?.vegClassifier == "NONVEG" ? (
              <img src={nonveg}></img>
            ) : (
              <img src={veg}></img>
            )}
            {itemCard?.card?.info?.ribbon?.text == "Bestseller"
              ? bestSellerRibbon
              : ""}
          </div>
          <h4 className="item-name">{itemCard?.card?.info?.name}</h4>
          <p className="item-price">
            &#8377;{" "}
            {(itemCard?.card?.info?.price ||
              itemCard?.card?.info?.defaultPrice) / 100}
          </p>
          <p className="item-desc">{itemCard?.card?.info?.description}</p>
        </div>

        <div className="image-container">
          {itemCard?.card?.info?.imageId ? (
            <img
              src={`${CDN_URL}${itemCard?.card?.info?.imageId}`}
              className="res-item-image"
              alt="res-item-image"
            />
          ) : (
            <img
              src={`https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/495px-No-Image-Placeholder.svg.png?20200912122019`}
              className="res-item-image"
              alt="res-item-image"
            />
          )}
          <button className="itemAddButton" onClick={() => handleAddItem(itemCard?.card?.info)}>ADD</button>
        </div>
      </div>

      {isLastItem ? <div className="item-divider"></div> : ""}
    </>
  );
};

export default ItemList;
