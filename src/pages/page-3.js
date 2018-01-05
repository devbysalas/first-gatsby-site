import React from 'react';
import Link from 'gatsby-link';

const ThirdPage = () => (
  <div>
    <h1>Third Page</h1>
    <p>This is my first Gatsby site</p>
    <Link to="/page-2">Back to Page 2</Link>
    <br />
    <Link to="/">Go back to the homepage</Link>
  </div>
);

export default ThirdPage;
