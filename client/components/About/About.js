import React, { PropTypes } from 'react';
import 'normalize.css';

import s from './About.styl';

export const About = props => (
  <div className={s.page}>
    <div className={s.siteTitle}>
      <h1>About</h1>
    </div>
    <p>Welcome, to about us.</p>
  </div>
);
