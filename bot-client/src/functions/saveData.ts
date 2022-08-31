import { Socket } from 'socket.io-client'

type DataType = "profiles" | "accounts" | "jobs"
export default async (data: JSON, id: string, type: DataType, socket: Socket, setLoadingState: React.Dispatch<React.SetStateAction<boolean>>): Promise<any> => {
    setLoadingState(true)
    socket.emit("saveUserData", { data, id, type })
    //console.log(data, id, type)
    socket.on(`savedUserData-${type}`, response => {
        setLoadingState(false)
        return response
    })
} 