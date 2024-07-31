import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
        {/* <p>Event Frontend</p> */}
        {/* <h1>VS Events of Happiness</h1> */}
        <BrowserRouter>
        <Header />
            <Routes>
                {/* <Route path='' element={<Header />} /> */}
            </Routes>
            <Footer />
        </BrowserRouter>
        
    </div>
  );
}

export default App;
