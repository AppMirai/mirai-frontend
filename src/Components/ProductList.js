import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import ProductItem from './ProductItem';

function ProductList() {
    const [articles, setArticles] = useState([]);
    // const api = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=a35880b0ec54413aa1a6f8fd709cf3d4';
    const api = 'http://20.89.56.97:5000/api/products';

    useEffect(() => {
        const getArticles = async () => {
            const res = await Axios.get(api);

            setArticles(res.data.data);
            console.log(res);
        };

        getArticles();
    }, []);

    return (
        <div>
            {articles.map(({ name, description, link_tokopedia, product_image_url }) => (
                <ProductItem
                    name={name}
                    description={description}
                    link_tokopedia={link_tokopedia}
                    product_image_url={product_image_url} />
            ))}
        </div>
    );
}

export default ProductList