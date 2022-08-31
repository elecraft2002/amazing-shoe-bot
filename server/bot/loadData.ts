import fs from "fs";

const configPath = "./data/config.json";



/* enum DataType {
    "profiles", "accounts", "jobs"
} */
type DataType = "profiles" | "accounts" | "jobs"


export const loadData = async (type: DataType): Promise<JSON> => {
    const data = fs.readFileSync(configPath, "utf8")
    const parsedData = JSON.parse(data)
    //console.log("Loaded!")
    return parsedData[type]
}
type ParsedData = { type: { data: object, id: string }[] }


export const saveData = async (type: DataType, updatedData: JSON, id: string): Promise<void> => {
    const data = fs.readFileSync(configPath, "utf8")
    let parsedData: ParsedData = JSON.parse(data)
    const updateIndex: number = parsedData[type].findIndex((e: { id: string; }) => {
        return e.id === id
    })

    //console.log("ID: " + updateIndex)
    if (updateIndex === -1)
        parsedData[type].push({ data: updatedData, id })
    else
        parsedData[type][updateIndex] = { data: updatedData, id }

    const parsedDataString: string = JSON.stringify(parsedData)
    //console.log(parsedDataString)
    fs.writeFileSync(configPath, parsedDataString, "utf8")
    return
}

export const removeData = async (type: DataType, id: string): Promise<void> => {
    const data = fs.readFileSync(configPath, "utf8")
    let parsedData: ParsedData = JSON.parse(data)
    const removeIndex: number = parsedData[type].findIndex((e: { id: string; }) => {
        return e.id === id
    })

    if (removeIndex === -1)
        return
    parsedData[type].splice(removeIndex, 1)

    const parsedDataString: string = JSON.stringify(parsedData)
    //console.log(parsedDataString)
    fs.writeFileSync(configPath, parsedDataString, "utf8")
    return
}

/* 
module.exports = loadData
module.exports = saveData */