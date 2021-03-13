const Counter = require('../models/Counter')

class CounterController {
    async createCounter(req, res) {

        const counter = await Counter.create({
            counter: req.body.counter
        })

        req.io.sokets.in( counter.counter ).emit("counter", counter)

        return res.json(counter)
    }
}

module.exports = new CounterController();