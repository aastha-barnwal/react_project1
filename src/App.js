// App.js

import React from 'react';
import ItemList from './components/ItemList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Infinite Scrolling with React</h1>
      </header>
      <main>
        <ItemList />
      </main>
    </div>
  );
}

export default App;
