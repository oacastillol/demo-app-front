import { makeStyles } from "@material-ui/core";
import { API } from "aws-amplify";
import { useState } from "react";
import Product from "../Product";
import Alert from '@material-ui/lab/Alert';
import { withRouter } from 'react-router-dom';



const AddProduct = (props)=>{
    const [message,setMessage] = useState('');
    const [isError,setIsError] = useState(false);
    const saveData =async (object)=>{
        try{
            setMessage('');
            let params = new URLSearchParams(object);
            let url =`/post_product?${params.toString()}`
            let response = await API.post('MyAPIGatewayAPI',url);
            setIsError(false);
            setMessage(response.message);
            console.log('SaveData',response);
            props.history.push('/');
        }catch(error){
            setIsError(true);
            setMessage('Ups... something went wrong. ',error.message);
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