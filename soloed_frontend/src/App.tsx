import React from 'react';
import { Router } from 'react-router-dom';

import styled from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import GlobalStyle from './styles/global';

import history from './services/history';
import Routes from './routes';

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

const App: React.FC = () => {
  return (
    <>
      <Router history={history}>
        <Container>
          <Header />
          <Routes />
          <Footer />
        </Container>

        <GlobalStyle />
      </Router>
    </>
  );
};

export default App;
