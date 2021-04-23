import React from 'react';
import styled from 'styled-components';

import Main from './page/Main'; 

const Container = styled.div`
  width: 100%;
`

const App = () => {
  return (
    <Container>
      <Main />
    </Container>
  );
}

export default App;
