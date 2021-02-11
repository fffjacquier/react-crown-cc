import React, { Profiler } from 'react';
import styled from "styled-components";
import Directory from '../../components/directory/Directory';

const HomepageStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
`;

const Homepage = () => {
  return (
    <HomepageStyles>
      <Profiler id="Directory" onRender={(id, phase, actualDuration) => {
        console.log({
          id,
          phase,
          actualDuration
        })
      }}>
        <Directory />
      </Profiler>
    </HomepageStyles>
  );
};

export default Homepage;
