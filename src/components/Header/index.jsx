/* Component render header include navbar */
import { AppBar, Toolbar, Typography, Button, makeStyles, Link } from "@material-ui/core";
import { Auth } from "aws-amplify";
import { Link as RouterLink } from 'react-router-dom';

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
const Header = (props) =>{
    const classes = useStyles();
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

export default Header;