import React, { useState } from 'react'
import { Container } from './ProductsStyled'
import { popularProducts } from '../../data/Data'
import Product from '../product/Product'
import axios from 'axios'


const Products = ({cat, filters, sort}) => {

  return (
<Container>
{popularProducts.map((item) => (<Product item= {item} key={item.id} />))}
</Container>
    )
}

export default Products