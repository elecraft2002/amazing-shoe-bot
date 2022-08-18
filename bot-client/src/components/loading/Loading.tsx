import React from 'react'
import "./loading.css"

export default function Loading() {
    return (
        <div className='loading__container'>
            <div className='loading__center'>
                <p>Loading</p>
                <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
            </div>
        </div>
    )
}
