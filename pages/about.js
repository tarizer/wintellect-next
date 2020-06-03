import React from 'react';
import Link from 'next/link';
import Navigation from '../src/components/Navigation';

const About = () => (
  <div>
    <h2>About</h2>
    <Navigation />
    <p>We are such a great company</p>
    <p>
      <img src="/static/flowers.jpg" alt="flowers" />
    </p>
    <p>
      <Link href="/">
        <a>Home</a>
      </Link>
    </p>
  </div>
);

export default About;
