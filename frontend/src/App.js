import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import DisplayIamge from './Components/DisplayIamge';
import {BrowserRouter,Routes,Route, Outlet} from 'react-router-dom'
function App() {
  return (
    <div>
      <Header />
      {/* <br/><br/><br/> */}
      <main className='pt-16 bg-sl[min-w-[calc(100vh)]]'>

        <br/>
          <Outlet/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
