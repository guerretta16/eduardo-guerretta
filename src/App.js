import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Body } from './components/Body';
import { Footer } from './components/Footer';

function App() {

  const [isEnglish, setIsEnglish] = React.useState(false);

  return (
    <div className="App">
      {/* Header */}
      <Header isEnglish={isEnglish}/>
      {/* Body */}
      <Body isEnglish={isEnglish} setIsEnglish={setIsEnglish} />
      {/* Footer */}
      <Footer isEnglish={isEnglish}/>
    </div>
  );
}

export default App;
