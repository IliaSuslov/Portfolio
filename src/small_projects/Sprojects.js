import React from 'react';
import './sprojects.css';
import Navbar from './header/header';
import FrameWorks from './card/data';
import ApiTest from './api_test/api_test';
import Calculator from './calculator/calculator';
import Camera from './camera/camera';

function App() {
  return (
    <div className="sprojects">
      <Navbar />
      <FrameWorks />
      <ApiTest />
      <Calculator />
      <Camera />
    </div>
  );
}

export default App;
