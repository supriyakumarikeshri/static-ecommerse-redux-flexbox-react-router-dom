import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productActions"
import ProductComponent from "../containers/ProductComponent";
import { productList } from "../fakeData";
const ProductListing = () => {
    // const products = useSelector((state) => state);
    //console.log(products)
    const dispatch = useDispatch();
    const fetchProducts = async () => {
        /*not calling API because we are using fake data here :-productList*/
        /* const response = await fetch("https://fakestoreapi.com/products").catch((err) => {
             console.log("Err", err);
         })
 
         const data = await response.json()*/

        console.log("productList", productList)
        dispatch(setProducts(productList))
    }
    useEffect(() => {
        fetchProducts()
    }, [])
    return (
        <div className="product-listing">
            <ProductComponent />
        </div>
    )
}

export default ProductListing;