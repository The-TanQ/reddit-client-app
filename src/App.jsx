import React from 'react';
import './App.css';
import Header from './Features/Header/Header';
import Home from './Features/Home/Home';
import Subreddits from './Features/Subreddits/Subreddits';

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
      </main>
      <aside>
        <Subreddits />
      </aside>
    </>
  );
}

export default App;