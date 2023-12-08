import React, { useEffect, useState } from 'react';
// import Navbar from './navbar';
import { Button } from 'react-bootstrap';
import {Route, Routes} from "react-router-dom";
import InsertCustomer from "./InsertCustomer";

function CustomerPage(props) {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        // Fetch data when the component mounts
        fetch('http://localhost:3009/showCustomers')
            .then((response) => response.json())
            .then((data) => setCustomers(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);
    const handleUpdate = (id) => {
        // Implement the update functionality
        console.log(`Update button clicked for customer with ID ${id}`);
    };

    const handleDelete = (id) => {
        // Implement the delete functionality
        console.log(`Delete button clicked for customer with ID ${id}`);

    };

    return (
        <div>
            <h1>Customers</h1>
            <Routes>
                <Route path='/InsertCustomer' element={<InsertCustomer/>}></Route>
            </Routes>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {customers.map((customer) => (
                    <tr key={customer.CustomerID}>
                        <td>{customer.CustomerName}</td>
                        <td>{customer.CustomerEmail}</td>
                        <td>
                            <Button variant="info" onClick={() => handleUpdate(customer.CustomerID)}>
                                Update
                            </Button>
                        </td>
                        <td>
                            <Button variant="danger" onClick={() => handleDelete(customer.CustomerID)}>
                                Delete
                            </Button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <Button> Insert New Customer</Button>
        </div>
    );
}
export default CustomerPage;

