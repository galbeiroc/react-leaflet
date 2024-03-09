import { FaUserLarge } from "react-icons/fa6";

import rocket from "../../assets/rocket.png";

import "./styles.css";
// eslint-disable-next-line react/prop-types
export const Layout = ({ children }) => {
  return (
    <div className="container">
      <div className="header">
        <div className="content-img">
          <img src={rocket} alt="rocket launch" />
          <span>LaunchTime</span>
        </div>
        <div className="content-user">
          <div className="user-icon">
            <FaUserLarge size={20} />
          </div>
          <span>galbeiroc</span>
        </div>
      </div>
      {children}
    </div>
  );
};
