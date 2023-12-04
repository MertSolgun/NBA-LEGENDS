import React from "react";
import { PlayerCard } from "./PlayerCard";

export const CardContainer = ({ filteredData }) => {
  return (
    <div className="playermain">
      {filteredData.map((item, index) => (
        <PlayerCard key={index} data={item}></PlayerCard>
      ))}
    </div>
  );
};
