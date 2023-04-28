const express = require('express');
const app = express();

require('dotenv').config();


app.use(express.json());
app.use(express.urlencoded({ extended:true }));

const customers = require('./routes/customers');
app.use("/api/v1", customers);

const items = require('./routes/items');
app.use("/api/v1", items);

app.get('/', (req, res)=>{
    
    const data = { message: "Welcome to Our Home Page!"};
    res.status(200).json(data);
});
app.all("*", (req, res)=>{

    const data = { message: "Error 404 Resource Not Found..."};
    res.status(404).json(data);
});

const port = process.env.PORT;
app.listen(port,()=>{
    console.log(`Listening on Port ${port}...`);

});