import React, { useState } from 'react'
import { Container, Arrow, Wrapper, ImgContainer, InfoContainer, Image, Slide, Title, Desc, Button } from './SliderStyles'
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';

const Slider = () => {

  const [slideIndex, setSlideIndex] = useState(0)

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
    }

  }
  return (
    <Container>
        <Arrow direction="left" onClick={() => handleClick("left")}>
    <ArrowLeftOutlinedIcon />
        </Arrow>

    <Wrapper slideIndex={slideIndex} >
      <Slide >
      <ImgContainer>
      <Image src='    https://images.pexels.com/photos/12723179/pexels-photo-12723179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
      </ImgContainer>
      <InfoContainer>
    <Title>Summer SALE</Title>
    <Desc>Discounts up to 80%</Desc>
    <Button>Shop now</Button>
      </InfoContainer>
      </Slide>


      <Slide>
      <ImgContainer>
      <Image src='https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
      </ImgContainer>
      <InfoContainer>
    <Title>Winter SALE</Title>
    <Desc>Discounts up to 80%</Desc>
    <Button>Shop now</Button>

      </InfoContainer>
      </Slide>



      <Slide>
      <ImgContainer>
      <Image src='https://images.pexels.com/photos/10679171/pexels-photo-10679171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
      </ImgContainer>
      <InfoContainer>
    <Title>Popular SALE</Title>
    <Desc>Discounts up to 80%</Desc>
    <Button>Shop now</Button>

      </InfoContainer>
      </Slide>
      </Wrapper>
        <Arrow direction="right"  onClick={() => handleClick("right")}>
    <ArrowRightOutlinedIcon />
        </Arrow>

    </Container>
  )
}

export default Slider