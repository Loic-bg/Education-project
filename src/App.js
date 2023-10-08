import './App.css';
import Header from './components/common/header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepages from './components/home/Homepages';
import Footer from './components/common/footer/Footer';
import Culture from './components/culture/Culture';
import Singlepages from './components/singlePages/Singlepages';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Homepages />} />
          <Route path='/Singlepage/:id' element={<Singlepages />} />
          <Route path='/culture' element={<Culture />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
