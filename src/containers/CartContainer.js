import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from './../components/Cart';
import CartItem from './../components/CartItem';
import CartResult from './../components/CartResult';
import * as msg from './../constants/message';
import { actDeleteProductInCart, actChangeMessage, actUpdateProductInCart } from './../actions/index';

class CartContainer extends Component {
    showCartItem = (cart) => {
        let result = <tr>
            <td>{msg.MSG_CART_EMPTY}</td>
        </tr>;
        if (cart.length > 0) {
            result = cart.map((cartItem, index) => {
                return <CartItem key={index} cartItem={cartItem}
                    onDeleteProductInCart={this.props.onDeleteProductInCart}
                    onChangeMessage={this.props.onChangeMessage}
                    onUpdateProductInCart={this.props.onUpdateProductInCart}
                />;
            });
        };
        return result;
    }
    showTotalAmount = (cart) => {
        let result = null;
        if (cart.length > 0) {
            result = <CartResult cart={cart} />
        }
        return result;
    }
    render() {
        let { cart } = this.props;
        return (
            <Cart>
                {this.showCartItem(cart)}
                {this.showTotalAmount(cart)}
            </Cart>
        );
    }
}

CartContainer.propTypes = {
    cart: PropTypes.arrayOf(PropTypes.shape({
        product: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
        }).isRequired,
        quantity: PropTypes.number.isRequired
    })).isRequired,
    onDeleteProductInCart: PropTypes.func.isRequired,
    onChangeMessage: PropTypes.func.isRequired,
    onUpdateProductInCart: PropTypes.func.isRequired
}
const mapStateToProps = state => {
    const { cart } = state
    return { cart }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteProductInCart: (product) => {
            dispatch(actDeleteProductInCart(product));
        },
        onChangeMessage: (message) => {
            dispatch(actChangeMessage(message));
        },
        onUpdateProductInCart: (product,quantity) => {
            dispatch(actUpdateProductInCart(product,quantity));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);