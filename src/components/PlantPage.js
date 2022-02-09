import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plantArray, setPlantArray] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect( () => {
    fetch('http://localhost:6001/plants')
    .then(r=>r.json())
    .then(setPlantArray)
  }, [] );
  
  function addPlantToState(plantObj){
    setPlantArray(plantArray => [...plantArray, plantObj])
  }

  const filterPlant = plantArray.filter(plant => plant.name.toLowerCase().includes(searchTerm.toLowerCase()))

  function handleSearch(e){
    setSearchTerm(e.target.value)
  }

  return (
    <main>
      <NewPlantForm addPlantToState={addPlantToState}/>
      <Search handleSearch={handleSearch} searchTerm={searchTerm}/>
      <PlantList plantArray={filterPlant}/>
    </main>
  );
}

export default PlantPage;
