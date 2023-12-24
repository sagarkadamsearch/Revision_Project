
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import InterviewPage from './components/InterviewPage';
import Navbar from './components/Navbar';
import "./components/Navbar.css"
import {Routes , Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contacts' element={<Contact/>} />
        <Route path='/interview' element={<InterviewPage/>} />
      </Routes>

    </div>
  );
}

export default App;
