import React from 'react'

export default function CartHeader() {
    return (
        <div className="d-none d-lg-block">
            <div className="d-flex justify-content-center align-items-center text-center row ">
                <div className="products col-2">
                    <h5 className="font-weight-bold text-uppercase text-black">Product</h5>
                </div>
                <div className="name col-2">
                    <h5 className="font-weight-bold text-uppercase text-black">Name</h5>
                </div>
                <div className="col-2">
                    <h5 className="font-weight-bold text-uppercase text-black">Price</h5>
                </div>
                <div className="quantity col-2">
                    <h5 className="font-weight-bold text-uppercase text-black">Quantity</h5>
                </div>
                <div className="remove col-2" >
                    <h5 className="font-weight-bold text-uppercase text-black">Remove</h5>
                </div>
                <div className="total col-2">
                    <h5 className="font-weight-bold text-uppercase text-black">Total</h5>
                </div>
            </div>
        </div>

    )
}
