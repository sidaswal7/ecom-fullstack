import React, { useEffect, useState } from "react";

const ProductList = ()=>{
    const [products, setProducts] = useState([]);
    const getProducts = async ()=>{

        let response = await fetch(`http://localhost:4000/products`);
        response = await response.json();
        setProducts(response)

    }
    console.log(products)
    useEffect(()=>{
        getProducts()
    },[])
    return(
        <>
            <h1 className="text-3xl font-bold text-center my-5">List of Products</h1>
            <div className="flex justify-center items-center">
            {products.map((product)=>(
                <ul>
                        <li className="font-bold text-xl text-green-800 capitalize my-7 px-3">{product.name}</li>
                        <li className="font-bold text-xl text-green-800 capitalize my-7 px-3">{product.price}</li>
                        <li className="font-bold text-xl text-green-800 capitalize my-7 px-3">{product.category}</li>
                        <li className="font-bold text-xl text-green-800 capitalize my-7 px-3">{product.company}</li>
                </ul>
            ))}   
            </div>

        </>
    )
}

export default ProductList;