import React from 'react'
import "./loading.css"

export default function Loading() {
    return (
        <div className='loading__container'>
            <div>
                <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
            </div>
        </div>
    )
}
