import { Auth } from 'aws-amplify';
import SignIn from './components/SignIn';
import Header from './components/Header';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SignUp from './components/SignUp';
import ProductList from './components/ProductList';

import AddProduct from './components/AddProduct';
import ViewProduct from './components/ViewProduct';
import { Container } from '@material-ui/core';





function App() {
  const [loggedIn,setLoggedIn] = useState(false);
  const onLoad = async () =>{
    try{
      await Auth.currentSession();
      setLoggedIn(true);
    }catch(error){
      console.log(error);
    }
  }
  // useEffect(()=>{
  //   onLoad();
  // },[]);
  const handleSignIn = ()=>{
    setLoggedIn(true);
  }
  const handleLogout = () =>{
    setLoggedIn(false);
  }
  return (
    <BrowserRouter>
      <div className="App">
        <Header loggedIn={loggedIn} handleLogout={handleLogout}/>
        <Switch>
          <Route exact path='/'>
          {loggedIn ? 
            <ProductList />:
            <Redirect to="/signin" />}
          </Route>
          <Route exact path='/new'>
            {loggedIn ?
            <AddProduct/>:
            <Redirect to="/signin" />}
          </Route>
          <Route exact path='/view/:item'>
            {loggedIn ?
            <ViewProduct/>:
            <Redirect to="/signin" />}
          </Route>
          <Route exact path='/signin'>
            <SignIn onSignIn={handleSignIn}></SignIn>
          </Route>
          <Route exact path='/signup'>
            <SignUp onSignIn={handleSignIn}></SignUp>
          </Route>
          <Route>
            <Redirect to='/'/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
