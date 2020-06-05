import React from 'react';
import Error from 'next/error';
import fetch from 'isomorphic-unfetch';

import Layout from '../../src/components/Layout';

const Plant = ({ plant }) => {
  console.log(plant);

  if (plant === null) {
    return <Error statusCode={404} />;
  }

  return (
    <Layout pageHeader={`Plant: ${plant.name}`}>
      <p>
        <img
          src={`/static/${encodeURIComponent(plant.fileName)}`}
          alt="plant.name"
        />
        {plant.description}
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

Plant.getInitialProps = async context => {
  let plant = null;

  const plantId = encodeURIComponent(context.query.plantId);

  console.log('Fetching plant from plantID', context.query.plantId);
  // If fetched from the server, it will show on the terminal (initial fetch)

  try {
    const res = await fetch(`http://localhost:3050/plants/${plantId}`);
    if (res.status < 400) {
      plant = await res.json();
    }
  } catch (err) {
    console.log('Host unreachable', err);
  }
  return { plant };
};

export default Plant;
