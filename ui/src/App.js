import React from 'react';

// styles
import './App.css';

// components
import Routing from './Routing';
import PageWrapper from './components/PageWrapper';

function App() {
  return (
    <div className="App">
      <PageWrapper>
        <Routing />
      </PageWrapper>
    </div>
  );
}

export default App;
