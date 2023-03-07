import React from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Container, Image, Info, Icon } from './ProductStyled'



const Product = ({item}) => {
  return (
   <Container>

<Image src={item.img} />

<Info>
    <Icon> <ShoppingCartOutlinedIcon/ >    </Icon>
    <Icon> <SearchOutlinedIcon/> </Icon>
    <Icon> <FavoriteBorderOutlinedIcon /> </Icon>
</Info>

   </Container>
  )
}

export default Product