import React, { useContext } from 'react'
import Product from './Product';
import Title from './Title';
import { ProductContext } from '../context';


export default function ProductList () {
    const {products} = useContext(ProductContext);
    console.log('products using context:', products);

    const renderProducts = () => {

        console.log(products);
        if(!products) {
            return;
        }
        return (products.map(product => {
            return <Product key={product.id} product={product} />
        }))
    }

    return (
        <div className="container">
            <Title name={"Our Products"} />
            <div className="row">
                {renderProducts()}
            </div>
        </div>
        
    )
}
