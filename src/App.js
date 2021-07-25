import Amplify, { Auth } from 'aws-amplify';
import SignIn from './components/SignIn';
import Header from './components/Header';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SignUp from './components/SignUp';
import ProductList from './components/ProductList';


Amplify.configure({
  Auth:{
    region: 'us-east-1',
    userPoolId: 'us-east-1_OI8jKNQ9g',
    userPoolWebClientId: '4rhvsteqkvfjkir3rc135phass',
  }
})


function App() {
  const [loggedIn,setLoggedIn] = useState(false);
  const AssessLoggedInState = () =>{
    Auth.currentAuthenticatedUser()
        .then(() => {
          setLoggedIn(true);
          console.log('true current');
        })
        .catch(() => {
          setLoggedIn(false);
          console.log('false current');
        })
  }
  useEffect(()=>{
    AssessLoggedInState()
  },[]);
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
          <Route exact path='/signin'>
            <SignIn onSignIn={handleSignIn}></SignIn>
          </Route>
          <Route exact path='/signup'>
            <SignUp onSignIn={handleSignIn}></SignUp>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
