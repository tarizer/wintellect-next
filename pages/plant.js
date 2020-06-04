import React, { useEffect, useState } from 'react';
import Error from 'next/error';

import { useRouter } from 'next/router';

import { plants } from '../src/db.json';
import Layout from '../src/components/Layout';

const Plant = () => {
  // https://nextjs.org/docs/routing/dynamic-routes#caveats
  // Causes the page to flicker with a 404 when rendered from server
  // More info: https://github.com/vercel/next.js/discussions/11484
  // Either use useEffect to return null for the first render or use getServerSideProps and getInitialProps to avoid Automatic Static Optimization
  // https://nextjs.org/docs/advanced-features/automatic-static-optimization
  const router = useRouter();

  // Using useEffect as a temporary fix until gaining more knowledge
  const [hasMouted, setHasMounted] = useState(false);

  useEffect(() => {
    // Set has mounted to true for the first mount
    setHasMounted(true);
  }, []);

  if (!hasMouted) {
    return null;
  }
  // End of Checking on first render

  // const plantId = parseInt(router.query.plantId);
  const plantId = Number(router.query.plantId);
  console.log(plantId);

  if (!Number.isInteger(plantId) || plantId < 1) {
    // if (Number.isNaN(plantId) || plantId < 1) {
    return <Error statusCode={404} />;
  }

  const selectedPlant = plants.find(plant => plant.id === plantId);
  if (selectedPlant === undefined) {
    return <Error statusCode={404} />;
  }

  return (
    <Layout pageHeader={`Plant: ${selectedPlant.name}`}>
      <p>
        <img
          src={`/static/${encodeURIComponent(selectedPlant.fileName)}`}
          alt="selectedPlant.name"
        />
        {selectedPlant.description}
      </p>
      <style jsx>
        {`
          p {
            font-family: arial;
          }

          img {
            float: right;
            margin: 10px;
          }
        `}
      </style>
    </Layout>
  );
};

export default Plant;
