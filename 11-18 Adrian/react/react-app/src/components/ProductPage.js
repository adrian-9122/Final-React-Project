import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

function ProductPage(props) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3009/showProducts')
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    const handleUpdate = (id) => {
        // Implement the update functionality
        console.log(`Update button clicked for product with ID ${id}`);
    };

    const handleDelete = (id) => {
        // Implement the delete functionality
        console.log(`Delete button clicked for product with ID ${id}`);
    };

    return (
        <div>
            <h1>Products</h1>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>Product</th>
                    <th>Total Sales</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {products.map((product) => (
                    <tr key={product.id}>
                        <td>{product.ItemName}</td>
                        <td>{product.TotalSales}</td>
                        <td>
                            <Button variant="info" onClick={() => handleUpdate(product.id)}>
                                Update ({product.id})
                            </Button>
                        </td>
                        <td>
                            <Button variant="danger" onClick={() => handleDelete(product.id)}>
                                Delete ({product.id})
                            </Button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <Button href='InsertProduct'> Insert New Product</Button>
        </div>
    );
}

export default ProductPage;
