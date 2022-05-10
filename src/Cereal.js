import React from 'react';
import { Link } from 'react-router-dom';

export default function Cereal({ cereal }) {
  return (
    <div className="cereal-list-item">
      <Link to={`/cereals/${cereal.id}`}>
        <h3>Name: {cereal.name}</h3>
        <p>Cups of cereal per serving: {cereal.cups}</p>
        <p>Calories per serving: {cereal.calories}</p>
        <p>grams per serving...</p>
        <p>Sugar: {cereal.sugar}</p>
        <p>Protein: {cereal.protein}</p>
        <p>Fat: {cereal.fat}</p>
        <p>Sodium: {cereal.sodium}</p>
        <p>Fiber: {cereal.fiber}</p>
        <p>Carbohydrates: {cereal.carbo}</p>
        <p>Potassium: {cereal.potass}</p>
      </Link>
    </div>
  );
}
