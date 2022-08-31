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
exports.removeData = exports.saveData = exports.loadData = void 0;
const fs_1 = __importDefault(require("fs"));
const configPath = "./data/config.json";
const loadData = (type) => __awaiter(void 0, void 0, void 0, function* () {
    const data = fs_1.default.readFileSync(configPath, "utf8");
    const parsedData = JSON.parse(data);
    //console.log("Loaded!")
    return parsedData[type];
});
exports.loadData = loadData;
const saveData = (type, updatedData, id) => __awaiter(void 0, void 0, void 0, function* () {
    const data = fs_1.default.readFileSync(configPath, "utf8");
    let parsedData = JSON.parse(data);
    const updateIndex = parsedData[type].findIndex((e) => {
        return e.id === id;
    });
    //console.log("ID: " + updateIndex)
    if (updateIndex === -1)
        parsedData[type].push({ data: updatedData, id });
    else
        parsedData[type][updateIndex] = { data: updatedData, id };
    const parsedDataString = JSON.stringify(parsedData);
    //console.log(parsedDataString)
    fs_1.default.writeFileSync(configPath, parsedDataString, "utf8");
    return;
});
exports.saveData = saveData;
const removeData = (type, id) => __awaiter(void 0, void 0, void 0, function* () {
    const data = fs_1.default.readFileSync(configPath, "utf8");
    let parsedData = JSON.parse(data);
    const removeIndex = parsedData[type].findIndex((e) => {
        return e.id === id;
    });
    if (removeIndex === -1)
        return;
    parsedData[type].splice(removeIndex, 1);
    const parsedDataString = JSON.stringify(parsedData);
    //console.log(parsedDataString)
    fs_1.default.writeFileSync(configPath, parsedDataString, "utf8");
    return;
});
exports.removeData = removeData;
/*
module.exports = loadData
module.exports = saveData */ 
