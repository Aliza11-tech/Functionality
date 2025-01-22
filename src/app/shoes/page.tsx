"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Product } from "../../../types/product";
import { client } from "@/sanity/lib/client";
import { allproducts } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

const Shoes = () => {
    const [product, setProduct] = useState<Product[]>([])
    useEffect(()=>{
        async function fetchproducts(){
            const fetchedProduct : Product [] = await client.fetch(allproducts)
            setProduct(fetchedProduct)
        }
        fetchproducts()
    },[])
    return(
        <div className="max-w-6xl mx-auto px-4 py-8">
            {product.map((product)=> (
                <div key={product._id}>
                    {product.image && (
                        <Image
                         src={urlFor(product.image).url()}
                        alt="image"
                        width={200} height={200}/>
                    )}
                    {product._productName}
                    {product._type}
                    {product.price}<br/>
                    {product.description}

                </div>
            ))}
        </div>
    )
}
export default Shoes;