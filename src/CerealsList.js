import Cereal from './Cereal';

export default function CerealsList({ cereals }) {
  return (
    <div className="cereals">
      {cereals.map((cereal) => (
        <Cereal key={cereal.id} cereal={cereal} />
      ))}
    </div>
  );
}
