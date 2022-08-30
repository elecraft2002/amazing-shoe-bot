import fs from "fs";

const configPath = "./data/config.json";

/* const getData = () => {
    return fs.readFileSync(configPath,"utf8")
} */
const data = fs.readFileSync(configPath, "utf8")

console.log(data)