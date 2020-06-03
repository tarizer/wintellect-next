import React from 'react';
import Link from 'next/link';

import Layout from '../src/components/Layout';

const About = () => {
  const pageHeader = 'About us';

  return (
    <>
      <Layout pageHeader={pageHeader}>
        <p>We are such a great company</p>
        <p>
          <img src="/static/grass.jpg" alt="grass" />
        </p>
        <p>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </p>
      </Layout>
    </>
  );
};

export default About;
