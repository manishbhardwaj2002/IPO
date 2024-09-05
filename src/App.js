import './App.css';
import React from 'react';
import CloseIpo from './component/pages/CloseIpo';
import  Header from './component/pages/Header';
import IpoBar from './component/pages/IpoBar';
import OpenIpo from './component/pages/OpenIpo';
import UpComingIpo from './component/pages/Upcoming';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";





function App() {


  return (
    <div className="App">
        <Header/>
    <IpoBar/>
 <Router>

 <Routes>
 <Route exact path="/" element={<OpenIpo />} />
 <Route exact path="/upcoming" element={<UpComingIpo />} />
  <Route exact path="/closed" element={<CloseIpo />} />
  <Route exact path="/openipo" element={<OpenIpo />} />
 <Route exact path="/upcoming" element={<UpComingIpo />} />
  <Route exact path="/closed" element={<CloseIpo />} />
</Routes>
</Router>


    </div>
  );
}

export default App;
