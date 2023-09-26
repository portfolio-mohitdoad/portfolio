import React from 'react';
import './index.css';
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import Hire from './routes/Hire';
import Portfolio from './routes/Portfolio';
import Subscribe from './routes/Subscribe';
import Illustration from './routes/Illustration';
import VideoEditing from './routes/VideoEditing';
import LogoDesign from './routes/LogoDesign';
import SocialMedia from './routes/SocialMedia';
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/subscribe" element={<Subscribe/>}/>
        <Route path="/hire" element={<Hire/>}/>
        <Route path="/illustration" element={<Illustration/>}/>
        <Route path="/socialmedia" element={<SocialMedia/>}/>
        <Route path="/logodesign" element={<LogoDesign/>}/>
        <Route path="/videoediting" element={<VideoEditing/>}/>
      </Routes>
    </>
  );
}

export default App;
