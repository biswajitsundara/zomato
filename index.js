import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
          alt=""
        />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = () => {
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src="https://b.zmtcdn.com/data/pictures/5/20279385/8e81b350b339e67c0aadf93277c4eb83_o2_featured_v2.jpg?output-format=webp"
      />

      <div className="card-title">
        <span className="res-name">Meghna Foods</span>
        <div className="rating-chip">
          <div>
            3.3
             &nbsp;<svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#FFFFFF"
              width="0.8rem"
              height="0.8rem"
              viewBox="0 0 20 20"
              aria-labelledby="icon-svg-title- icon-svg-desc-"
              role="img"
              class="sc-rbbb40-0 fauQLv"
            >
              <title>star-fill</title>
              <path d="M6.76 6.8l-6.38 0.96c-0.22 0.040-0.38 0.22-0.38 0.44 0 0.12 0.040 0.24 0.12 0.32v0l4.64 4.76-1.1 6.66c0 0.020 0 0.040 0 0.080 0 0.24 0.2 0.44 0.44 0.44 0.1 0 0.16-0.020 0.24-0.060v0l5.7-3.12 5.68 3.12c0.060 0.040 0.14 0.060 0.22 0.060 0.24 0 0.44-0.2 0.44-0.44 0-0.040 0-0.060 0-0.080v0l-1.1-6.66 4.64-4.76c0.080-0.080 0.12-0.2 0.12-0.32 0-0.22-0.16-0.4-0.36-0.44h-0.020l-6.38-0.96-2.96-6.18c-0.060-0.12-0.18-0.2-0.32-0.2s-0.26 0.080-0.32 0.2v0z"></path>
            </svg>
          </div>
        </div>
      </div>

      <div className="card-body">
       <p className="secondary-text">Biriyani, North Indian</p>
       <p>150 for one</p>
      </div>
      
      <div className="card-footer">
            <p>38 mins</p>
      </div>
      
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">search</div>
      <div className="res-container">
        <RestaurantCard />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
