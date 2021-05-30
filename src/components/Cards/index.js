import React from "react";
import Card from "./Card";
import "./style.scss";

const Cards = ({ pays, country }) => {
  //console.log("pays =>", pays);
  const carte = pays.map((element) => {
    return <Card key={element.name} country={country} {...element} />;
  });
  return <div className="Cards">{carte}</div>;
};

export default Cards;
