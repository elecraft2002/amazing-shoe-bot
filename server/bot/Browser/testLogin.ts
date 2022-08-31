import puppeteer from "puppeteer-extra"
import StealthPlugin from "puppeteer-extra-plugin-stealth"

puppeteer.use(StealthPlugin())

const browserConfig = require("./browserConfig.json")
const settings = {
    location: "cz"
}
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

function waitFor(time: number) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}

console.log(browserConfig)
interface Login {
    login: {
        email: string,
        password: string
    }[]
}

export const testLogin = async (email: string, password: string) => {
    console.log(email, password)
    const browser = await puppeteer.launch(browserConfig);
    const url = `https://www.nike.com/login`
    const page = await browser.newPage()
    await page.setRequestInterception(true);
    page.on('request', (request) => {
        if (['image', 'stylesheet', 'font'].indexOf(request.resourceType()) !== -1) {
            request.abort();
        } else {
            request.continue();
        }
    });
    await page.goto(url, { waitUntil: "load" })
    /* await page.evaluate((): void => {
        const loginBtn = document.querySelector("#hf_title_signin_membership") as HTMLElement | null
        loginBtn.click()
    })
    await page.waitForNavigation({ waitUntil: 'networkidle2' }) */
    await page.focus("#username")
    await page.keyboard.type(email)
    await waitFor(1000)
   // await page.click(`button[type="submit"]`)


    //await (await page.$("#hf_title_signin_membership")).click()
}
testLogin("cenenaci.cz@gmail.com", "xd")