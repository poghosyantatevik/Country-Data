import React from "react";
import "./CountryDetails.css";

function CountryDetails(props) {
  return (
    <div className="card">
      {!props.country ? (
        <div style={{ color: "red" }}> Please enter a valid country code </div>
      ) : props.country === "init" ? (
        <div> </div>
      ) : (
        <div className=" design">
          <div> Country: {props.country.name} </div>
          <div>Native: {props.country.native}</div>
          <div> Capital: {props.country.capital}</div>
          <div>Emoji: {props.country.emoji}</div>
          <div> Currency: {props.country.currency}</div>
          <div>
            {props.country.languages.map((language, i) => {
              return (
                <div key={i}>
                  <div>Code: {language.code}</div>
                  <div>Language: {language.name}</div>
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
