import Link from 'next/link';

import { plants } from '../db.json';

const PlantLink = ({ plantId }) => {
  // This component is not realy need, it is just overcompication
  const plant = plants.find(plantObject => plantObject.id === plantId);
  return (
    <Link href="plants/[plantId]" as={`plants/${encodeURIComponent(plant.id)}`}>
      <a>{plant.name}</a>
    </Link>
  );
};

export default PlantLink;
