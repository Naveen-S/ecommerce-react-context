import React, { useContext } from 'react'
import {Link} from 'react-router-dom';
import { ProductContext } from '../context';
import './Details.css'

export default function Details () {
    let { detailProduct } = useContext(ProductContext);
    console.log('details product', detailProduct);

    const displayPrice = (price) => {
        return `$${price}`;
    }
    const { img, info, price, title, company } = detailProduct; 
    return (
        <div className="container details-container p-3">
            <div className="left-side">
                <img src={img} alt="" className="img-phone"/>
            </div>
            <div className="right-side p-5 mt-2">
                <h3 className="title py-2">
                    {title}
                </h3>
                <h5 className="company text-uppercase font-weight-bold">
                    {company}
                </h5>
                <p className="price">
                    Price: {displayPrice(price)}
                </p>
                <p className="info pt-2">
                    <span className="d-block font-weight-bold py-2 info-heading"> Some info about the product: </span>
                    <span className="info-body">
                        {info}
                    </span>
                </p>
                <div className="button-container py-3">
                    <Link className="btn-style text-bright border-bright p-2 mr-2" to="/" >
                        Back to Products
                    </Link>
                    <Link className="btn-style text-yellow border-yellow p-2 ml-3" to="">
                        Add to Cart
                    </Link>
                </div>
            </div>
        </div>
    )
}
