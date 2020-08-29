import React, { useContext } from 'react'
import ClassNames from 'classnames';
import Product from './Product';
import Title from './Title';
import { ProductContext } from '../context';


export default function ProductList () {
    const {products, modalOpen} = useContext(ProductContext);
    const renderProducts = () => {

        if(!products) {
            return;
        }
        return (products.map(product => {
            return <Product key={product.id} product={product} />
        }))
    }

    return (
        <div className={ClassNames("container", {blur: modalOpen})}>
            <Title name={"Our Products"} />
            <div className="row d-flex justify-content-center">
                {renderProducts()}
            </div>
        </div>
        
    )
}
