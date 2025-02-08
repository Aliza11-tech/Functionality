import { client } from "@/sanity/lib/client";
import { Product } from "../../../../types/product";
import { groq } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
interface ProductPageProps {
    params: { slug: string };  
    searchParams?: Record<string, string | string[] | undefined>;  
}

async function getProduct (slug : string): Promise <Product | null> {
    return client.fetch (
     groq `*[_type == "product" && slug.current == $slug][0]{
     _id,
     productName,
     image,
     price,
     description,
     }`,
      {slug}  
    );
}
export default async function ProductPage({params} : ProductPageProps){
    const {slug} = params;
    const product= await getProduct(slug)
    if (!product) {
        return <p className="text-center text-red-500">Product not found.</p>;
    }
    return (
        <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-col-1 md:grid-cols-2 gap-12">
                <div className="aspect-square ">
                    {product.image && (
                       <Image 
                       src={urlFor(product.image).url()}
                       alt={product.productName}
                       width={500}
                       height={500}
                       className="border-4 border-black rounded-lg shadow-md"/>
                    )}
                </div>
                <div className="flex flex-col gap-8">
                    <h1 className="text-7xl font-bold mt-10">
                        {product.productName}
                    </h1>
                    <p className="text-4xl font-sans">
                        {product.price}
                    </p>
                    <p className="text-2xl font-medium">
                        {product.description}
                    </p>
                </div>
            </div>
        </div>
    )
}
export async function generateStaticParams() {
    const products: { slug?: string }[] = await client.fetch(
        groq`*[_type == "product"]{ "slug": slug.current }`
    );

    return products
        .filter((product) => product.slug) 
        .map((product) => ({ slug: product.slug as string }));
}