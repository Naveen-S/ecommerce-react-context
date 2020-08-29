import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Quantity from './Quantity';
import './CartItem.css';

export default function CartItem({ product, methods }) {
    const {increment, decrement, removeItem } = methods;
    const {id, img, title, price, count, total } = product;
    return (
        <div className="d-flex justify-content-center align-items-center text-center row">
            <div className="products col-lg-2 col-10">
                <img src={img} alt="" className="img-phone cart-phone" />
            </div>
            <div className="name col-lg-2 col-10 p-1">
                <span className="d-lg-none font-weight-bold mr-1">
                     Product: 
                </span>
                {title}
            </div>
            <div className="col-lg-2 col-10 p-1">
            <span className="d-lg-none font-weight-bold mr-1">
                     Price: 
                </span>
                {price}
            </div>
            <div className="quantity col-lg-2 col-10 p-1">
                <Quantity id={id} count={count} increment={increment} decrement={decrement}/>
            </div>
            <div className="remove col-lg-2 col-10 p-1" onClick={() => {
                        removeItem(id)
                    }}>
                <FontAwesomeIcon className="cart text-black-50 cursor-pointer" icon={faTrash}  />
            </div>
            <div className="total col-lg-2 col-10 p-1">
            <span className="font-weight-bold mr-1">
                Item total: </span> ${total}
            </div>
        </div>
    )
}
