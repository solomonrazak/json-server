
import {Route, Routes} from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import UsesrDetails from './components/UsesrDetails';

function App() {


  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/users/:id" element={<UsesrDetails />} />
      </Routes>
    </div>
  )
}

export default App
