import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

function ProductPage(props) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch data when the component mounts
        fetch('http://localhost:3009/showProducts')
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []); // Empty dependency array ensures the effect runs only once on mount

    return (
        <div>
            <h1>Products</h1>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>Product</th>
                    <th>Total Sales</th>
                    <th>-</th>
                    <th>-</th>
                </tr>
                </thead>
                <tbody>
                {products.map((product, index) => (
                    <tr key={index}>
                        <td>{product.ItemName}</td>
                        <td>{product.TotalSales}</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default ProductPage;