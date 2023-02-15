import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Body from './Body';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (

     <Router>
     <Routes>
     <Navbar/>
    <Body/>
    <Footer/>
       <Route exact path='/resume' element={<Resume />} />
     </Routes>
   </Router>
  );
}

export default App;
