import React from 'react'

const ProductItem = ({name, description, link_tokopedia, product_image_url}) => {
    return (
        <div>
            <img src={product_image_url} alt='Product Image'></img>
            <h3>
                <a href={link_tokopedia}>{name}</a>
            </h3>
            <p>{description}</p>
        </div>
    )
}

export default ProductItem