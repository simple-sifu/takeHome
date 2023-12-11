const data = require('../data');

const ProductController = {
    getitem(req, res, next){
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
    }
}

module.exports = ProductController;