import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getACereal } from './services/fetch-utils';

export default function CerealDetail() {
  const [cereal, setCereal] = useState({});

  const params = useParams();

  useEffect(() => {
    async function load() {
      const cerealData = await getACereal(params.id);
      setCereal(cerealData);
    }
    load();
  }, [params.id]);

  function handleCerealClick() {}

  return (
    <>
      <div>
        <Link to="/" className="home-link">
          Home
        </Link>
        <div className="cereal-detail" onClick={handleCerealClick}>
          <div className="cereal-data">
            <h3>
              Cereal Brand Name: <i>{cereal.name}</i>
            </h3>
            <p>Cups per serving: {cereal.cups}</p>
            <p>Calories per serving: {cereal.calories}</p>
            <p>Grams of Sugar per serving: {cereal.sugars}</p>
            <p>Grams of Protein per serving: {cereal.protein}</p>
            <p>Grams of Fat per serving: {cereal.fat}</p>
            <p>Grams of Sodium per serving: {cereal.sodium}</p>
            <p>Grams of Fiber per serving: {cereal.fiber}</p>
            <p>Grams of Carbohydrates per serving: {cereal.carbo}</p>
            <p>Grams of Potassium per serving: {cereal.potass}</p>
            <p>Total Vitamins: {cereal.vitamins}</p>
          </div>
        </div>
      </div>
    </>
  );
}
