import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from './Containers/Navbar'

//import the application routes form here
import HomeContainer from './Containers/HomeContainer'
import Incubator from './Containers/Incubator'
import EventsConatiner from './Containers/Events'
import EventDetails from './Containers/EventDetailsComponent'
import AboutUs from './Containers/About'
import Recruitment from './Containers/Recruitment'
import Team from './Containers/team';
import Blog from './Containers/Blog';
import BlogPost from './Containers/BlogPost';
import BlogCollections from './Containers/BlogCollections';
import React from 'react';

function App()
{
  return(
    <React.Fragment>
    <BrowserRouter>
    <Navbar />
    <div className = 'App-Body-Div'>
      <Switch>
        <Route path='/' component = {HomeContainer} exact />
        <Route path='/incubator' component = {Incubator} exact />
        <Route path='/events' component = {EventsConatiner} exact />
        <Route path='/events/:id' component = {EventDetails} exact />
          <Route path='/about' component={AboutUs} exact />
          <Route path='/hiring' component={Recruitment} exact/>
          <Route path='/ourteam' component={Team} exact/>
          <Route path='/blog' component={Blog} exact/>
          <Route path='/blog/:id' component={BlogPost} exact/>
          <Route path = '/blog/collections/:tag' component={BlogCollections} exact />
      </Switch>
    </div>
    </BrowserRouter>
    </React.Fragment>
  )
}

export default App;
