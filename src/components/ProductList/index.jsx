
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

const ProductList = (props) =>{
    const [products,setProducts] = useState([]);
    const classes = useStyles();
    const fetchProducts = async ()=>{
        try{
            const response = await API.get('MyAPIGatewayAPI','/fetch_products');
            setProducts(response);
            console.log(response);
        }catch(error){
            console.log(error);
        }
    }
    useEffect(()=>{
        fetchProducts();
    },[])
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