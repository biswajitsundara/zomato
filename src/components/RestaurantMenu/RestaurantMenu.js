import { useEffect, useState } from "react";
import { MENU_API } from "../../utils/constants";
import Shimmer from "../card/Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const {resId} = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(`${MENU_API}${resId}`);
    const json = await data.json();
    console.log(json.data.cards[0].card.card.info.name);
    setResInfo(json.data);
  };

  if(resInfo === null) return <Shimmer />;

  const {name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;
  const {itemCards} = resInfo?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;
  //console.log(resInfo?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[0]?.card?.info.name);
  //console.log(resInfo?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards);
  //console.log(itemCards);

  return  (
    <div className="menu">
      <h1>{name}</h1>
      <p>{cuisines.join(' ,')} - {costForTwoMessage}</p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((itemCard)=>(
            <li key={itemCard?.card?.info?.id}>
                {itemCard?.card?.info?.name} - {"Rs "}
                {itemCard?.card?.info?.price}
            </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
