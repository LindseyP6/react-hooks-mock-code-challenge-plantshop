import React, {useState} from "react";

function NewPlantForm({addPlantToState}) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  function handleNewPlantSubmit(e){
    e.preventDefault();
    const newPlantObj = {
      name: name,
      image: image,
      price: price
    }
    addPlantToDatabase(newPlantObj)
  }

  function addPlantToDatabase(newPlantObj) {
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
       "Content-Type": "application/json"
      },
     body: JSON.stringify(newPlantObj)
    })
    .then(r=>r.json())
    .then(plantObj => addPlantToState(plantObj))
    setName("")
    setImage("")
    setPrice("")
}

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form 
        onSubmit={handleNewPlantSubmit}>
        <input type="text" 
          name="name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder="Plant name" 
        />
        <input 
          type="text" 
          name="image" 
          value={image} 
          onChange={(e) => setImage(e.target.value)} 
          placeholder="Image URL" 
          />
        <input 
          type="number" 
          name="price" 
          value={price} 
          onChange={(e) => setPrice(e.target.value)} 
          step="0.01" 
          placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
