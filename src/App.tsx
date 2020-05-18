import React, { useRef, useEffect } from 'react';
import './App.css';
import { terrainGenerator } from './sketch';
import p5 from 'p5';

function App() {
  let app = useRef<HTMLDivElement>(null);
  // console.log(app);

  useEffect(() => {
    let newp5 = new p5(terrainGenerator, app.current);

    return () => {
      newp5.remove();
    };
  }, []);

  return (
    <div>
      <h1>HELLLLOOOOO</h1>
      <div className="App" ref={app}></div>;
    </div>
  );
}

export default App;
