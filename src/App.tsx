import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import AudioList from './components/AudioList';
import Header from './components/Header';
import Main from './components/Main';
import { useState } from 'react';
import About from './pages/About';
import More from './pages/More';

function App() {

  // const [activeLink, setActiveLink] = useState<string>("");

  return (
    <div>
      <div className='app-body'>
        <Header />
        {/* <Main /> */}
      </div>

      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/home' element={<Main />} />
        <Route path='/books' element={<AudioList />} />
        <Route path='/about' element={<About />} />
        <Route path='/more' element={<More />} />
      </Routes>
    </div>


  );
}

export default App;
