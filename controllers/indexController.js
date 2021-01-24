const productsDB = require('../data/productsDB')

module.exports = {
    index: (req, res)=>{
        let inSale = productsDB.filter(producto => {
                return producto.category == "in-sale"
        })
        let visited = productsDB.filter(producto => {
                return producto.category == "visited"
        })
        
        res.render('index', {
            title: "Home-page",
            productsInSale: inSale,
            productsVisited: visited
        })
    }
}