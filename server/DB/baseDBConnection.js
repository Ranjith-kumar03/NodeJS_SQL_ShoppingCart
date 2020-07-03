const mysql = require('mysql');
const con = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    password: "root" ,
    database: 'shoopingmart',
    port: '3306'


})

let database = {};
database.all = ()=>{
    return new Promise((resolve, reject) =>{
        con.query('select * from shop' ,(err,results)=>{
            if(err)
            {

                return reject(err);

            }
            console.log("get all list 1");
            return resolve(results)
        })
    })
}

database.getOne = (id)=>{
    return new Promise((resolve, reject) =>{
        con.query('select * from shop where iD = ?',[id] ,(err,results)=>{
            if(err)
            {

                return reject(err);

            }
           console.log("2");
            return resolve(results[0])
        })
    })
}
//https://www.youtube.com/watch?v=Kez-PXG4jCE



database.addOne = (iD,name,description,price,imageUrl) =>{
    let insertQuery = 'INSERT INTO ?? (??,??,??,??,??) VALUES (?,?,?,?,?)';
    console.log("3")
    let query = mysql.format(insertQuery,["shop","iD","name","description","price","imageUrl",iD,name,description,price,imageUrl]);
    con.query(query,(err, response) => {
        if(err) {
            console.error(err);
            return;
        }
        // rows added
        console.log(response);
    });
}


database.updateOne = (iD,name,description,price,imageUrl) =>{

    let insertQuery = 'update ?? set name = ? ,description = ? , price = ? , imageUrl = ? where iD = ?';
    console.log("4")
    let query = mysql.format(insertQuery,["shop",name,description,price,imageUrl,iD]);
    con.query(query,(err, response) => {
        if(err) {
            console.error(err);
            return;
        }
        // rows added
        console.log(response);
    });
}
// timeout just to avoid firing query before connection happens
database.delete = (iD) =>{

    let insertQuery = 'delete from ?? where iD =?';
    console.log("5")
    let query = mysql.format(insertQuery,["shop",iD]);
    con.query(query,(err, response) => {
        if(err) {
            console.error(err);
            return;
        }
        // rows added
        console.log(response);
    });
}






///////////////////////////////// Cart Item ///////////////////////////////////////////

database.CartaddOne = (id,productId,productName,qty,price) =>{
  let insertQuery = 'INSERT INTO ?? (??,??,??,??,??) VALUES (?,?,?,?,?)';
  console.log("6")
  let query = mysql.format(insertQuery,["cartItem","id","productId","productName","qty","price" ,id,productId,productName,qty,price]);
  con.query(query,(err, response) => {
      if(err) {
          console.error(err);
          return;
      }
      // rows added
      console.log(response);
  });
}


database.getcarts = ()=>{
  return new Promise((resolve, reject) =>{
      con.query('select * from cartItem' ,(err,results)=>{
          if(err)
          {

              return reject(err);

          }
          console.log("get carts 7");
          return resolve(results)
      })
  })
}

database.cartdelete = (id) =>{

  let Query = 'delete from ?? where id =?';
  console.log("8")
  let query = mysql.format(Query,["cartItem",id]);
  con.query(query,(err, response) => {
      if(err) {
          console.error(err);
          return;
      }
      // rows added
      console.log(response);
  });
}

/* id: number;
  productId: number;
  productName: string;

  qty: number;
  price: number; */

// database.updatecart = (productId,productName,qty,price) =>{

//   let insertQuery = 'update ?? set productName = ? ,qty = ? , price = ?  where productId = ?';
//   console.log("9")
//   let query = mysql.format(insertQuery,["cartItem",productName,qty,price,productId]);
//   con.query(query,(err, response) => {
//       if(err) {
//           console.error(err);
//           return;
//       }
//       // rows added
//       console.log(response);
//   });
// }

////////////////////////////////////////// Wish List ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


database.addWishList = (id,product_id) =>{
  let insertQuery = 'INSERT INTO ?? (??,??) VALUES (?,?)';
  console.log("9")
  let query = mysql.format(insertQuery,["wishlist","id","product_id" ,id,product_id]);
  con.query(query,(err, response) => {
      if(err) {
          console.error(err);
          return;
      }
      // rows added
      console.log(response);
  });
}


database.getwishlist = ()=>{
  return new Promise((resolve, reject) =>{
      con.query('select * from wishlist' ,(err,results)=>{
          if(err)
          {

              return reject(err);

          }
         console.log("get wish list 10");
          return resolve(results)
      })
  })
}

database.deletewishlist = (id) =>{

  let Query = 'delete from ?? where product_id =?';
  console.log("11")
  let query = mysql.format(Query,["wishlist",id]);
  con.query(query,(err, response) => {
      if(err) {
          console.error(err);
          return;
      }
      // rows added
      console.log(response);
  });
}

module.exports = database
