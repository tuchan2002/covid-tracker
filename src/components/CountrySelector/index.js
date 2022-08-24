import React from "react";

const CountrySelector = ({ value, handleOnChange, countries }) => {
  return (
    <div>
      <h3>Country:</h3>
      <select
        className="bg-transparent border-b-2 outline-none"
        name="country-selector"
        value={value}
        onChange={handleOnChange}
      >
        {countries.map((country, index) => (
          <option key={index} value={country.ISO2.toLowerCase()}>
            {country.Country}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CountrySelector;
