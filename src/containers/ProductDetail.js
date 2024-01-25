import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { selectedProduct, removeSelectedProduct } from "../redux/actions/productActions";
import { productList } from "../fakeData";


const ProducDetail = () => {
    const product = useSelector((state => state.product))
    console.log(product)
    const { image, title, price, category, description, id } = product;

    console.log(image)
    const { productId } = useParams();
    const [selectedImage, setSelectedImage] = useState(`/product-img/product${productId}.jpg`);
    console.log(productId, "productId");
    const dispatch = useDispatch()
    const fetchProductDetail = async () => {
        // const response = await fetch(`https://fakestoreapi.com/products/${productId}`).catch(err => {
        //     console.log("Err", err)
        // })
        // const data = await response.json();
        // console.log(data)
        const productSelected = productList.find((obj => {
            //   console.log(obj)
            return (obj.id == productId)
        }))
        console.log(productSelected)
        dispatch(selectedProduct(productSelected));
    }
    useEffect(() => {
        if (productId && productId !== "") fetchProductDetail();
        return () => {
            dispatch(removeSelectedProduct());
        };
    }, [productId])
    console.log(Object.keys(product))
    const handleThumbnailClick = (thumbnailSrc) => {
        setSelectedImage(thumbnailSrc);
    };

    return (
        <div className="product-card">
            {Object.keys(product).length === 0 ? (
                <div>...Loading</div>
            ) : (


                // <div className="product-info">
                //     <div className="">
                //         <img className="" src={`/product-img/product${id}.jpg`} />
                //     </div>
                //     <div className="product-title">
                //         <h1>{title}</h1>
                //         <h2>
                //             <a className="product-price">${price}</a>
                //         </h2>
                //         <h3 className="">{category}</h3>
                //         <p>{description}</p>
                //         <div className="" tabIndex="0">
                //             <div className="">
                //                 <i className="shop icon"></i>
                //             </div>
                //             <div className="">Add to Cart</div>
                //         </div>
                //     </div>
                // </div>
                <div class="product-details-container">
                    <div class="product-image">
                        <img src={selectedImage} alt="Product Image" />
                        <div class="thumbnail-images">
                            <img src={`/product-img/product${id}.jpg`} alt="Thumbnail 1" onClick={() => handleThumbnailClick(`/product-img/product${id}.jpg`)} />
                            <img src={`/product-img/product${id + 2}.jpg`} alt="Thumbnail 2" onClick={() => handleThumbnailClick(`/product-img/product${id + 2}.jpg`)} />
                            <img src={`/product-img/product${id + 2}.jpg`} alt="Thumbnail 3" onClick={() => handleThumbnailClick(`/product-img/product${id + 2}.jpg`)} />
                            <img src={`/product-img/product${id + 2}.jpg`} alt="Thumbnail 4" onClick={() => handleThumbnailClick(`/product-img/product${id + 2}.jpg`)} />
                        </div>
                    </div>
                    <div class="product-info">
                        <h1>{title}</h1>
                        <p class="product-description">{description}</p>
                        <p class="product-price">{`Rs. ${price}`}</p>
                        {/* <button class="add-to-cart">Add to Cart</button> */}
                    </div>
                </div>

            )}
        </div>
    )
}

export default ProducDetail;