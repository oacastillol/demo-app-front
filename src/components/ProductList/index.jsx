
import { List, Fab } from '@material-ui/core';
import { API } from 'aws-amplify';
import { useEffect } from 'react';
import { useState } from 'react';
import ProductItem from '../ProductItem';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme)=>({
    fab: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
}));
/**
 * Render list of all Products, fetch information of backend
 * @component
 * @example
 * return(<Route exact path='/'>
 *             <ProductList />
 *        </Route>)
 */
const ProductList = (props) =>{
    const [products,setProducts] = useState([]);
    const classes = useStyles();
    /**
     * Fetch data from backend through Amplify
     */
    useEffect(()=>{
        const fetchProducts = async ()=>{
            try{
                const myInit = { 
                    headers: {'Access-Control-Allow-Origin': '*',
                                'Content-Type': 'application/json' }, 
                };
                const response = await API.get('MyAPIGatewayAPI','/fetch_products',myInit);
                setProducts(response);
                console.log(response);
            }catch(error){
                console.log(error);
            }
        };
        fetchProducts();
    }, [])
    return(
        <div>
        <List>
            {products.map(product => {
                return <ProductItem 
                        name={product.name}
                        mfr={product.mfr}
                        key={product.name} />
            })}
        </List>
        <Fab color="primary" aria-label="add" className={classes.fab} component={RouterLink} to="/new">
        <AddIcon />
      </Fab>
      </div>
    )
}

export default ProductList;