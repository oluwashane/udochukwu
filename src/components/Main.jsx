import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import Header from './Header';
import About from './About';
import Work from './Work';

const Main = () => {
  return (
    <div className='main'>
      <Header />
      <Switch>
        <Route exact path='/about' component={About}/>
        <Route exact path='/work' component={Work}/>
        <Redirect to='/work' />
      </Switch>
    </div>
  )
}

export default Main
