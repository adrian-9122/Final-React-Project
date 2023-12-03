const db = require("../util/database");

module.exports = class Sales {
    constructor( date,customer, product, qty,totalSales) {
        this.data = data;
        this.customer = customer;
        this.product = product;
        this.qty = qty;
        this.totalSales = totalSales;
    }
    static delete( id ) {
        return db.execute( "delete from sales where id = ?",
            [id]
        )
    }
    static fetchAll(){
        return db.execute( "select * from sales");
    }
    static fetchSalesDetails(){
        return db.execute("SELECT DATE_FORMAT(s.SalesDate, '%Y-%m-%d') AS Date, c.CustomerName, i.ItemName AS Product, s.Quantity AS Quantity, (i.ItemPrice * s.Quantity) AS TotalSales\n" +
            "    FROM sales s JOIN customer c ON s.CustomerID = c.CustomerID\n" +
            "    JOIN item i ON s.ItemID = i.ItemID\n" +
            "    WHERE MONTH(s.SalesDate) = MONTH(CURDATE()) AND YEAR(s.SalesDate) = YEAR(CURDATE())\n" +
            "    ORDER BY TotalSales DESC");
    }
    static findById( id ){
        return db.execute( "select * from sales where id = ?",
            [id] );
    }
    update ( id ){
        return db.execute( "UPDATE products SET price = ?, author = ?, title= ?  WHERE id = ?",
            [this.price, this.author, this.title, id ] );
    }
    static getMonthly() {
        return db.execute("SELECT DATE_FORMAT(s.SalesDate, '%M %Y') AS Date, CONCAT('$', FORMAT(SUM(i.ItemPrice * s.Quantity), 2)) AS TotalSales " +
            "FROM sales s JOIN item i on s.ItemID = i.ItemID " +
            "GROUP BY DATE_FORMAT(s.SalesDate, '%Y-%m') " +
            "ORDER BY DATE_FORMAT(s.SalesDate, '%Y-%m') DESC;");
    }
}
