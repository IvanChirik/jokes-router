import { Redirect, Route } from 'react-router-dom';
import AddJoke from './pages/AddJoke';
import JokeDetails from './pages/JokeDetails';
import Jokes from './pages/Jokes';

function App() {
  return <div>
    <Route path='/' exact>
      <Redirect to='jokes' />
    </Route>
    <Route path='/jokes' exact>
      <Jokes />
    </Route>
    <Route path='/jokes/:jokeId'>
      <JokeDetails />
    </Route>
    <Route path='/add-joke'>
      <AddJoke />
    </Route>
  </div>;
}

export default App;
