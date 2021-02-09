import React from 'react';
import { useLocation } from 'react-router-dom';
import Link from '../components/Link/Link';
import P from '../components/P/P';
import Heading from '../components/Heading/Heading';

const NotFound = () => {
  const { pathname } = useLocation();
  return (
    <div>
      <Heading>Oops</Heading>
      <P>
        It seems that the page at <strong>{pathname}</strong> does not exist
      </P>
      <P>
        Return to <Link to="/">Home</Link>
      </P>
    </div>
  );
};

export default NotFound;
