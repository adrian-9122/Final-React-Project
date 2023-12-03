const db = require("../util/database");

module.exports = class Products {
    constructor( product, totalSales) {
        this.product = product;
        this.totalSales = totalSales;
    }
    save() {
        return db.execute( 'insert into item (ItemName, ItemPrice) ' +
            'values (?, ?)',
            [this.product, this.totalSales]
        )
    }
    static delete( id ) {
        return db.execute( "delete from product where id = ?",
            [id]
        )
    }
    static fetchAll(){
        return db.execute( "select * from item");
    }
    static fetchProductDetails(){
        return db.execute("SELECT i.ItemName, SUM(i.ItemPrice * s.Quantity) AS TotalSales\n" +
            "    FROM item i LEFT JOIN sales s ON i.ItemID = s.ItemID\n" +
            "        GROUP BY i.ItemName\n" +
            "        ORDER BY TotalSales DESC");
    }
    static findById( id ){
        return db.execute( "select * from products where id = ?",
            [id] );
    }
    update ( id ){
        return db.execute( "UPDATE products SET price = ?, author = ?, title= ?  WHERE id = ?",
            [this.price, this.author, this.title, id ] );
    }
}