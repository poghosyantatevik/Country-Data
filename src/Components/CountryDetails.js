import React from "react";

function CountryDetails(props) {
  return (
    <div>
      {!props.country ? (
        <div style={{ color: "red" }}> Please enter a valid country code </div>
      ) : props.country === "init" ? (
        <div> </div>
      ) : (
        <div>
          <div> {props.country.name} </div>
          <div> {props.country.native}</div>
          <div> {props.country.capital}</div>
          <div> {props.country.emoji}</div>
          <div> {props.country.currency}</div>
          <div>
            {props.country.languages.map((language, i) => {
              return (
                <div key={i}>
                  <div>code: {language.code}</div>
                  <div>language: {language.name}</div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default CountryDetails;
