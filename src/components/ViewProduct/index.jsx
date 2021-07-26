import Product from "../Product"
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { API, Auth } from "aws-amplify";
import { LinearProgress } from "@material-ui/core";

const ViewProduct = (props) =>{
    const [inEdition,setInEdition] = useState(false);
    const [product,setProduct] = useState(null);
    let { item } = useParams();
    const fetchProduct = async ()=>{
        try{
            let url = `/fetch_product?name=${encodeURIComponent(item)}`
            const response = await API.get('MyAPIGatewayAPI',url);
            setProduct(response);
        }catch(error){
            console.log(error);
        }
    }
    useEffect(()=>{
        fetchProduct();
    },[]);
    const sendEdition =async(product) =>{
        try{
            let body = {
                'name':product.name,
                'featuresPair':product
            }
            let response = await API.put('MyAPIGatewayAPI','/put_product',{body});
            console.log(response);
        }catch(error){
            console.log(error);
        }
    }
    const handleSubmit = (object) =>{
        console.log(object);
        sendEdition(object);
    }
    const handleEdit = () =>{
        setInEdition(true);
    }
    return(
        <div>
        {!product?
        <LinearProgress />:
        !inEdition ?
        <Product editable={inEdition} onSubmit={handleEdit} product={product} />:
        <Product editable={inEdition} onSubmit={handleSubmit} product={product} />
        }
        </div>
    )

}
export default ViewProduct;