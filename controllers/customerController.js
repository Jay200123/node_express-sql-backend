const con = require('../database/mysql');

exports.getCustomers = async(req, res)=>{

    try{
        const customers = await new Promise((resolve, reject)=>{
            
            const sql = "SELECT * FROM customers";

            con.query(sql, (err, result)=>{

                if(err){
                    reject(err);
                }else{
                    resolve(result);
                }
            });
        });//end of promise

        res.status(200).json(customers);
    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
}; //end of getCustomers

exports.storeCustomer = async(req, res)=>{

    try{
        const data = await new Promise((resolve, reject)=>{

            const  {title, fname, lname, addressline, town, zipcode, phone, creditlimit, level } = req.body;
            const value = [ title, fname, lname, addressline, town, zipcode, phone, creditlimit, level ];

            const sql = "INSERT INTO customers(title, fname, lname, addressline, town, zipcode, phone, creditlimit, level ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

            con.query(sql, value, (err, result)=>{
                
                if(err){
                    reject(err);
                }else{
                    resolve(result);
                }
            });
        });//end of promise
        res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
} //end of storeCustomer