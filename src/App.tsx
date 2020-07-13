import React from 'react';
import './App.css';

interface AppProps {}

function App({}: AppProps) {
  const serverId = '65535';
  const id = '50062065332';
  const secret = 'ef4c069d2d';
  const flickrSrc = `https://live.staticflickr.com/${serverId}/${id}_${secret}_c.jpg`;
  return (
    <div className="App">
      <header className="App-header">
        <img src={flickrSrc} style={{ height: '80vmin' }} />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
