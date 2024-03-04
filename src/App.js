import {HashRouter, Routes, Route} from 'react-router-dom';
import './components/style.css'
import Navbar from './components/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Home , Notes , PYQs, Books, Help, Contribute} from './components/Navcomponents';

function App() {
  return (
    <div>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Notes" element={<Notes/>} />
          <Route path="/PYQs" element={<PYQs/>} />
          <Route path="/Books" element={<Books/>} />
          <Route path="/Help" element={<Help/>} />
          <Route path="/Contribute" element={<Contribute/>} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
