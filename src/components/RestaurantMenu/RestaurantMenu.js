import { useEffect, useState } from "react";
import { MENU_API } from "../../utils/constants";
import Shimmer from "../card/Shimmer";
import { useParams } from "react-router-dom";
import starFillSvg from "../../utils/star-fill-green.svg";
import { CDN_URL } from "../../utils/constants";
import nonveg from "../../utils/nonveg.svg";
import veg from "../../utils/veg.svg";
import starFillOrange from '../../utils/star-fill-orange.svg';

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(`${MENU_API}${resId}`);
    const json = await data.json();
    //console.log(json.data.cards[0].card.card.info.name);
    setResInfo(json.data);
  }

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
  console.log(resInfo?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card);

  const bestSellerRibbon = (
    <div>
      <img src={starFillOrange} alt="Star Icon" />
      <span className="best-seller-text">{"Bestseller"}</span>
    </div>
  );



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

      {itemCards && (
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
      )}

    </div>
  );
};

export default RestaurantMenu;
