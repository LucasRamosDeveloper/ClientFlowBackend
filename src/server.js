const express = require("express");
const mongoose = require("mongoose")
const cors = require("cors")

const app = express();

app.use(cors());

const server = require('http').Server(app)
const io = require('socket.io')(server)

io.on('connection', socket => {
    socket.on('connectRoom', box => {
        socket.join(box)
    })
})

mongoose.connect(
    "mongodb+srv://ClientFlow:ClientFlow@omnistack.jza2y.mongodb.net/OmniStack?retryWrites=true&w=majority", 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)

app.use((req, res, next) => {
    req.io = io;

    return next();
})

app.use(express.json());

app.use(require('./routes'));

server.listen(process.env.PORT || 3333);