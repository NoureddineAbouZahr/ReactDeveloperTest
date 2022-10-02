import Categories from './components/Categories';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
   <Router>
    <Routes>      
      <Route exact path='/' element={<Categories />}></Route>
    </Routes>
   </Router>
  );
}

export default App;
