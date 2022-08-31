
import express from 'express';
const app = express();
const PORT = 4000;

//New imports
const http = require('http').Server(app);
import cors from 'cors';

import { getUpcoming } from "./bot/getUpcoming";
import { loadData, saveData, removeData } from "./bot/loadData";
console.log()

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
    //Pošle nadcházející seznam bot
    socket.on("getUpcoming", () => {
        const data = async () => {
            const response = await getUpcoming()
            console.log("🦅 Sending to: " + socket.id)
            socket.emit("getUpcomingResponse", response)
        }
        console.log(socket.id)
        data()

    })
    //Načte data ze serveru
    type DataType = "profiles" | "accounts" | "jobs"
    socket.on("loadUserData", (data: DataType) => {
        const request = async () => {
            socket.emit(`loadedUserData-${data}`, await loadData(data))
        }
        request()
    })
    //Uloží data na server
    interface Data {
        firstName: string;
        lastName: string;
        age: string;
        profileName: string;
        phoneNumber: string;
        cardNumber: string;
        expireDate: string;
        cvv: string;
        adress1: string;
        country: string;
        city: string;
        zipCode: string;
    }
    socket.on("saveUserData", (data: { type: DataType, data: JSON, id: string }) => {
        const saveUser = async () => {

            await saveData(data.type, data.data, data.id)
            socket.emit(`loadedUserData-${data.type}`, await loadData(data.type))
        }
        saveUser()
    })
    socket.on("removeUserData", (data: { type: DataType, id: string }) => {
        const saveUser = async () => {

            await removeData(data.type, data.id)
            console.log("Removed")
            socket.emit(`loadedUserData-${data.type}`, await loadData(data.type))

        }
        saveUser()
    })
});

app.get('/api', (req: any, res: any) => {
    res.json({
        message: 'Hello world',
    });
});

http.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

