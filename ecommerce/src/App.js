import Categories from './components/Categories';
import Men from './components/Men';
import Kids from './components/Kids';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
   <Router>
    <Routes>      
      <Route exact path='/' element={<Categories />}></Route>
      <Route exact path='/MenPage' element={<Men />}></Route>
      <Route exact path='/KidsPage' element={<Kids />}></Route>
    </Routes>
   </Router>
  );
}

export default App;
