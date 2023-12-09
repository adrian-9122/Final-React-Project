import React, { useState } from 'react';
import axios from 'axios';

function InsertProduct() {
    // State to manage input values
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();

        const productData = {
            name: productName,
            price: productPrice,
        };

        try {
            // Send the product data to the server
            const response = await axios.post('http://localhost:3009/postNewProduct', productData);

            console.log('Product Data:', response.data);

            // Clear form fields
            setProductName('');
            setProductPrice('');
        } catch (error) {
            console.error('Error posting product data:', error);
        }
    };

    return (
        <div>
            <h1>Insert Product Details</h1>

            <form onSubmit={handleSubmit}>
                <label>
                    Product Name:
                    <input
                        type="text"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        required
                    />
                </label>

                <br /> <br/>

                <label>
                    Product Price:
                    <input
                        type="text"
                        value={productPrice}
                        onChange={(e) => setProductPrice(e.target.value)}
                        required
                    />
                </label>
                <br /> <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default InsertProduct;