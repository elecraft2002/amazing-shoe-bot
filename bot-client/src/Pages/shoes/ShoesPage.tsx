import React, { useEffect, useState } from 'react'
import { Socket } from 'socket.io-client'
import Button from '../../components/button/Button'
import io from 'socket.io-client';
import { Convert, Upcoming, Object } from "./upcoming"
import Shoe from '../../components/shoe/Shoe';

export default function ShoesPage(props: { socket: Socket, setLoadingState: React.Dispatch<React.SetStateAction<boolean>> }) {

    const [upcomingShoes, loadUpcomingShoes] = useState<Upcoming | undefined>(undefined)
    const handleShoeLoad = () => {
        props.setLoadingState(true)
        console.log(props.socket.id)
        props.socket.emit("getUpcoming");
    }
    props.socket.on("getUpcomingResponse", (response: Upcoming) => {
        console.log(response.objects.length)
        loadUpcomingShoes(response)
        props.setLoadingState(false)
    })
    useEffect(()=>{
        handleShoeLoad()
    },[])
    return (
        <>
            <div>ShoesPage</div>
            <Button onClick={handleShoeLoad} >Reload Shoes</Button>
            {upcomingShoes?.objects.map((shoe: Object, i: number) => {
                return <Shoe key={shoe.id} index={i} shoe={shoe} />
            })}
        </>
    )
}
