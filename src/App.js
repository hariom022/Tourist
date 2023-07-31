import './App.scss';
import React from 'react';
import Header from './Header/Header';
import NavBar from './Navigation/NavBar';
import AboutPage from './About/AboutPage';
import Service from './ServiceComp/Service';
import Destination from './Destination/Destination';

const App=() =>{
  return (
    <div className="App">
      <Header/>
      <NavBar/>
      <AboutPage/>
      <Service/>
      <Destination/>
    
    </div>
  );
}

export default App;
