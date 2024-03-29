import React from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

import Layout from '../src/components/Layout';
import PlantLink from '../src/components/PlantLink';

// import { plants } from '../src/db.json';

// import '../assets/scss/index.scss'; // imported in _app.js

const Home = ({ plants }) => {
  const pageHeader = 'A Next.js app';

  return (
    <>
      <Layout pageHeader={pageHeader}>
        <p>Hello there!</p>
        <p>
          <img src="/static/bumblebee.jpg" alt="bumblebee" width="300px" />
        </p>
        <div>Plant Count: {plants.length}</div>
        <ul>
          {plants.map(plant => (
            // <li key={plant.id}>{plant.name}</li>
            <li key={plant.id}>
              <PlantLink plantId={plant.id} />
            </li>
          ))}
        </ul>
        <p>
          <Link href="/about">
            <a>Learn more about us</a>
          </Link>
        </p>

        {/* Styled Jsx */}
        <style jsx>{`
          p {
            font-family: arial;
            color: red;
            padding: 0.5rem;
          }
        `}</style>
      </Layout>
    </>
  );
};

Home.getInitialProps = async () => {
  let plants = [];

  console.log('Fetching plants from home');
  // If fetched from the server, it will show on the terminal (initial fetch)

  try {
    const res = await fetch('http://localhost:3050/plants');
    if (res.status < 400) {
      plants = await res.json();
    }
  } catch (err) {
    console.log('Host unreachable', err);
  }
  return { plants };
};

export default Home;
