import React, { useEffect, useState } from 'react';
import Navbar from './navbar';

function CustomerPage(props) {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        // Fetch data when the component mounts
        fetch('http://localhost:3009/showCustomers')
            .then((response) => response.json())
            .then((data) => setCustomers(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []); // Empty dependency array ensures the effect runs only once on mount

    return (
        <div>
            <h1>Customers</h1>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {customers.map((customer) => (
                    <tr key={customer.CustomerID}>
                        <td>{customer.CustomerName}</td>
                        <td>{customer.CustomerEmail}</td>
                        <td></td>
                        <td></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default CustomerPage;
