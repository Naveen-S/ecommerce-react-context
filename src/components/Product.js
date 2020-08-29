import React, {useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { ProductContext } from '../context';
import './Product.css';

export default function Product({product}) {
    const {handleDetails, addToCart, openModal} = useContext(ProductContext);
    const renderPrice = (price) => {
        return `$ ${price}`;
    }

    const { id, img, title, price, inCart } = product;
    return (
        <div className="card product" >
            <div className="product-wrapper" onClick={() => { handleDetails(id); }}>
                <Link to="/details">
                    <img className="card-img-top product-img text-center" src={img} alt="ima" />
                </Link>
                {
                    inCart && <div className="inCart text-white disabled">
                        In cart
                        </div>
                }
                {
                    !inCart && <div className="inCart" onClick={() => {
                            addToCart(id);
                            openModal(id);
                        }}>
                        <FontAwesomeIcon className="cart" icon={faCartPlus}  />
                    </div>
                }
            </div>


            <div className="card-body product-body">
                <p className="card-text text-center">
                    {title}
                </p>
                <p className="card-text text-center text-bright font-weight-bold">
                    {renderPrice(price)}
                </p>
            </div>
        </div>
    )
}
