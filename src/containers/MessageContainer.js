import React, { Component } from 'react';
import { connect } from 'react-redux'
// import PropTypes from 'prop-types'
import Message from './../components/Message'


class MessageContainers extends Component {


    render() {
        var { message } = this.props
        return (
            <Message message={message} />
        );
    }
}

MessageContainers.propTypes = {
    // message :   PropTypes.string.isRequired
}

const mapStateToProps = state => {
    return {
        message: state.message
    }
}

// const mapDispatchToProps = (dispatch, props) => {
//     return{

//     }
// }

export default connect(mapStateToProps, null)(MessageContainers);
