import downarrow from "../../../public/assets/downarrow.svg";
import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  // const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div className="restaurant-accordion">
      <div className="restaurant-accordion-header" onClick={handleClick}>
        <span className="category-title">
          {data.title} {`(${data.itemCards.length})`}
        </span>
        <img src={downarrow} className="down-arrow-icon" />
      </div>

      {data?.itemCards &&
        data.itemCards.map((itemCardData, index) => {
          const isLastItem = index + 1 < data.itemCards.length ? true : false;
          return showItems ? (
            <ItemList
              key={itemCardData?.card?.info?.id}
              itemCard={itemCardData}
              isLastItem={isLastItem}
            />
          ) : null;
        })}
    </div>
  );
};

export default RestaurantCategory;
