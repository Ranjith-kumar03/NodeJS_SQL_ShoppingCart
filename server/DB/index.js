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
            console.log("Connected! stupod");
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
            console.log("Connected! stupod get one");
            return resolve(results[0])
        })
    })
}
//https://www.youtube.com/watch?v=Kez-PXG4jCE



database.addOne = (iD,name,description,price,imageUrl) =>{
    let insertQuery = 'INSERT INTO ?? (??,??,??,??,??) VALUES (?,?,?,?,?)';
    console.log("add triggerd")
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
    console.log("add triggerd")
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
    console.log("delete Triggered")
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

module.exports = database