"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 4000;
//New imports
const http = require('http').Server(app);
const cors_1 = __importDefault(require("cors"));
const getUpcoming_1 = require("./bot/getUpcoming");
const loadData_1 = require("./bot/loadData");
console.log();
app.use((0, cors_1.default)());
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
        const data = () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield (0, getUpcoming_1.getUpcoming)();
            console.log("🦅 Sending to: " + socket.id);
            socket.emit("getUpcomingResponse", response);
        });
        console.log(socket.id);
        data();
    });
    socket.on("loadUserData", (data) => {
        const request = () => __awaiter(void 0, void 0, void 0, function* () {
            socket.emit(`loadedUserData-${data}`, yield (0, loadData_1.loadData)(data));
        });
        request();
    });
    socket.on("saveUserData", (data) => {
        const saveUser = () => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, loadData_1.saveData)(data.type, data.data, data.id);
            socket.emit(`loadedUserData-${data.type}`, yield (0, loadData_1.loadData)(data.type));
        });
        saveUser();
    });
    socket.on("removeUserData", (data) => {
        const saveUser = () => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, loadData_1.removeData)(data.type, data.id);
            console.log("Removed");
            socket.emit(`loadedUserData-${data.type}`, yield (0, loadData_1.loadData)(data.type));
        });
        saveUser();
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
