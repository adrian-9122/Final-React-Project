const db = require("../util/database");

module.exports = class Customer {
    constructor( name, email) {
        this.name = name;
        this.email = email;
    }
    save() {
        return db.execute( 'insert into customer (CustomerName, CustomerEmail) ' +
            'values (?, ?)',
            [this.name, this.email],
        )
    }
    static delete( id ) {
        return db.execute( "delete from customer where id = ?",
            [id]
        )
    }
    static fetchAll(){
        return db.execute( "select * from customer");
    }
    static fetchCustomerSales(){
        return db.execute("SELECT c.CustomerID, c.CustomerName, c.CustomerEmail ,CONCAT('$', FORMAT(SUM(i.ItemPrice * s.Quantity)," +
            " 2)) AS TotalSales FROM customer c LEFT JOIN sales s ON c.CustomerID = s.CustomerID LEFT " +
            "JOIN item i ON s.ItemID = i.ItemID GROUP BY c.CustomerName order by TotalSales DESC");
    }
    static findById( id ){
        return db.execute( "select * from customer where customerid = ?",
            [id] );
    }
    update ( id ){
        return db.execute("UPDATE customer SET CustomerName = ?, CustomerEmail = ?  WHERE CustomerID = ?",
            [this.name, this.email, id]
        );
    }
}