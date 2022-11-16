import React from 'react'
import ProductCard from '../ProductCard/ProductCard';
import style from './ProductList.module.scss'

const ProductList = ({ products }) => {
    return (
        <div className={`flex flex-col lg:flex-row gap-[20px] justify-center items-center shrink-1 flex-wrap pt-20`}>
        {/* // <div className={`container mx-auto grid grid-cols-1 gap-[20px] md:grid-cols-2 xl:grid-cols-4 pt-20 pb-10 lg:pt-40 lg:pb-20 justify-center items-center`}> */}
            {
                products.map((product, index) => {
                    return (
                        <ProductCard
                            key={index}
                            image_url={product.image_url}
                            price={product.price}
                            name={product.name}
                            availability={product.availability}
                            color={product.color}
                            short_desc={product.short_desc}
                        />
                    )
                })
            }
        </div>
    )
}

export default ProductList