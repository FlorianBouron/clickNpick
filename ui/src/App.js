import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// styles
import './App.scss';

// components
import Routing from './Routing';
import PageWrapper from './components/PageWrapper';
import Footer from './components/Footer';
import Header from './components/Header';
import PageContent from './components/PageContent';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <PageWrapper>
          <Header />
          <PageContent>
            <Routing />
          </PageContent>
          <Footer />
        </PageWrapper>
      </BrowserRouter>
    </div>
  );
}

export default App;
