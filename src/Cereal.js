import React from 'react';
import { Link } from 'react-router-dom';

export default function Cereal({ cereal }) {
  return (
    <div className="cereal-list-item">
      <Link to={`/cereals/${cereal.id}`}>
        <h3>
          Cereal Brand Name: <i>{cereal.name}</i>
        </h3>
        <p>Cups of cereal per serving: {cereal.cups}</p>
        <p>Calories per serving: {cereal.calories}</p>
        <p>Click for additional nutrition details</p>
      </Link>
    </div>
  );
}
