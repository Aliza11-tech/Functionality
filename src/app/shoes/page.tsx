"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Product } from "../../../types/product";
import { client } from "@/sanity/lib/client";
import { allproducts } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

const Shoes = () => {
    const [products, setProduct] = useState<Product[]>([])
    useEffect(()=>{
        async function fetchproducts(){
            const fetchedProduct : Product [] = await client.fetch(allproducts)
            setProduct(fetchedProduct)
        }
        fetchproducts()
    },[])
    return(
        <div className="grid grid-cols-4 max-w-6xl mx-auto px-4 py-8">
            {products.map((product)=> (
                <div key={product._id}>
                    <Link href={`/product/${product.slug.current}`}>
                    {product.image && (
                        <Image
                         src={urlFor(product.image).url()}
                        alt="image"
                        width={200} height={200}/>
                    )}
                    <h2>{product.productName}</h2>
                    <p>{product.price ? `$${product.price}` : "Price not available"}</p>
                    </Link>
                </div>
            ))}
        </div>
    )
}
export default Shoes;