import React, { Component } from 'react';
import { connect } from 'react-redux'
import Products from '../components/Products'
import PropTypes from 'prop-types'
import { actAddToCart, actChangeMessage } from './../actions/index'

class ProductsContainers extends Component {

  render() {
    var { products, onAddToCart, onChangeMessage } = this.props
    return (
      <Products
        products={products}
        onAddToCart={onAddToCart}
        onChangeMessage={onChangeMessage}

      />
    );
  }
}

ProductsContainers.propTypes = {
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
  onChangeMessage: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return {
    products: state.products
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddToCart: (product) => {
      dispatch(actAddToCart(product, 1))
    },
    onChangeMessage: (message) => {
      dispatch(actChangeMessage(message))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainers);
