import React from 'react'
import {categories} from '../../data/Data'
import { Container } from './CategoriesStyled'
import CategoryItem from '../categoryItem/CategoryItem'


const Categories = () => {
  return (
    <Container>
        {categories.map(item =>(<CategoryItem item =  {item} key={item.id} />))}
    </Container>
  )
}

export default Categories