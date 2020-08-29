import React, { Component } from 'react'
import { storeProducts, detailProduct } from './data';

const ProductContext = React.createContext();
//Provider
//Consumer
class ProductProvider extends Component {
    state = {
        products: [],
        detailProduct: { ...detailProduct },
        cart: [],
        modelOpen: false,
        modalProduct: detailProduct,
        subTotal: 0,
        tax: 0,
        total: 0
    }

    handleDetails = (id) => {
        let product = this.getItem(id);
        this.setState({ detailProduct: product });

    }

    getItem = (id) => {
        const product = this.state.products.find((item) => { return item.id === id });
        return product;
    }

    addToCart = (id) => {
        const tempProducts = [...this.state.products];
        let product = tempProducts[tempProducts.indexOf(this.getItem(id))];
        product.inCart = true;
        product.count = 1;
        let price = product.price;
        product.total = price;
        this.setState(() => {
            return {
                products: [...tempProducts],
                cart: [...this.state.cart, product]
            }
        }, () => {
            this.addTotal();
        })
    }

    openModal = (id) => {
        let modalProduct = this.getItem(id);
        this.setState({ modalOpen: true, modalProduct: modalProduct });
    }

    closeModal = () => {
        this.setState({ modalOpen: false });
    }

    componentDidMount() {
        this.setProducts();
    }

    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach(item => {
            let singleItem = { ...item };
            tempProducts = [...tempProducts, singleItem];
        })
        this.setState(() => {
            return { products: tempProducts }
        });
    }

    increment = (id) => {
        let tempCart = [...this.state.cart];
        let cartItem = tempCart[tempCart.indexOf(this.getItem(id))];
        
        let tempProducts = [...this.state.products];
        let itemInProduct = tempProducts[tempProducts.indexOf(this.getItem(id))]
         
        cartItem.count += 1;
        cartItem.total = cartItem.count * cartItem.price;
        
        itemInProduct.count = cartItem.count;
        itemInProduct.total = cartItem.count * itemInProduct.price;

        this.setState(() => {
            return {cart: [...tempCart], products: [...tempProducts]}
        }, () => {
            this.addTotal();
        })
    }

    decrement = (id) => {
        let tempCart = [...this.state.cart];
        let idx = tempCart.indexOf(this.getItem(id));
        let cartItem = tempCart[idx];

        let tempProducts = [...this.state.products];
        let itemInProduct = tempProducts[tempProducts.indexOf(this.getItem(id))]
         

        if(cartItem.count > 1) {
            cartItem.count -= 1;
            cartItem.total = cartItem.total - cartItem.price;

            itemInProduct.count = cartItem.count;
            itemInProduct.total = cartItem.count * itemInProduct.price;
        } else {
            tempCart.splice(idx, 1);
            itemInProduct.count = 0;
            itemInProduct.total = 0;
            itemInProduct.inCart = false;
        }
        this.setState(() => {
            return {cart: [...tempCart], products: [...tempProducts]}
        }, () => {
            this.addTotal();
        })
    }

    removeItem = (id) => {
        let tempCart = [...this.state.cart];
        let idx = tempCart.indexOf(this.getItem(id));
        let tempProducts = [...this.state.products];
        let itemInProduct = tempProducts[tempProducts.indexOf(this.getItem(id))]
        itemInProduct.inCart = false;
        itemInProduct.count = 0;
        itemInProduct.total = 0;

        // can use filter also
        if(idx !== -1) {
            tempCart.splice(idx, 1);
        }
        this.setState({cart: [...tempCart], products: [...tempProducts]}, () => {
            this.addTotal();
        })

    }

    clearCart = () => {
        this.setState({cart: []}, () => {
            this.setProducts();
            this.addTotal();
        });
    }

    addTotal = () => {
        let subTotal = 0;
        let tax = 0;
        let total = 0;
        this.state.cart.forEach(item => {
            subTotal += item.total;
        })
        tax = parseFloat((subTotal * 0.1).toFixed(2));
        total = subTotal + tax;
        this.setState(() => {
            return {subTotal, tax, total};
        })
    }

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state, handleDetails: this.handleDetails, addToCart: this.addToCart,
                openModal: this.openModal, closeModal: this.closeModal,
                increment: this.increment,
                decrement: this.decrement,
                removeItem: this.removeItem,
                clearCart: this.clearCart
            }}>
                {this.props.children};
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer, ProductContext };