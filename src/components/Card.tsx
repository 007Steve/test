import React from "react";
import "../styles/Card.scss";
type Props = {
  title: string;
  lessons: number;
  time: number;
  image: string;
};
const Card: React.FC<Props> = ({ title, lessons, time, image }) => (
  <div
    className="card"
    style={{
      backgroundImage: `url(${image})`,
    }}
  >
    <div className="card__firstRow">
      <div className="card__info">
        <h4 className="card__title">{title}</h4>
        <p className="card__lessons">{lessons} lessons</p>
      </div>
      <p className="card__time">{time} min</p>
    </div>
    <input className="card__button" type="image" src="/Group 1.png" alt="button" />
  </div>
);

export default Card;
