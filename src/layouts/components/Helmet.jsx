import React from 'react';
import Helmet from 'react-helmet';

// Favicons
import appleIcon from '../../img/apple-touch-icon.png';
import favicon32 from '../../img/favicon-32x32.png';
import favicon16 from '../../img/favicon-16x16.png';

export default () => (
  <Helmet
    title="New Amsterdam Bakery"
    meta={[
      {
        property: 'og:title',
        content: 'New Amsterdam Bakery'
      },
      {
        name: 'msapplication-TileColor',
        content: '#da532c'
      },
      {
        name: 'theme-color',
        content: '#ffffff'
      },
      {
        name: 'description',
        content:
          'We are a local bakery making handmade specialty bread, cakes, and cookies for over 25 years. Our baked good has no chemical or perspectives and baked fresh every day. We also carry many vegetarian selections (egg-free), and healthy bread (sugar free, salt-free).'
      }
    ]}
    link={[
      {
        href: `${appleIcon}`,
        rel: 'icon',
        size: '180x180'
      },
      {
        href: `${favicon32}`,
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32'
      },
      {
        href: `${favicon16}`,
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16'
      }
    ]}
  >
    <html lang="en" />
  </Helmet>
);
