import React from 'react';
import { CreateHeader } from './header';
import { Repos } from './body';
import './App.css';
import './body.css';

function App() {
    return (
        <div className="App">
          <CreateHeader />
          <Repos />
        </div>
    );
}

export default App;
