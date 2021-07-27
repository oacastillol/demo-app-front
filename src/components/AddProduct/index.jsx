import { API } from "aws-amplify";
import { useState } from "react";
import Product from "../Product";
import Alert from '@material-ui/lab/Alert';
import { withRouter } from 'react-router-dom';
import AwsExports from "../../aws-exports";


/**
 * Contain Logic and state to create new Product
 * if complete return root path
 * @component
 * @example
 * return( <Route exact path='/new'>
 *             <AddProduct/>
 *           </Route>)
 */
const AddProduct = (props)=>{
    const [message,setMessage] = useState('');
    const [isError,setIsError] = useState(false);
    /**
     * Send Object to backend used Amplify
     * @param {Object} object
     */
    const saveData =async (object)=>{
        try{
            setMessage('');
            let requestOptions = {
                method: 'POST',
                headers: await AwsExports.API.endpoints[0].custom_header(),    
            };
            let url =`${AwsExports.API.endpoints[0].endpoint}/post_product?`;
            let response = await fetch(url + new URLSearchParams(object),requestOptions);
//            let response = await API.post('MyAPIGatewayAPI',url,init);
            setIsError(false);
            setMessage(response.message);
            console.log('SaveData',response);
            props.history.push('/');
        }catch(error){
            setIsError(true);
            setMessage('Ups... something went wrong. ',error);
            console.log('SaveData',error);
        }

    }
    const handleSubmit = (object)=>{
        saveData(object);
        console.log(object)
    }
    return (
        <div>
            {message &&
            <Alert variant="filled" severity={isError?'error':'success'}>
                {message}
            </Alert>}
            <Product editable={true} 
            title='Create new product' 
            onSubmit={handleSubmit}/>
        </div>
    )

}

export default withRouter(AddProduct);