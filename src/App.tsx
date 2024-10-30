import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import AudioList from './components/AudioList';
import Header from './components/Header';
import Main from './components/Main';
import { useState } from 'react';

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
      </Routes>
    </div>


  );
}

export default App;
