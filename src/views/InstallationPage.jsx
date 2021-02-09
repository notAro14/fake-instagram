import React from 'react';
import { ExternalLink } from '../components/Link/Link';
import P from '../components/P/P';
import Heading from '../components/Heading/Heading';

const InstallationPage = () => (
  <div>
    <Heading>Installation</Heading>
    <P>
      Clone this{' '}
      <ExternalLink href="https://github.com/notAro14/webpack-react-boilerplate">
        repo
      </ExternalLink>
    </P>
  </div>
);

export default InstallationPage;
