import React from 'react';
import Head from 'next/head';

import Navigation from './Navigation';

// eslint-disable-next-line react/prop-types
const Layout = ({ pageHeader, children }) => (
  <>
    <div className="Layout">
      <Head>
        <title>Nature App</title>
        <link rel="stylesheet" href="/static/reset.css" />
      </Head>

      <header>
        <h1>A nature Web Site</h1>
        <h2>{pageHeader}</h2>
      </header>

      <Navigation />

      <div id="content">{children}</div>

      <footer>
        <small>&copy; {new Date().getFullYear()} - A beautiful site</small>
      </footer>
    </div>
  </>
);

export default Layout;
