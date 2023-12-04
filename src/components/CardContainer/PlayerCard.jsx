import React from "react";
import { useState } from "react";
import Ball from "./ball.png";

export const PlayerCard = ({ data }) => {
  const { name, img, statistics } = data;

  const [showSta, setshowSta] = useState(false);
  const handleClick = () => {
    setshowSta(!showSta);
  };

  const handleMouseLeave = () => {
    setshowSta(false);
  };

  return (
    <div
      className="playercard"
      onClick={handleClick}
      onMouseLeave={handleMouseLeave}
    >
      <div className="playerimg">
        <img src={img} alt="" onClick={handleClick} className="cardimg" />
        <div className="playername">
          <p>{name}</p>
        </div>
        {
          <div
            className="static"
            style={{ display: `${showSta ? "flex" : "none"}` }}
          >
            <ul>
              {statistics.map((item, index) => (
                <React.Fragment key={index}>
                  <img src={Ball} alt="" className="ball" />
                  <li>{item}</li>
                </React.Fragment>
              ))}
            </ul>
          </div>
        }
      </div>
    </div>
  );
};
