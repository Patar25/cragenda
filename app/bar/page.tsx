import DrinksList from "@/components/DrinksList";
import React from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=z";

const Bar = async () => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed api request");
  }

  const data = await response.json();
  console.log(data);

  return <DrinksList drinks={data.drinks} />;
};

export default Bar;
