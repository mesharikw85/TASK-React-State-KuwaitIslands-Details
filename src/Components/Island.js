import React from "react";

export default function Island({ island, setIsland }) {
  const handleClick = (island) => {
    setIsland(island.name);
  };
  return (
    <div className="Island" onClick={handleClick}>
      <h3>{island.name}</h3>
      {/* YOU HAVE TO CHANGE THE VISITORS COUNT */}
      <p>Visitors 0</p>
      <img src={island.img} alt={island.name} />
    </div>
  );
}
