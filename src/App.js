import React, { Component } from 'react'
import AppointmentContainer from './components/AppointmentContainer'
import './App.css'
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import MainNavigation from './pages/Navigation/MainNavigation'
import Login from './components/accounts/Login'
import Register from './components/accounts/Register'
import Home from './components/Home'
import OurServices from './components/OurServices'
// import Team from './components/Team'

export default class App extends Component {
  render() {
    return (
      <Router>
      <React.Fragment>
      <MainNavigation/>
      <main className="main-content">
        <Switch>
          <Redirect from='/' to= '/home' exact/>
          <Route path="/home" component={Home}/>
          <Route path='/appointments' component={AppointmentContainer}/>
          <Route path='/ourservices' component={OurServices}/>
          <Route path='/login' component={Login}/>
          <Route path='/register' component={Register}/>

        </Switch>
        </main>
        </React.Fragment>
      </Router>
    )
  }
}
