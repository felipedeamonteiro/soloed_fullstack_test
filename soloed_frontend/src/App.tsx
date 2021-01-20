import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import styled from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import GlobalStyle from './styles/global';

import history from './services/history';
import Routes from './routes';
import store from './store';

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Container>
          <Header />
          <Routes />
          <Footer />
        </Container>

        <GlobalStyle />
      </Router>
    </Provider>
  );
};

export default App;
