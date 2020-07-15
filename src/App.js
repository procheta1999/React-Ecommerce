import React from 'react';
import { Switch, Route} from 'react-router-dom'
import './App.css';
import HomePage from './pages/homepage/HomePage'
import ShopPage from './pages/shop/ShopPage';
import { Header } from './components/header/Header';
import { SignInAndSignUpPage } from './pages/sign-in and sign-up/SignInAndSignUpPage';


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
