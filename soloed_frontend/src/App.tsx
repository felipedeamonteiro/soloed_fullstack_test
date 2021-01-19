import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <h1>E-Commerce Soloed</h1>
      <GlobalStyle />
      <Footer />
    </>
  );
};

export default App;
