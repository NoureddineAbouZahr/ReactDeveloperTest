import Categories from './components/Categories';
import Men from './components/Men';
import Kids from './components/Kids';
import { useQuery, gql } from '@apollo/client';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;
  return (
    
   <Router>
    <div>
      <h2>mt apoolo client</h2>
    </div>
    <Routes>      
      <Route exact path='/' element={<Categories />}></Route>
      <Route exact path='/MenPage' element={<Men />}></Route>
      <Route exact path='/KidsPage' element={<Kids />}></Route>
    </Routes>
   </Router>
   
  );
}

export default App;
