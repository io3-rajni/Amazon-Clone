import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Button } from "@mui/material";

const CountryButton = () => {
  const [apiData, setApiData] = useState([]);
  console.log("api", apiData);
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        setApiData(response?.data?.flag?.svg);
        console.log("res", response);
      })
      .catch((error) => {
        console.log("error", error);
      });
  });
  const handleApi = () => {
    setApiData(true);
  };
  console.log(apiData);
  return (
    <>
      <Button onClick={handleApi}>xux</Button>
    </>
  );
};

export default CountryButton;
