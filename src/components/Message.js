import React, { Component } from 'react';

class Message extends Component {
    render() {
        const { children } = this.props;
        return (
            <h3>
                <span className="badge amber darken-2">{children}</span>
            </h3>
        );
    }
}

export default Message;
