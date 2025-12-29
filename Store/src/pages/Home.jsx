import { useState } from "react"
import { useEffect } from "react"
import ProductCard from "../components/home/ProductCard"
import useFetch from "../hooks/useFetch"

export default function Home() {
    const { data: products, isLoading, isError } = useFetch("https://fakestoreapi.com/products")
    return (
        <div className="grid grid-cols-4 justify-center">
            {isLoading && <h1>LOADING...</h1>}
            {isError && <h1>error while getting data</h1>}
            {products?.map(item => <ProductCard key={item.id} image={item.image} title={item.title} />)}
        </div>
    )
}