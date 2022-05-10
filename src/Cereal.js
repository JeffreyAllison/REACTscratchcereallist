import React from 'react';
import { Link } from 'react-router-dom';

export default function Cereal({ cereal }) {
  return (
    <div className="cereal-list-item">
      <Link to={`/cereals/${cereal.id}`}>
        <h3>Name: {cereal.name}</h3>
        <p>Cups of cereal per serving: {cereal.cups}</p>
        <p>Calories per serving: {cereal.calories}</p>
        <p>Click to see additional nutritional details</p>
      </Link>
    </div>
  );
}
