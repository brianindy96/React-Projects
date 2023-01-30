import React from 'react'
import styled from 'styled-components'
import { Button } from '@mui/material'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
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


const Item = styled.div`
    margin: 20px 0;
    display: flex;

`

const ProductName = styled.h1`
  font-size: 1.4rem;
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
  text-align: center;
`

const Price = styled.h3`

`


const QtyContainer = styled.div`
  display: flex;
  align-items: center;
`

const Qty = styled.span`
  margin: 5px 5px;
`

const SummaryContainer = styled.div`
   flex: 1;
   margin-left: 40px;
   padding: 8px;
`


const SubTotal = styled.span`
  
`

const SubTotalPrice = styled.span`
  
`

const SubDetails = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`

const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  align-items: center;
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
        <Content>
          <CartContainer>
          <Title>Your Shopping Cart</Title>
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
                <QtyContainer>
                  <IconButton>
                    <RemoveIcon />
                  </IconButton>
                  <Qty>2</Qty>
                  <IconButton>
                    <AddIcon />
                  </IconButton>
                </QtyContainer>
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
                <QtyContainer>
                  <IconButton>
                    <RemoveIcon />
                  </IconButton>
                  <Qty>2</Qty>
                  <IconButton>
                    <AddIcon />
                  </IconButton>
                </QtyContainer>
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
                <QtyContainer>
                  <IconButton>
                    <RemoveIcon />
                  </IconButton>
                  <Qty>2</Qty>
                  <IconButton>
                    <AddIcon />
                  </IconButton>
                </QtyContainer>
              </AmountContainer>
            </Item>
            <Hr />
          </CartContainer>
          <SummaryContainer>
            <Title>Summary</Title>
            <SubDetails>
              <SubTotal>Subtotal</SubTotal>
              <SubTotalPrice>$1,350.00</SubTotalPrice>
            </SubDetails>
            <Hr style={{marginTop: "10px", marginBottom: "0"}}/>
            <BtnContainer>
              <Link to="/checkout">
                <Button style={{height: "40px", flex: "1", margin: "5px"}} variant="contained">CHECK OUT</Button>
              </Link>
              <Button style={{height: "40px", padding: "0", flex: "1"}} variant="outlined">CONTINUE SHOPPING</Button>
            </BtnContainer>
          </SummaryContainer>
        </Content>
        
      </Wrapper>
    </Container>
  )
}

export default CartSummary