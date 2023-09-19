import { LOGO_URL } from "../../utils/constants";
import help from '../../utils/help.svg';

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={LOGO_URL}
          alt="header-logo"
        />
      </div>

      <div className="nav-items">
        <ul>
          <li>
            {/* <img src={help} alt="" /> */}
            Help</li>
          <li>Signin</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;