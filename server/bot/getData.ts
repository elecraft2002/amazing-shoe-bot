//import axios from 'axios';
const axios = require("axios")
//import int from "./import"
import { Convert, Upcoming } from "./Upcoming"

const getUpcoming = async (): Promise<Upcoming> => {
    const url = 'https://api.nike.com/product_feed/threads/v3/?anchor=0&count=50&filter=marketplace%28CZ%29&filter=language%28cs%29&filter=upcoming%28true%29&filter=channelId%28010794e5-35fe-4e32-aaff-cd2c74f89d61%29&filter=exclusiveAccess%28true%2Cfalse%29&sort=effectiveStartSellDateAsc'
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
    const { data } = await axios.get(url, config)
    return data

}
async function xds() {
    const xd = await getUpcoming()
    console.log(xd.objects[0].publishedContent.nodes[0].properties.actions[0])

}
xds()