import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nickname from './pages/Nickname';
import Welcome from './pages/WelcomePage';
import Onboarding from './pages/Onboarding';
import Home from './pages/Home';
import Search from './pages/Search';
import HomeFilter from './pages/HomeFilter';
import Start from './pages/Start';
import Recommend from './pages/Recommend';
import SearchResult from './pages/SearchResult';
import Redirection from './components/Page_Components/Login/Redirection';
import HomeResult from './pages/HomeMap';
import Map from './pages/Map';
import Mypage from './pages/Mypage';
import SearchError from './pages/SearchError';
import Community from './pages/Community';
import Alarm from './pages/Alarm';
import PlaceList from './pages/PlaceList';

function App() {
  return (
    <div className="App"> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/login/oauth2/code/kakao" element={<Redirection />} />
          <Route path="/nickname" element={<Nickname />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/filter" element={<HomeFilter />} />
          <Route path="/recommend" element={<Recommend />} />
          <Route path="/searchresult" element={<SearchResult />} />
          <Route path="/searcherror" element={<SearchError />} />
          <Route path="/homeresult" element={<HomeResult />} />
          <Route path="/map" element={<Map />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/social" element={<Community />} />
          <Route path="/alarm" element={<Alarm />} />
          <Route path="/placelist" element={<PlaceList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;