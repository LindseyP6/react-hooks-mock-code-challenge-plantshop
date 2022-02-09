import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plantArray}) {
  console.log(plantArray)
  const PlantComponent = plantArray.map(plant => 
    <PlantCard
      key={plant.id}
      {...plant}/>
)

  return (
    <ul className="cards">{PlantComponent}</ul>
  );
}

export default PlantList;
