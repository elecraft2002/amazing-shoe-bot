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
exports.testLogin = void 0;
const puppeteer_extra_1 = __importDefault(require("puppeteer-extra"));
const puppeteer_extra_plugin_stealth_1 = __importDefault(require("puppeteer-extra-plugin-stealth"));
puppeteer_extra_1.default.use((0, puppeteer_extra_plugin_stealth_1.default)());
const browserConfig = require("./browserConfig.json");
const settings = {
    location: "cz"
};
/* {
    "headless": false,
    "args": [
        "--no-sandbox",
        "--disable-background-networking",
        "--disable-default-apps",
        "--disable-extensions",
        "--disable-sync",
        "--disable-translate",
        "--headless",
        "--hide-scrollbars",
        "--metrics-recording-only",
        "--mute-audio",
        "--no-first-run",
        "--safebrowsing-disable-auto-update",
        "--ignore-certificate-errors",
        "--ignore-ssl-errors",
        "--ignore-certificate-errors-spki-list",
        "--user-data-dir=/tmp"
    ]
} */
function waitFor(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time);
    });
}
console.log(browserConfig);
const testLogin = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(email, password);
    const browser = yield puppeteer_extra_1.default.launch(browserConfig);
    const url = `https://www.nike.com/login`;
    const page = yield browser.newPage();
    yield page.setRequestInterception(true);
    page.on('request', (request) => {
        if (['image', 'stylesheet', 'font'].indexOf(request.resourceType()) !== -1) {
            request.abort();
        }
        else {
            request.continue();
        }
    });
    yield page.goto(url, { waitUntil: "load" });
    /* await page.evaluate((): void => {
        const loginBtn = document.querySelector("#hf_title_signin_membership") as HTMLElement | null
        loginBtn.click()
    })
    await page.waitForNavigation({ waitUntil: 'networkidle2' }) */
    yield page.focus("#username");
    yield page.keyboard.type(email);
    yield waitFor(1000);
    // await page.click(`button[type="submit"]`)
    //await (await page.$("#hf_title_signin_membership")).click()
});
exports.testLogin = testLogin;
(0, exports.testLogin)("cenenaci.cz@gmail.com", "xd");
