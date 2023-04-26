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

exports.getOneCustomer = async(req, res)=>{

    try{

        const data = await new Promise((resolve, reject)=>{

            const customerId = req.params.id;
            const sql = "SELECT * FROM customers WHERE customer_id = ?";

            con.query(sql, [customerId],(err, result)=>{

                if(err){
                    reject(err);
                }else{
                    resolve(result);
                }
            });
        });//end of promise
        
        res.status(201).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
}// end for getOneCustomer

exports.updateCustomer = async(req, res)=>{

    try{
        const data = await new Promise((resolve, reject)=>{

            const customerId = req.params.id;

            const { title, fname, lname, addressline, town, zipcode, phone, creditlimit, level } = req.body;
            const values = [title, fname, lname, addressline, town, zipcode, phone, creditlimit, level, customerId ];

            const sql = "UPDATE customers SET title=?, fname=?, lname=?, addressline=?, town=?, zipcode=?, phone=?, creditlimit=?, level=? WHERE customer_id=?";

            con.query(sql, values, (err, result)=>{

                if(err){
                    reject(err);
                }else{
                    resolve(result);
                }
            });
        });//end for promise
        res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
}//end for updateCustomer

exports.deleteCustomer = async(req, res)=>{

    try{

        const data = await new Promise((resolve, reject)=>{

            const customerId = req.params.id;
            const sql = "DELETE FROM customers WHERE customer_id=?";

            con.query(sql, [customerId],(err, result)=>{

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
}//end for deleteCustomer