import React from "react";
import "../styles/Sidebar.scss";

type Props = {
  imageOne: string;
  imageTwo: string;
  imageThree: string;
};
const Sidebar: React.FC<Props> = ({ imageOne, imageTwo, imageThree }) => (
  <div className="sidebar">
    <div className="sidebar__container">
      <img className="sidebar__icons" src={imageOne} alt="" />
      <img className="sidebar__icons" src={imageTwo} alt="" />
      <img className="sidebar__icons" src={imageThree} alt="" />
    </div>
  </div>
);

export default Sidebar;
