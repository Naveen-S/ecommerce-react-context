import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { ProductContext } from '../context';
import './Modal.css';


export default function Modal() {
    const { modalProduct, modalOpen, closeModal } = useContext(ProductContext);
    const { img, price, title, inCart } = modalProduct;

    const displayPrice = price => {
        return `$${price}`;
    };
    if (!modalOpen) {
        return <div></div>;
    } else {
        return (
            modalOpen &&
            <div className="modal-container modal">
                <div className="modal-body col-8 col-md-6 col-lg-4 mx-auto text-center">
                    <h5 className="text-uppercase font-weight-bold p-3"> Item added to the Cart</h5>
                    <div>
                        <img src={img} alt="phone" className="modal-img" />
                        <h6 className="font-weight-bold"> {title} </h6>
                        <p className="font-weight-bold">Price: {displayPrice(price)}</p>
                    </div>
                    <div className="button-container py-3 d-flex justify-content-center">
                        <div onClick={() => {closeModal()}}>
                            <Link
                                className="btn-style text-bright border-bright mr-2 w-50 p-2"
                                to="/">
                                Continue Shopping
                            </Link>
                        </div>
                        <div onClick={() => {closeModal()}}>
                            <Link
                                className="btn-style text-yellow border-yellow w-50 p-2"
                                to="/cart" disabled={inCart ? true : false} >
                                Go to cart
                            </Link>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}
