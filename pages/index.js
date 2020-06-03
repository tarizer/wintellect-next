import React from 'react';
import Link from 'next/link';

import Layout from '../src/components/Layout';

// import '../assets/scss/index.scss'; // imported in _app.js

const Home = () => {
  const pageHeader = 'A Next.js app';

  return (
    <>
      <Layout pageHeader={pageHeader}>
        <p>Hello there!</p>
        <p>
          <img src="/static/bumblebee.jpg" alt="bumblebee" width="300px" />
        </p>
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

export default Home;
