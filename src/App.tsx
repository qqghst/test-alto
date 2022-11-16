import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductList from "./components/ProductList/ProductList";
import { IProduct } from "./types";
import Pagination from "./components/pagination/Pagination";

function App() {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(3);

    async function fetchProducts() {
        try {
            await axios
                .get('http://testtask.alto.codes/front-products.php')
                .then(data => setProducts(data.data.products))
                .then(data => console.log(data))
        } catch (e: unknown) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = products.slice(firstPostIndex, lastPostIndex);

    return (
        <div>
            <ProductList products={currentPosts}/>
            <Pagination
                totalPosts={products.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage} />
        </div>
    );
}

export default App;
