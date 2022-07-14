import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';
import Register from './components/Register';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Register/>}></Route>
          <Route path="/addProduct" element={<Form/>}></Route>
          <Route path="/updateProduct" element={<Form/>}></Route>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
