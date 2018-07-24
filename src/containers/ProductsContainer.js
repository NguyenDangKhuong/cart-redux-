import React, { Component } from 'react';
import { connect } from 'react-redux'
import Products from '../components/Products'
import PropTypes from 'prop-types'

class ProductsContainers extends Component {

  render() {
    var {products} = this.props
    return (
        <Products products={products}/>
    );
  }
}

ProductsContainers.propTypes = {
    products:PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
        })
    ).isRequired
}

const mapStateToProps = state => {
  return {
    products: state.products
  }
}

export default connect(mapStateToProps,null)(ProductsContainers);
