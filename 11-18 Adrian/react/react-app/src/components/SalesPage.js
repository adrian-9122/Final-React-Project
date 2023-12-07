import React, { useEffect, useState } from 'react';

function SalesPage(props) {
    const [sales, setSales] = useState([]);

    useEffect(() => {
        // Fetch data when the component mounts
        fetch('http://localhost:3009/showSales')
            .then((response) => response.json())
            .then((data) => setSales(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []); // Empty dependency array ensures the effect runs only once on mount

    return (
        <div>
            <h1>Sales</h1>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>Date</th>
                    <th>Customer</th>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Total Sales</th>
                </tr>
                </thead>
                <tbody>
                {sales.map((sale, index) => (
                    <tr key={index}>
                        <td>{sale.Date}</td>
                        <td>{sale.CustomerName}</td>
                        <td>{sale.Product}</td>
                        <td>{sale.Quantity}</td>
                        <td>{sale.TotalSales}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default SalesPage;