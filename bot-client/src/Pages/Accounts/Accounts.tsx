import React from 'react'
import { Socket } from 'socket.io-client'
import "./accounts.css"
interface AccountsInterface {
    socket: Socket,
    setLoadingState: React.Dispatch<React.SetStateAction<boolean>>
}
export default function Accounts({ socket, setLoadingState }: AccountsInterface) {
  return (
    <div>xddd</div>
  )
}
