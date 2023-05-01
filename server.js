const express = require('express');
const app = express();
// const path = require('path');

require('dotenv').config();


app.use(express.json());
app.use(express.urlencoded({ extended:true }));

const customers = require('./routes/customers');
const items = require('./routes/items');

app.use(express.static('./public'));

app.use("/api/v1", customers);
app.use("/api/v1", items);

app.all("*", (req, res)=>{
    
   const data = { message: "Ooopsss Error 404 Resources Not Found..."};
   res.status(404).json(data);
   
});

const port = process.env.PORT;
app.listen(port,()=>{
    console.log(`Listening on Port ${port}...`);

});