import React, { Component } from 'react'
import {storeProducts, detailProduct} from './data';


const ProductContext = React.createContext();
//Provider
//Consumer
class ProductProvider extends Component {
    state = {
        products: [],
        detailProduct: {...detailProduct} 
    }

    componentDidMount() {
        this.setProducts();
    }
    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach(item => {
            let singleItem = {...item};
            tempProducts = [...tempProducts, singleItem];
        })
        this.setState(() => {
         return {products: tempProducts}   
        });
    }

    render() {
        return (
            <ProductContext.Provider value={this.state}>
                {this.props.children};
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer, ProductContext};