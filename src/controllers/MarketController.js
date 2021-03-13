const Market = require('../models/Market')

class MarketController {
    async createMarket(req, res) {

        //const market = await Market.create({ market: 'Rio Max' })
        const market = await Market.create({
            market: req.body.market
        })

        return res.json(market)
    }
}

module.exports = new MarketController();