const productsDB = require('../data/productsDB')

module.exports = {
    detail: (req, res)=>{
        let producto = productsDB.find(producto=>{
            return producto.id === Number(req.params.id) && producto.category === req.params.category
        })
        res.send(producto)
    }
}