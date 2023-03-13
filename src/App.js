
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./components/Home/Home"
import Navbar from './components/Navbar/Navbar';
import Favor from "./components/favourite/Favor"
import Watched from './components/Watched/Watched';
import WatchList from './components/WatchList/WatchList';
import { Provider, useSelector } from 'react-redux';
import { store } from './components/Redux/stores/data';
import BtnUp from './components/btnUp/btnUp';
import Footer from './components/Footer/Footer';

function App() {
  
  return (
  <>
    <BrowserRouter>
      <Provider store={store}>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} exact/>
          <Route path='/favor' element={<Favor/>}/>
          <Route path='/watched' element={<Watched/>}/>
          <Route path='/WatchList' element={<WatchList/>}/>
        </Routes>
        <BtnUp/>
        <Footer/>
      </Provider>
        
    </BrowserRouter> 
  </>
  );
}

export default App;
