import React from 'react';
import { Link } from 'react-router';

const NoMatch = (props) => (
  <section className='container'>
    <p>Oops! Nothing found here.</p>
    <p><Link to={'/'}><strong>Home</strong></Link></p>
  </section>
);

export default NoMatch;
