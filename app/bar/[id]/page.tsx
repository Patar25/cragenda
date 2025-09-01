import Image from "next/image";
import Link from "next/link";
import React from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const getDrink = async (id: string) => {
  const response = await fetch(`${url}${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch request");
  }

  return response.json();
};

interface DrinkPageProps {
  params: { id: string };
}

const DrinkPage = async ({ params }: DrinkPageProps) => {
  const data = await getDrink(params.id);
  const name = data?.drinks[0]?.strDrink;
  const thumb = data?.drinks[0]?.strDrinkThumb;
  const instructions = data?.drinks[0]?.strInstructions;

  return (
    <div>
      <Link href="/bar" className="btn btn-primary mt-8 mb-10">
        Back
      </Link>
      <Image
        src={thumb}
        alt="Drink at the bar"
        width={600}
        height={400}
        className="w-48 h-48 rounded shadow-lg mb-4"
        unoptimized
      />
      <h1 className="text-4xl mb-8">{name}</h1>
      <p>{instructions}</p>
    </div>
  );
};

export default DrinkPage;
