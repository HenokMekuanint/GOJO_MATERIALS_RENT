import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom"

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import  BookingMaterial from './pages/BookingMaterial';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/login" element={ <Login/> } />
        <Route path="/register" element={ <Register/> } />
        <Route path="/BookingMaterial" element={ <BookingMaterial/> } />

      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
