import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import LeftBar from './components/LeftBar';
import RightBar from './components/RightBar';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <LeftBar />
      <RightBar />
      <Footer />
    </div>
  );
}

export default App;
