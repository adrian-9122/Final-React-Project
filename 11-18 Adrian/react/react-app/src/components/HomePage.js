import React, { useEffect, useState } from 'react';
import {Button, Table} from 'react-bootstrap';

function HomePage() {
    const [data, setData] = useState({
        customerInfo: [],
        productInfo: [],
        salesInfo: [],
    });

    useEffect(() => {
        fetch('http://localhost:3009/')
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    const renderTable = (tableData, columns) => (
        <Table bordered hover>
            <thead>
            <tr>
                {columns.map((column) => (
                    <th key={column}>{column}</th>
                ))}
            </tr>
            </thead>
            <tbody>
            {tableData.map((row, index) => (
                <tr key={index}>
                    {columns.map((column) => (
                        <td key={column}>{row[column]}</td>
                    ))}
                </tr>
            ))}
            </tbody>
        </Table>
    );

    return (
        <div className="getSalesData">
            <h1>Home Page</h1>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ flex: 1, marginRight: '10px' }}>
                    <h4>Top Customers</h4>
                    {renderTable(data.customerInfo, ['CustomerID', 'CustomerName', 'CustomerEmail', 'TotalSales'])}
                    <Button href='/CustomerPage'>Show All</Button>
                </div>

                <div style={{ flex: 1, marginRight: '10px' }}>
                    <h4>Top Products</h4>
                    {renderTable(data.productInfo, ['ItemName', 'TotalSales'])}
                    <Button href='/ProductPage'>Show All</Button>
                </div>

                <div style={{ flex: 1 }}>
                    <h4>Top Sales</h4>
                    {renderTable(data.salesInfo, ['Date', 'TotalSales'])}
                    <Button href='/SalesPage'>Show All</Button>
                </div>
            </div>
        </div>
    );
}
export default HomePage;