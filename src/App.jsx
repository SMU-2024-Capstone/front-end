import React from 'react';
import './App.css'
import Welcome from './pages/WelcomePage';
import Nickname from './pages/Nickname';
import Search from './pages/Search';
import SearchCategory2 from './pages/Loading';
import TheaterLocation from './components/Kakaomap';
import MapTest from './components/Kakaomap';
import Start from './pages/Start';



function App() {

  return (
    <div className="App"> 
    <Search />
    </div>
  );
}

export default App;
