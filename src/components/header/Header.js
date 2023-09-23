import { LOGO_URL } from "../../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnNameLogin, setBtnNameLogin] = useState("Login");

  useEffect(()=>{
    console.log('Use effect called');
  },[btnNameLogin])

  console.log("Header is rendered");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="header-logo" />
      </div>

      <div style={{ backgroundColor: "red" }}></div>

      <div className="nav-items">
        <ul>
          <li className="nav-item">
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/dotty/80/lifebuoy.png"
              alt="lifebuoy"
            />
            <Link to="/help" className="link-route"><span>Help</span></Link>
          </li>
          <li className="nav-item">
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/pastel-glyph/64/person-male--v2.png"
              alt="person-male--v2"
            />
            <span
              onClick={() =>
                btnNameLogin === "Login"
                  ? setBtnNameLogin("Logout")
                  : setBtnNameLogin("Login")
              }
            >
              {btnNameLogin}
            </span>
          </li>
          <li className="nav-item">
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/ios/50/shopping-cart--v1.png"
              alt="shopping-cart--v1"
            />
            <span>Cart</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
