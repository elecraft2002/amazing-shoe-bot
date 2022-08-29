import React, { useState } from 'react'
import "./shoe.css"
import { Convert, Object } from "../../Pages/shoes/upcoming"
import Button from '../button/Button'
import ShoeDetail from './ShoeDetail'

export default function Shoe(props: { shoe: Object, index: number }) {
    const [isShoeBuyOpenned, handleShoeBuy] = useState(false)

    return (
        <>
            <div className='shoe__row'>
                <div className='shoe__info'>
                    <h2>{props.shoe?.publishedContent.properties.title}</h2>
                    <p>{props.shoe?.publishedContent.properties.coverCard.properties.title}</p>
                </div>
                <div>Price: {props.shoe?.productInfo[0].merchPrice.fullPrice} {props.shoe?.productInfo[0].merchPrice.currency}</div>
                <figure className='shoe__image__container'>
                    <img src={props.shoe?.publishedContent.properties.coverCard.properties.squarishURL} alt="" />
                </figure>
                <Button onClick={() => { handleShoeBuy(true) }}>Buy</Button>
            </div>
            {isShoeBuyOpenned ? <ShoeDetail handleShoeBuy={handleShoeBuy} shoe={props.shoe} /> : null}
        </>
    )
}
