/* Component render header include navbar */
import { AppBar, Toolbar, Typography, Button, makeStyles, Link } from "@material-ui/core";
import { Auth } from "aws-amplify";
import { Link as RouterLink } from 'react-router-dom';
import PropType from 'prop-types';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        flexGrow: 1,
      },
      link: {

      }
  }));
  /**
   * Navigation Bar receive state of loggedIn and manage Logout
   * @param {Boolean} loggedIn
   * @param {Function} handleLogout
   * @component
   * @example 
   * return (
   *      <Header loggedIn={loggedIn} handleLogout={handleLogout}/>
   *        )
   */
const Header = (props) =>{
    const classes = useStyles();
    /**
     * Send singOut to Cognito, send response
     * signal to parent
     * @param {Event} e 
     */
    const handleClick = async (e)=>{
        try{
            await Auth.signOut();
            props.handleLogout();
        }catch(error){
            console.log('error signing out ',error);
        }
    }
    return (
        <AppBar position="static">
          <Toolbar>
            <Typography  variant="h6" className={classes.title}>
              <Link component={RouterLink} to="/" color='inherit'>
              Shop-Demo
              </Link>
            </Typography>
            {props.loggedIn?
            <Button color="inherit" onClick={handleClick}>Logout</Button>:
            <Button color="inherit" href='./signup'>Sign Up</Button>
            }
          </Toolbar>
        </AppBar>
    )
}
Header.prototype={
  loggedIn: PropType.bool,
  handleLogout: PropType.func
}
export default Header;