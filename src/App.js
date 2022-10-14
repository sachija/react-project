
import './App.css';
import {Routes,Route,BrowserRouter} from 'react-router-dom'
import Home from './components/Home'
import Bollywood from './components/Bollywood'
import Hollywood from './components/Hollywood'
import Fitness from './components/Fitness'
import Technology from './components/Technology'
import Food from './components/Food'
import About from './components/About';





function App() {
  return (
    <div className="App">
    
<BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/bollywood' element={<Bollywood/>}></Route>
  <Route path='/technology' element={<Technology/>}></Route>
  <Route path='/hollywood' element={<Hollywood/>}></Route>
  <Route path='/Fitness' element={<Fitness/>}></Route>
  <Route path='/food' element={<Food/>}></Route>
  <Route path='/hollywood' element={<Hollywood/>}></Route>
  <Route path='/pages/about/:id' element={<About/>}> </Route>

  

  







</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
