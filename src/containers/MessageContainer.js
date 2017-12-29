import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Message from './../components/Message';

class MessageConatainer extends Component {
    render() {
        const {message} = this.props;
        return (
            <Message>
                {message}
            </Message>
        );
    }
}
//Kiểm tra kiểu dữ liệu
MessageConatainer.propTypes = {
    message: PropTypes.string.isRequired 
}

const mapStateToProps = state => {
   return {
       message : state.message
   }
}

export default connect(mapStateToProps, null)(MessageConatainer);