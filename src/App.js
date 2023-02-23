import './App.css';
import './css/Header.css';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import NewThreadBtn from './components/NewThreadBtn';
import Threads from './components/Threads';
import Thread from './components/Thread';
import NewThread from './components/NewThread';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/newthread" element={<NewThread />} />
        <Route path="/threads" element={<Threads />} />
      </Routes>
    </div>
  );
}

export default App;
