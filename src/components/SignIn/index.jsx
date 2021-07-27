/* Component page render singIn connect with cognito using amplify */
import React, { useState } from 'react';
import { TextField, Typography, Container, CssBaseline, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar } from '@material-ui/core';
import { Auth } from 'aws-amplify';
import { withRouter } from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
/**
 * Render form of login if is success call param function
 * @param {function} props.onSignIn 
 * @component
 * @example
 * return (
 *         <Route exact path='/signin'>
 *           <SignIn onSignIn={handleSignIn}></SignIn>
 *         </Route>
 * )
 */
const SignIn = ( props ) => {
    const classes = useStyles();
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ errorMessage, setErrorMessage ] = useState('');
    const handleClick = async (target)=>{
        target.preventDefault();
        try{
            setErrorMessage('');
            const user = await Auth.signIn(email,password);
            console.log(user);
            props.onSignIn();
            props.history.push('/');
        }catch(error){
            console.log('there was an error logging in',error);
            setErrorMessage(error.message);
            setPassword('');
        }
    }
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form className={classes.form} noValidate>
                <TextField 
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    id='email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <TextField
                    error={errorMessage? true: false}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    helperText={errorMessage}
                />
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={handleClick}
                >
                    Sign In
                </Button>
                </form>
            </div>
        </Container>
    )
}
export default withRouter(SignIn);