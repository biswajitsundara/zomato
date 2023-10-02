import {CDN_URL} from '../../utils/constants';
import starFillSvg from '../../utils/star-fill.svg';

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, avgRatingString, cuisines, costForTwo } =
    resData?.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={`${CDN_URL}${cloudinaryImageId}`}
      />

      <div className="card-title">
        <span className="res-name">{name}</span>
        <div className="rating-chip">
          <div>
            {avgRatingString}
            &nbsp;
            <img src={starFillSvg} alt="Star Icon"/>
          </div>
        </div>
      </div>

      <div className="card-body">
        <p className="secondary-text">{cuisines.join(", ")}</p>
        <p>{costForTwo}</p>
      </div>

      <div className="card-footer">
        <p>{resData.info.sla.slaString}</p>
      </div>
    </div>
  );
}


export const withLabel = (RestaurantCard) =>{

  return (props) =>{
   return (
     <div className="card-with-label">
       <label className='card-label'>OPEN</label>
       <RestaurantCard {...props}/>
     </div>
   )
  }
}

export default RestaurantCard;
