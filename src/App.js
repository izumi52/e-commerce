import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SigninAndSignupPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromUser = null

  componentDidMount(){
    this.unsubscribeFromUser = auth.onAuthStateChanged( user => {
      this.setState({currentUser: user});
      console.log(user)
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromUser();
  }

  render(){
    return (
      <div>
      <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop/' component={ShopPage} />
          <Route path='/signin/' component={SigninAndSignupPage} />
        </Switch>
      </div>
    );
    }
 }

export default App;
