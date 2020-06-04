import Link from 'next/link';

import { plants } from '../db.json';

const PlantLink = ({ plantId }) => {
  // This component is not realy need, it is just overcompication
  const selectedPlant = plants.find(plant => plant.id === plantId);
  return (
    <Link href={`plant?plantId=${encodeURIComponent(selectedPlant.id)}`}>
      <a>{selectedPlant.name}</a>
    </Link>
  );
};

export default PlantLink;
