import React, { useState } from 'react';

function InsertCustomer() {
    // State to manage input values
    const [customerName, setCustomerName] = useState('');
    const [customerEmail, setCustomerEmail] = useState('');

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate input fields if needed

        // Create an object with customer data
        const customerData = {
            name: customerName,
            email: customerEmail,
        };

        // Perform the database insertion or API call here
        // For simplicity, we'll just log the data for now
        console.log('Customer Data:', customerData);

        // Clear the form fields after submission
        setCustomerName('');
        setCustomerEmail('');
    };

    return (
        <div>
            <h1>Insert Customer Details</h1>

            <form onSubmit={handleSubmit}>
                <label>
                    Customer Name:
                    <input
                        type="text"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        required
                    />
                </label>

                <br /> <br/>

                <label>
                    Customer Email:
                    <input
                        type="email"
                        value={customerEmail}
                        onChange={(e) => setCustomerEmail(e.target.value)}
                        required
                    />
                </label>
                <br /> <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default InsertCustomer;
