require('dotenv').config()
const express = require('express')
const app = express();
const httpServer = require("http").createServer(app);
const options = {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
};
const PORT = process.env.PORT || 5000
const pool = require('../server/config/database')
const io = require("socket.io")(httpServer, options);

app.use(express.json())


io.on("connection", socket => {
    console.log(`Server Connected to Socket ${socket.id}`)

    socket.on('test', (data) => {
        pool.query('SELECT * FROM users',
            function (err, rows, fields) {
                // Connection is automatically released when query resolves
                socket.emit('onReceived', rows)
                console.log(rows)              
            })

        console.log(JSON.stringify(data))
    })

    socket.on('sendAlert', () => {
        console.log('alert sent!')
        pool.query('SELECT * FROM alerts',
            function (err, rows, fields) {
                // Connection is automatically released when query resolves
                console.log(rows)
                socket.broadcast.emit('onAlertSend', rows)
                console.log('emitted!')
            
            })

    })

});

httpServer.listen(PORT, () => console.log(`Server is Running on port ${PORT}`));
// WARNING !!! app.listen(3000); will not work here, as it creates a new HTTP server
