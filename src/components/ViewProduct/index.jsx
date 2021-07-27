import Product from "../Product"
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { API } from "aws-amplify";
import { LinearProgress } from "@material-ui/core";
import { withRouter } from 'react-router-dom';
import Alert from '@material-ui/lab/Alert';

/**
 * Component render view of information of a product based in name
 * and manage logic used in edit. 
 * @component
 * @example
 * @param {string} item  extracted from the path /view/:item
 * return(<Route exact path='/view/:item'>
 *             <ViewProduct/>
 *        </Route>)
 */
const ViewProduct = (props) =>{
    const [inEdition,setInEdition] = useState(false);
    const [product,setProduct] = useState(null);
    const [message,setMessage] = useState('');
    const [isError,setIsError] = useState(false);
    let { item } = useParams();
    /**
     * Get information of backend with param
     */
    useEffect(()=>{
        const fetchProduct = async ()=>{
            try{
                let url = `/fetch_product?name=${encodeURIComponent(item)}`
                const response = await API.get('MyAPIGatewayAPI',url);
                setProduct(response);
            }catch(error){
                console.log(error);
            }
        };
        fetchProduct();
    }, []);
    /**
     * Send updated information to the backend with PUT method
     * @param {Object} product 
     */
    const sendEdition =async(product) =>{
        try{
            setMessage('');
            let params = {
                'name':product.name,
                'featuresPair':product
            }
            let response = await API.put('MyAPIGatewayAPI','/put_product',{body:params});
            setIsError(false);
            setMessage(response.message);
            props.history.push('/');
        }catch(error){
            setIsError(true);
            setMessage('Ups... something went wrong ',error.message);
            setInEdition(false);
            console.log(error);
        }
    }
    const handleSubmit = (object) =>{
        sendEdition(object);
    }
    const handleEdit = () =>{
        setInEdition(true);
        setMessage('');
    }
    return(
        <div>
        {!product?
        <LinearProgress />:
        <div>
        {message &&
            <Alert variant="filled" severity={isError?'error':'success'}>
                {message}
            </Alert>}
        {!inEdition ?
        <Product editable={inEdition} onSubmit={handleEdit} product={product} />:        
        <Product editable={inEdition} onSubmit={handleSubmit} product={product} />}
        </div>
        }
        </div>
    )

}
export default withRouter(ViewProduct);