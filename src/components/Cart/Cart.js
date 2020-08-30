import React, { useContext } from 'react';
import {useHistory} from 'react-router-dom';
import Title from '../Title';
import { ProductContext } from '../../context';
import CardItem from './CartItem';
import CartHeader from './CartHeader';
import Payment from '../Payment';
import './Cart.css';

export default function Cart() {
    const history = useHistory();
    const {cart, subTotal, tax, total, increment, decrement, removeItem, clearCart} = useContext(ProductContext);
    
    const renderCartItems = () => {
        console.log(history);
        if(cart.length > 0) {
            let allItems =  cart.map((item) => {
                return <CardItem key={item.id} product={item} methods={{increment, decrement, removeItem}}/>
            });
            return (<div>
                    <CartHeader />
                    {allItems}
                    <div className="d-flex flex-column justify-content-end align-items-end m-5">
                        <button className="btn btn-danger btn-clear m-2" onClick={() => {
                            clearCart()
                        }}> Clear cart</button>
                        <div className="text-uppercase m-4">
                            <h4 className="text-nowrap"> <span className="w-60 d-inline-block">Subtotal:</span> ${subTotal}</h4>
                            <h4 className="text-nowrap"> <span className="w-60 d-inline-block">Tax:</span> ${tax}</h4>
                            <h4 className="text-nowrap"> <span className="w-60 d-inline-block">Total:</span> ${total}</h4>
                        </div>
                        <Payment total={total} clearCart={clearCart} history={history}/>
                    </div>
                </div>)
        } else {
            return <div>
                <h4 className="text-center mt-5">
                Your cart is currently empty!
                </h4>
            
            </div>
        }
    }
    return (
        <section>
            <Title name="Your Cart" />
            {renderCartItems()}
        </section>

    )
}
