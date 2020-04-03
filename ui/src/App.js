import React from 'react';

// styles
import './App.css';

// components
import Routing from './Routing';
import PageWrapper from './components/PageWrapper';
import Footer from './components/Footer';
import Header from './components/Header';
import PageContent from './components/PageContent';

function App() {
  return (
    <div className="App">
      <PageWrapper>
        <Header />
        <PageContent>
          <Routing />
        </PageContent>
        <Footer />
      </PageWrapper>
    </div>
  );
}

export default App;
