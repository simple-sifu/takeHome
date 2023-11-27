

/**
 * The Server Can be configured and created here...
 * 
 * You can find the JSON Data file here in the Data module. Feel free to impliment a framework if needed.
 */

/*
-- This is the product data, you can view it in the file itself for more details 
{
    "_id": "019",
    "isActive": "false",
    "price": "23.00",
    "picture": "/img/products/N16501_430.png",
    "name": "Damage Reverse Thickening Conditioner",
    "about": "Dolor voluptate velit consequat duis. Aute ad officia fugiat esse anim exercitation voluptate excepteur pariatur sit culpa duis qui esse. Labore amet ad eu veniam nostrud minim labore aliquip est sint voluptate nostrud reprehenderit. Ipsum nostrud culpa consequat reprehenderit.",
    "tags": [
        "ojon",
        "conditioner"
    ]
}
*/
const express = require('express');
const path = require('path');
const app = express();
app.use(express.json());
const data      = require('./data');
const http      = require('http');
const hostname  = 'localhost';
const port      = 3035;
const cors = require('cors');



app.get('/', (req, res) => {
    return res.status(200).send("Hello, World!").end();
});
app.use(cors());

app.get('/item',  (req, res, next) => {
    try{
        const query = req.query.query.toLowerCase();
        const item = [];
        for (let i = 0; i < data.length; i++){
            console.log(data[i].name);
            if ((data[i].name.toLowerCase().includes(query) || 
            data[i].tags.includes(query)) && data[i].isActive === "true"){
                item.push(data[i]);
            }
        }
        console.log(item);
        res.locals.item = item;
        return next();
    }catch(error){
        return error;
    }
}, (req, res) => {
    return res.status(201).json(res.locals.item);
})

app.use((req, res) => {
    res.status(200).send("Response goes in here....").end();
})

app.listen(port, () => {
    console.log(`Listening on PORT: ${port}`);
})

