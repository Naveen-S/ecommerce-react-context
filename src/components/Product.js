import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartPlus} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import './Product.css';

export default class Product extends Component {

    renderPrice = (price)  => {
        return `$ ${price}`; 
    }

    render() {
        const {img, title, price, inCart} = this.props.product;
        return (
            <div className="card product" >
                <div className="product-wrapper">
                    <Link to="/details">
                        <img className="card-img-top product-img text-center" src={img} alt="ima" />
                    </Link>
                    {
                        inCart && <div className="inCart text-white disabled">
                            In cart
                        </div>
                    }
                    {
                        !inCart && <div className="inCart">
                            <FontAwesomeIcon className="cart" icon={faCartPlus} onClick={() => {
                                console.log('Add to cart called');
                            }}/>
                        </div>
                    }
                </div>
                
                
                <div className="card-body product-body">
                <p className="card-text text-center">
                    {title}
                </p>
                <p className="card-text text-center text-bright font-weight-bold">
                    {this.renderPrice(price)}
                </p>
                </div>
            </div>
        )
    }
}
