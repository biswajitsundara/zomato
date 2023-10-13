import Shimmer from "../card/Shimmer";
import { useParams } from "react-router-dom";
import starFillSvg from "../../../public/assets/star-fill-green.svg";
import starFillOrange from '../../../public/assets/star-fill-orange.svg';
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import RestaurantCategory from "../accordion/RestaurantCategory";
import {useState} from 'react';
import { useDispatch } from "react-redux";
import { setRestaurantName } from '../../utils/cartSlice';

const RestaurantMenu = () => {

  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);

  if (resInfo === null) return <Shimmer />;

  const {
    name,
    cuisines,
    costForTwoMessage,
    areaName,
    city,
    avgRatingString,
    totalRatingsString,
  } = resInfo?.cards[0]?.card?.card?.info;
  let { itemCards } = resInfo?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;
    if(!itemCards){
      itemCards = resInfo?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card.itemCards;
    }
  //console.log(resInfo?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[0]?.card?.info.name);
  //console.log(resInfo?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards);
  //console.log(resInfo?.cards[0]?.card?.card?.info);
  //console.log(itemCards);
  //console.log(resInfo?.cards[2].groupedCard?.cardGroupMap?.REGULAR);

  const categories = resInfo?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards.filter((filtCard)=> 
    filtCard.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  // console.log(categories[0].card.card);

  const bestSellerRibbon = (
    <div>
      <img src={starFillOrange} alt="Star Icon" />
      <span className="best-seller-text">{"Bestseller"}</span>
    </div>
  );

  const dispatch = useDispatch();
  dispatch(setRestaurantName(name));

  return (
    <div className="menu-body">
      <div className="restaurant-header-container">
        <div className="restaurant-header-info">
          <h2 className="res-header-name">{name}</h2>
          <p className="res-cuisine-info">{cuisines.join(" , ")}</p>
          <p className="res-area-info">
            {areaName} , {city}
          </p>
        </div>

        <div className="restaurant-ratings_wrapper">
          <span className="rating-text">{avgRatingString}</span>&nbsp;
          <img src={starFillSvg} alt="Star Icon" />
          <hr className="rating-separator" />
          <span className="total-rating-text">{totalRatingsString}</span>
        </div>
      </div>

      {categories.map((category, index)=>(
         <RestaurantCategory 
         key={category.card.card.title} 
         data={category.card.card}
         showItems = {index === showIndex ? true : false}
         setShowIndex = {()=>setShowIndex(index)}/>
      ))}


      {/* {itemCards && (
      <div className="restaurant-body-container">
      <div className="item-divider"></div>
        {itemCards.map((itemCard) => (
          <>
          <div key={itemCard?.card?.info?.id} className="res-item-card">
             
            <div className="item-info">
              <div className="item-ribbon">
              {itemCard?.card?.info?.itemAttribute?.vegClassifier =='NONVEG' ? <img src={nonveg}></img>: <img src={veg}></img>}
              {itemCard?.card?.info?.ribbon?.text == 'Bestseller' ? bestSellerRibbon : ""}
              </div>
              <h4 className="item-name">{itemCard?.card?.info?.name}</h4>
              <p className="item-price">&#8377; {(itemCard?.card?.info?.price || itemCard?.card?.info?.defaultPrice )/ 100}</p>
              <p className="item-desc">{itemCard?.card?.info?.description}</p>
            </div>

            <div className="image-container">
              {((itemCard?.card?.info?.imageId) ? 
            <img
              src={`${CDN_URL}${itemCard?.card?.info?.imageId}`}
              className="res-item-image"
              alt="res-item-image"
            />
            : <img
            src={`https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/495px-No-Image-Placeholder.svg.png?20200912122019`}
            className="res-item-image"
            alt="res-item-image"
          />)}
            <button className="itemAddButton">ADD</button>
            </div>
            
          </div>
          <div className="item-divider"></div>
          </>
        ))}
      </div>
      )} */}

    </div>
  );
};

export default RestaurantMenu;
