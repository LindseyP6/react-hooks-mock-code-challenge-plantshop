import React, {useState} from "react";

function PlantCard({name, image, price}) {
  const [isStocked, setIsStocked] = useState(true)

  function handleStocked(){
    setIsStocked(isStocked => !isStocked)
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isStocked ? (
        <button 
          onClick={handleStocked}
          className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
