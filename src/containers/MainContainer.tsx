import React from "react";
import "../styles/MainContainer.scss";
import Card from "../components/Card";

const MainContainer: React.FC = () => (
  <div className="maincontainer">
    <div className="maincontainer__container">
      <h1 className="maincontainer__title">Courses</h1>
      <div className="maincontainer__options">
        <h2 className="maincontainer__option">Popular</h2>
        <h2 className="maincontainer__option">Favorite</h2>
        <h2 className="maincontainer__option">New</h2>
      </div>
    </div>
    <div>
      <Card
        title="Illustration"
        lessons={24}
        time={134}
        image="https://daily.jstor.org/wp-content/uploads/2019/09/how_we_got_the_bananas_we_know_today_1050x700.jpeg"
      />
      <Card
        title="Graphic design"
        lessons={30}
        time={134}
        image="https://scontent-lga3-2.xx.fbcdn.net/v/t1.0-9/138204798_208498647676139_2743991786120585331_n.jpg?_nc_cat=111&ccb=2&_nc_sid=730e14&_nc_ohc=pqaWttufAtwAX8CKRTG&_nc_ht=scontent-lga3-2.xx&oh=0491c9e3a84e9e35feec19d581aafef7&oe=60274CC7"
      />
    </div>
  </div>
);

export default MainContainer;
