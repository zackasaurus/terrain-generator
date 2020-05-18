import React, { useRef, useEffect } from 'react';
import './App.css';
import { terrainGenerator } from './sketch';
import p5 from 'p5';

function App() {
  const app = useRef();

  useEffect(() => {
    let newp5 = new p5(terrainGenerator, app.current);

    return () => {
      newp5.remove();
    };
  }, []);

  return <div ref={app} className="App"></div>;
}

export default App;
