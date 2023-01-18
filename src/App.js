import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Body } from './components/Body';

function App() {

  const [isEnglish, setIsEnglish] = React.useState(false);

  return (
    <div className="App">
      {/* Header */}
      <Header isEnglish={isEnglish}/>
      {/* Body */}
      <Body isEnglish={isEnglish} setIsEnglish={setIsEnglish} />
    </div>
  );
}

export default App;
