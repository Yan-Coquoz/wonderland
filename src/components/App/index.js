// == Import npm
import React, { useEffect, useState } from "react";

import Titre from "src/components/Titre";
import Form from "src/components/Form";
import Cards from "src/components/Cards";
import api from "src/API";
// == Import

import "./styles.scss";

// https://restcountries.eu/rest/v2/all

// == Composant
const App = () => {
  // tableau avec les détails des pays apres l'apelle API
  const [array, setArray] = useState([]);
  // valeur de l'input
  const [input, setInput] = useState("");
  // valeur du champ de selection
  const [region, setRegion] = useState("");
  // valeur par defaut de l'api
  const [defaultURI, setDefaultURI] = useState("all");

  const inFromSubmit = () => {
    // si region est autre que vide,alors je change la route defaut et j'ajoute la region
    if (region !== "") {
      // console.log("if region", region);
      setDefaultURI(`region/${region}`);
      // console.log("dans le if defaultURI ", defaultURI);
    } else if (input !== "") {
      setDefaultURI(`name/${input}`);
    } else {
      reset();
    }
    setInput("");
  };
  // appel sur l'API
  useEffect(() => {
    const loadData = () => {
      // console.log("input avant le try", input);
      try {
        // console.log("dans le try defaultURI", defaultURI);
        api
          .get(`/${defaultURI}`)
          .then((response) => setArray(response.data))
          .catch((error) => console.log(error));
      } catch (error) {
        console.log("error", error);
      }
    };

    loadData();
  }, [defaultURI]); // à chaque changement je refraichi

  const reset = () => {
    setDefaultURI("all");
    setRegion("");
  };
  // au clic sur un pays
  const countryDetails = (pays) => {
    console.log("Je veux recuperer le pays", pays);
    setDefaultURI(`name/${pays}`);
  };

  return (
    <div className="container">
      <Titre accueil={reset} />
      <Form
        onSubmitForm={inFromSubmit}
        inputValue={input}
        onChangeInput={setInput}
        inputRegion={region}
        onChangeRegion={setRegion}
      ></Form>
      <Cards pays={array} country={countryDetails} />
    </div>
  );
};

// == Export
export default App;
