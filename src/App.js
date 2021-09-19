import React, { useState } from "react";
import "./App.css";
import CountryDetails from "./Components/CountryDetails";
import { gql, useQuery } from "@apollo/client";

const gq_country = gql`
  query Country($code: ID!) {
    country(code: $code) {
      name
      native
      capital
      emoji
      currency
      languages {
        code
        name
      }
    }
  }
`;

function App() {
  const [codeSearch, setCodeSearch] = useState("");
  const [countryData, setCountryData] = useState("init");
  const gqlData = useQuery(gq_country, {
    variables: {
      code: codeSearch,
    },
  });

  function handleChange(e) {
    setCodeSearch(e.target.value.toUpperCase());
  }

  function handleClick() {
    setCountryData(gqlData.data.country);
  }
  return (
    <div className="App">
      <input type="text" onChange={handleChange} />
      <button onClick={handleClick}> Search the Country</button>
      <CountryDetails country={countryData} />
    </div>
  );
}

export default App;
