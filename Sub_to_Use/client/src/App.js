import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

//pages
import Title from './pages/Title';
import Home from './pages/Home';

//components
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Title />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
