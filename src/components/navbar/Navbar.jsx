import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import React from 'react'
import { Center, Container, Left, Right, Wrapper, SearchContainer, Input, Logo, MenuItem } from './NavbarStyles'
const Navbar = () => {
  return (
   <Container>
       <Wrapper>

        <Left>
            <SearchContainer>
                <Input  placeholder='Search'/>
                <SearchIcon/>
            </SearchContainer>
        </Left>
        
        <Center>
    <Logo>DIVO.</Logo>
        </Center>


        <Right>
<MenuItem>SIGN UP</MenuItem>
<MenuItem>LOGIN</MenuItem>
<MenuItem>
<Badge badgeContent={2} color="primary">
      <ShoppingCartOutlinedIcon />
    </Badge>
</MenuItem>

        </Right>
       </Wrapper>
   </Container>
  )
}

export default Navbar