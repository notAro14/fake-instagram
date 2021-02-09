import React from 'react';
import P from '../components/P/P';
import Heading from '../components/Heading/Heading';

const HomePage = () => {
  const [data, setData] = React.useState();
  return (
    <div>
      <Heading>Webpack config for React</Heading>
      <P>Boostrap your SPA React project</P>
      <button
        type="button"
        onClick={async () => {
          const response = await fetch('/api/hello');
          const incomingData = await response.json();
          console.log(incomingData);
          setData(incomingData);
        }}
      >
        API
      </button>
      <div>{data ? data.message : null}</div>
    </div>
  );
};

export default HomePage;
