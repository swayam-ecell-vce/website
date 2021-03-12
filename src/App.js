import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

//import the application routes form here
import HomeContainer from './Containers/HomeContainer'
import Incubator from './Containers/Incubator'
import EventsConatiner from './Containers/Events'
import EventDetails from './Containers/EventDetailsComponent'

function App()
{
  return(
    <BrowserRouter>
    <div className = 'App-Body-Div'>
      <Switch>
        <Route path='/' component = {HomeContainer} exact />
        <Route path='/incubator' component = {Incubator} exact />
        <Route path='/events' component = {EventsConatiner} exact />
        <Route path='/events/:id' component = {EventDetails} exact />
      </Switch>
    </div>
    </BrowserRouter>
  )
}

export default App;
