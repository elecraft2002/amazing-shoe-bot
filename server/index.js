const express = require('express');
const app = express();
const PORT = 4000;
//New imports
const http = require('http').Server(app);
const cors = require('cors');
//import { getUpcoming } from "./bot/getUpcoming"
const getUpcoming = require("./bot/getUpcoming.ts");
app.use(cors());
const socketIO = require('socket.io')(http, {
    cors: {
        origin: "http://localhost:3000"
    }
});
//Add this before the app.get() block
socketIO.on('connection', (socket) => {
    console.log(`⚡: ${socket.id} user just connected!`);
    socket.on('disconnect', () => {
        console.log('🔥: A user disconnected');
    });
    //Listeners
    socket.on("getUpcoming", () => {
        const data = async () => {
            const response = await getUpcoming();
            console.log("🦅 Sending to: " + socket.id);
            socket.emit("getUpcomingResponse", response);
        };
        console.log(socket.id);
        data();
    });
});
app.get('/api', (req, res) => {
    res.json({
        message: 'Hello world',
    });
});
http.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
