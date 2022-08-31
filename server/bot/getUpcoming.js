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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUpcoming = void 0;
//import axios from 'axios';
const axios = require("axios");
const upcoming = require("./Upcoming");
const getUpcoming = () => __awaiter(void 0, void 0, void 0, function* () {
    const url = 'https://api.nike.com/product_feed/threads/v3/?anchor=0&count=50&filter=marketplace%28CZ%29&filter=language%28cs%29&filter=upcoming%28true%29&filter=channelId%28010794e5-35fe-4e32-aaff-cd2c74f89d61%29&filter=exclusiveAccess%28true%2Cfalse%29&sort=effectiveStartSellDateAsc';
    const config = {
        method: 'get',
        headers: {
            'authority': 'api.nike.com',
            'accept': '*/*',
            'accept-language': 'cs-CZ,cs;q=0.9',
            'appid': 'com.nike.commerce.snkrs.web',
            'cache-control': 'no-cache',
            'content-type': 'application/json; charset=UTF-8',
            'origin': 'https://www.nike.com',
            'pragma': 'no-cache',
            'referer': 'https://www.nike.com/',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
        }
    };
    const { data } = yield axios.get(url, config);
    return data;
});
exports.getUpcoming = getUpcoming;
