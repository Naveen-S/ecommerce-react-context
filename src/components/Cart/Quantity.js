import React from 'react'
import './Quantity.css';

export default function Quantity({id, count, increment, decrement}) {
    return (
        <div className="row d-flex justify-content-center">
            <button className="item minus cursor-pointer" onClick={() => { decrement(id);}}>
                <span className="item-text-span"> - </span>
            </button>
            <div className="item number">
                <span className="item-text-span"> {count} </span>
            </div>
            <button className="item plus cursor-pointer" onClick={() => { increment(id);}}>
                <span className="item-text-span"> + </span>
            </button>
        </div>
    )
}
