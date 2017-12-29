import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Products from './../components/Products';
import Product from './../components/Product';
import { actAddToCart, actChangeMessage } from './../actions/index';

class ProductsContainer extends Component {
    //Hiển thị product
    showProduct = (products) => {
        const { onAddToCart,onChangeMessage } = this.props;
        var result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return <Product key={product.id} product={product} 
                                onAddToCart={onAddToCart} onChangeMessage={onChangeMessage}/>;
            });
        };
        return result;
    }


    render() {
        const { products } = this.props;
        return (
            <Products>
                {this.showProduct(products)}
            </Products>
        );
    }
}

ProductsContainer.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
        })
    ).isRequired,
    onChangeMessage: PropTypes.func.isRequired,
    onAddToCart: PropTypes.func.isRequired
}

const mapStateToProps = state => {
    const { products } = state;
    return { products };
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (product) => {
            dispatch(actAddToCart(product,1));
        },
        onChangeMessage: (message) => {
            dispatch(actChangeMessage(message));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
