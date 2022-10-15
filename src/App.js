import { Routes, Route } from 'react-router-dom';
import Details from './components/Details/Details';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import './App.css';

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/*" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
