import React, { Component } from 'react';
import * as msg from './../constants/message';

class CartItem extends Component {
    render() {
        const { cartItem } = this.props;
        const { quantity } = cartItem;
        return (
            <tr>
                <th scope="row">
                    <img src={cartItem.product.image} alt={cartItem.product.name} className="img-fluid z-depth-0" />
                </th>
                <td>
                    <h5>
                        <strong>{cartItem.product.name}</strong>
                    </h5>
                </td>
                <td>{cartItem.product.price}$</td>
                <td className="center-on-small-only">
                    <span className="qty">{quantity} </span>
                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label
                            onClick={() => { this.onUpdateQuantity(cartItem.product, quantity - 1) }}
                            className="btn btn-sm btn-primary btn-rounded waves-effect waves-light">
                            <a>—</a>
                        </label>
                        <label
                            className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                            onClick={() => { this.onUpdateQuantity(cartItem.product, quantity + 1) }}
                        >
                            <a>+</a>
                        </label>
                    </div>
                </td>
                <td>{quantity * cartItem.product.price}$</td>
                <td>
                    <button type="button"
                        className="btn btn-sm btn-primary waves-effect waves-light"
                        data-toggle="tooltip" data-placement="top"
                        title="" data-original-title="Remove item"
                        onClick={() => this.onDelete(cartItem.product)}
                    >
                        X
                                        </button>
                </td>
            </tr>
        );
    }
    onDelete = (product) => {
        const { onDeleteProductInCart, onChangeMessage } = this.props;
        onDeleteProductInCart(product);
        onChangeMessage(msg.MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
    }
    onUpdateQuantity = (product, quantity) => {
        const { onUpdateProductInCart, onChangeMessage } = this.props;
        if (quantity > 0) {
            onUpdateProductInCart(product, quantity);
        }
        onChangeMessage(msg.MSG_UPDATE_CART_SUCCESS);
    }
}

export default CartItem;
