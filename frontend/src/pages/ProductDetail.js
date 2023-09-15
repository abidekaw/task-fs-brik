import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function ProductDetail() {
    const [product, setProduct] = useState("");
    const [images, setImages] = useState([]);
    const params = useParams();
    const { slug } = params;

    const getProduct = async () => {
        const res = await fetch(`https://dummyjson.com/products/${slug}`);
        const resJson = await res.json();
        // console.log(resJson.images);
        setImages(resJson.images);
        setProduct(resJson);
    };

    useEffect(() => {
        getProduct();
    }, []);

    return (
        <div className="product-detail-wrapper">
            <div className="product-detail-outer left">
                <Carousel>
                    {images.map((val, i) => (
                        <div key={i}>
                            <img src={val} alt="" width={"100%"} />
                        </div>
                    ))}
                </Carousel>
            </div>
            <div className="product-detail-outer">
                <b>{product.title}</b>
                <hr />
                <p>Description : {product.description}</p>
                <hr />
                <p>Price : ${product.price}</p>
                <hr />
                <p>Brand : {product.brand}</p>
                <hr />
                <p>Rating : {product.rating}</p>
                <hr />
                <p>Category : {product.category}</p>
            </div>
        </div>
    );
}

export default ProductDetail;
