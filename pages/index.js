import React from 'react';
import Link from 'next/link';
import Navigation from '../src/components/Navigation';

const Home = () => (
  <>
    <h2>Welcome to Next.js</h2>
    <Navigation />
    <p>Hello there!</p>
    <p>
      <img src="/static/bumblebee.jpg" alt="bumblebee" width="300px" />
    </p>
    <p>
      <Link href="/about">
        <a>Learn more about us</a>
      </Link>
    </p>
  </>
);

export default Home;
