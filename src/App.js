import './App.css';
import Memo from './components/Memo';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='memo' element={<Memo />}></Route>
      </Routes>
    </div>
  );
}

export default App;
