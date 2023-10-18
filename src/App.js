import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Messages from './components/Navbar/Messages/Messages';
import News from './components/Navbar/News/News';
import Music from './components/Navbar/Music/Music';
import Setting from './components/Navbar/Setting/Setting';

function App(props) {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <div className='nav'>
      <Navbar friends={props.data.friends}/>
      </div>
      <div className='profile'>
        <Routes>
        <Route path='/profile' Component={Profile}/>
        <Route path='/messages' element={<Messages dialogs={props.data.dialogs}/>}/>
        <Route path='/news' Component={News}/>
        <Route path='/music' Component={Music}/>
        <Route path='/setting' Component={Setting}/>
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
