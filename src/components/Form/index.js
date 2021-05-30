import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./style.scss";

const Form = ({
  inputValue,
  onSubmitForm,
  onChangeInput,
  inputRegion,
  onChangeRegion,
}) => {
  const handleOnSubmit = (event) => {
    event.preventDefault();
    onSubmitForm();
  };
  const handleOnRegion = (evt) => {
    // console.log(evt.target.value);
    onChangeRegion(evt.target.value);
  };
  return (
    <div className="form">
      <form className="form__form" onSubmit={handleOnSubmit}>
        <SearchIcon color="disabled" />
        <input
          type="text"
          placeholder="Search for a country (french)"
          className="form__input"
          value={inputValue}
          onChange={(evt) => {
            onChangeInput(evt.target.value);
          }}
        />
        <select
          name="region"
          className="form__select"
          onChange={handleOnRegion}
          value={inputRegion}
        >
          <option value="">-- Filter by Region --</option>
          <option value="africa">Africa</option>
          <option value="americas">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </form>
    </div>
  );
};

export default Form;
