import React from "react";

import "./style.scss";

const Titre = ({ accueil }) => {
  const All = () => {
    accueil();
  };
  return (
    <div className="titre">
      <h1 className="titre__h1" onClick={All}>
        Where in the world ?
      </h1>
      <button type="button" className="titre__btn">
        Dark Mode
      </button>
    </div>
  );
};

export default Titre;
// \u263e lune
