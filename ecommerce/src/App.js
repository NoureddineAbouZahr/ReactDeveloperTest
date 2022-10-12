import Categories from './components/Categories';
import Men from './components/Men';
import Kids from './components/Kids';
import { useQuery, gql } from '@apollo/client';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
//   const GET_LOCATIONS = gql`
//   query GetLocations {
//     locations {
//       id
//       name
//       description
//       photo
//     }
//   }
// `;

  return (
    
   <Router>
    <div>
      <h2>mt apoolo client</h2>
      <DisplayLocations />
    </div>
    <Routes>      
      <Route exact path='/' element={<Categories />}></Route>
      <Route exact path='/MenPage' element={<Men />}></Route>
      <Route exact path='/KidsPage' element={<Kids />}></Route>
    </Routes>
   </Router>
   
  );
}
function DisplayLocations() {
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
  const { loading, error, data } = useQuery(GET_LOCATIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.locations.map(({ id, name, description, photo }) => (
    <div key={id}>
      <h3>{name}</h3>
      <img width="400" height="250" alt="location-reference" src={`${photo}`} />
      <br />
      <b>About this location:</b>
      <p>{description}</p>
      <br />
    </div>
  ));
}

export default App;
