import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  min-height: 90vh;
`

const Wrapper = styled.div`
  max-width: 1560px;
  padding: 20px;
  margin: 0 auto;
`

const Content = styled.div`
  display: flex;
`

const Title = styled.h2`
  
`

const CartContainer = styled.div`
   flex: 3;
`

const SummaryContainer = styled.div`
   flex: 1;
   margin-left: 40px;
   margin-top: 20px;
`

const Item = styled.div`
    margin: 20px 0;
    display: flex;

`

const ProductName = styled.h1`

`

const ImgContainer = styled.div`
  width: 200px;
  background-color: #f5f5f5;
  height: 200px;
`

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Size = styled.p`

`

const Details = styled.div`
  flex: 1;
  margin-left: 3rem;
`

const AmountContainer = styled.div`
`

const Price = styled.h3`

`

const Qty = styled.span`
  
`

const Hr = styled.hr`
  background-color: #f3f3f3;
  height: 2px;
  border: none;
`
const CartSummary = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Your Shopping Cart</Title>
        <Content>
          <CartContainer>
            <Item>
              <ImgContainer>
                <Img src='https://www.guerlain.com/dw/image/v2/BDCZ_PRD/on/demandware.static/-/Sites-GSA_master_catalog/default/dwc77ad64f/primary_packshot_3/2022/Fragrance/Mon_Guerlain/G013139_3346470131392_MON-G-17-EDP-50ML-SPR.png?sw=700&sh=700'/>
              </ImgContainer>
              <Details>
                <ProductName>Guerlain: Rose Bouquet</ProductName>
                <Size>Size: <strong>100 ml</strong></Size>
              </Details>
              <AmountContainer>
                <Price>$549.00</Price>
                <Qty>Qty: <strong>2</strong></Qty>
              </AmountContainer>
            </Item>
            <Hr />
            <Item>
              <ImgContainer>
                <Img src='https://www.guerlain.com/dw/image/v2/BDCZ_PRD/on/demandware.static/-/Sites-GSA_master_catalog/default/dwc77ad64f/primary_packshot_3/2022/Fragrance/Mon_Guerlain/G013139_3346470131392_MON-G-17-EDP-50ML-SPR.png?sw=700&sh=700'/>
              </ImgContainer>
              <Details>
                <ProductName>Guerlain: Rose Bouquet</ProductName>
                <Size>Size: <strong>100 ml</strong></Size>
              </Details>
              <AmountContainer>
                <Price>$549.00</Price>
                <Qty>Qty: <strong>2</strong></Qty>
              </AmountContainer>
            </Item>
            <Hr />
            <Item>
              <ImgContainer>
                <Img src='https://www.guerlain.com/dw/image/v2/BDCZ_PRD/on/demandware.static/-/Sites-GSA_master_catalog/default/dwc77ad64f/primary_packshot_3/2022/Fragrance/Mon_Guerlain/G013139_3346470131392_MON-G-17-EDP-50ML-SPR.png?sw=700&sh=700'/>
              </ImgContainer>
              <Details>
                <ProductName>Guerlain: Rose Bouquet</ProductName>
                <Size>Size: <strong>100 ml</strong></Size>
              </Details>
              <AmountContainer>
                <Price>$549.00</Price>
                <Qty>Qty: <strong>2</strong></Qty>
              </AmountContainer>
            </Item>
            <Hr />
          </CartContainer>
          <SummaryContainer>
            <Title>Summary</Title>
          </SummaryContainer>
        </Content>
        
      </Wrapper>
    </Container>
  )
}

export default CartSummary