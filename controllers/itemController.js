const con = require('../database/mysql');

exports.getItems = async(req, res)=>{

    try{

        const items = await new Promise((resolve, reject)=>{

            const sql = "SELECT * FROM item";

            con.query(sql, (err, result)=>{

                if(err){
                    reject(err);
                }else{
                    resolve(result);
                }
            });
        });//end of promise
        res.status(200).json(items);
    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
}//end of getItems

exports.storeItem = async(req, res)=>{

    try{
        const data = await new Promise((resolve, reject)=>{

            const { description, cost_price, sell_price, discontinued, category_id } = req.body;
            const values = [ description, cost_price, sell_price, discontinued, category_id ];

            const sql = "INSERT INTO item(description, cost_price, sell_price, discontinued, category_id) VALUES(?, ?, ?, ?, ?)";

            con.query(sql, values,(err, result)=>{

                if(err){
                    reject(err);
                }else{
                    resolve(result);
                }
            });
         });// end of promise
         res.status(201).json(data);

    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
}//end of storeItem