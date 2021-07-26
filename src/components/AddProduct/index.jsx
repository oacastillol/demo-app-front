import { makeStyles } from "@material-ui/core";
import { API } from "aws-amplify";
import { useState } from "react";
import Product from "../Product";



const AddProduct = (props)=>{
    const saveData =async (object)=>{
        try{
            let params = new URLSearchParams(object);
            let url =`/post_product?${params.toString()}`
            let response = await API.post('MyAPIGatewayAPI',url);
            console.log(response);
        }catch(error){
            console.log(error);
        }

    }
    const handleSubmit = (object)=>{
        saveData(object);
        console.log(object)
    }
    return (
        <Product editable={true} 
        title='Create new product' 
        onSubmit={handleSubmit}/>
    )

}

export default AddProduct;