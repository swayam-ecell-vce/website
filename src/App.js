import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

//import the application routes form here
import HomeContainer from './Containers/HomeContainer'
import Incubator from './Containers/Incubator'

function App()
{
  return(
    <BrowserRouter>
    <div className = 'App-Body-Div'>
      <Switch>
        <Route path='/' component = {HomeContainer} exact />
        <Route path='/incubator' component = {Incubator} exact />
      </Switch>
    </div>
    </BrowserRouter>
  )
}

export default App;
