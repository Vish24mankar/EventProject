import './App.css';
import Header from './Components/Header';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
        {/* <p>Event Frontend</p> */}
        {/* <h1>VS Events of Happiness</h1> */}
        <BrowserRouter>
            <Routes>
                <Route path='' element={<Header />} />
            </Routes>
        </BrowserRouter>
        
    </div>
  );
}

export default App;
