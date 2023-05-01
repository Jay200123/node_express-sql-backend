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

exports.getOneItem = async(req, res)=>{

    try{

        const item = await new Promise((resolve, reject)=>{

            const itemId = req.params.id;

            const sql = "SELECT * FROM item WHERE item_id = ?";

            con.query(sql, [itemId], (err, result)=>{

                if(err){
                    reject(err);
                }else{
                    resolve(result);
                }
            });
        });//end of promise
        res.status(200).json(item);
    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
}//end of getOneItem

exports.updateItem = async(req, res)=>{

    try{

        const data = await new Promise((resolve, reject)=>{

            const itemId = req.params.id;
            const { description, cost_price, sell_price, discontinued, category_id } = req.body;
            const values = [ description, cost_price, sell_price, discontinued, category_id, itemId ];

            const sql = "UPDATE item SET description=?, cost_price=?, sell_price=?, discontinued=?, category_id=? WHERE item_id=?";

            con.query(sql, values, (err, result)=>{

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
}//end of updateItem

exports.deleteItem = async(req, res)=>{

    try{
        const data = await new Promise((resolve, reject)=>{

            const itemId = req.params.id;
            const sql  = "DELETE FROM item WHERE item_id=?";

            con.query(sql, [itemId],(err, result)=>{

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
}//end of deleteItem

exports.ItemStocks = async(req, res)=>{

    try{
        const stocks = await new Promise((resolve, reject)=>{

            const sql = "SELECT item.description, stock.quantity FROM item INNER JOIN stock ON  item.item_id = stock.item_id";

            con.query(sql, (err, result)=>{
                
                if(err){
                    reject(err);
                }else{
                    resolve(result);
                }
            });
        });//end of promise
        res.status(200).json(stocks);
    }catch(err){
        res.status(500).json(err);

    }
}//end for itemStocks
