import { Col, Row } from 'antd'
import React from 'react'
import styled from 'styled-components'
import text from '../../text'
import ProductBox from '../../components/product-box'
import KlerosSymbol from '../../assets/images/kleros-symbol.png'
import DisputeResolver from '../../assets/images/dispute-resolver.png'
import UniswapNinja from '../../assets/images/uniswap-ninja.png'
import Escrow from '../../assets/images/escrow.png'
import GTCR from '../../assets/images/GTCR.png'
import Linguo from '../../assets/images/linguo.png'
import T2CR from '../../assets/images/t2cr.png'
import RealitioImg from '../../assets/images/realitio.png'
import PlusImg from '../../assets/images/plus.png'
import CryptoUnlocked from '../../assets/images/crypto-unlocked.png'

const StyledProducts = styled.div`
  color: #6700B4;
  background: #F2E3FF;
  padding-bottom: 60px;
`
const StyledHeading = styled.div`
  color: #6700B4;
  font-weight: 600;
  font-size: 48px;
  line-height: 65px;
  padding-top: 100px;
  text-align: center;
  margin: 0px 10px;
`
const ProductsContent = styled.div`
  padding: 70px 10.575vw 20px 10.575vw;
`
const StyledDisclaimer = styled.div`
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  text-align: right;
`

const products = [
  {
    'title': 'Court',
    'link': 'https://court.kleros.io',
    'image': KlerosSymbol
  },
  {
    'title': 'T2CR',
    'link': 'https://tokens.kleros.io',
    'image': T2CR
  },
  {
    'title': 'Escrow',
    'link': 'https://escrow.kleros.io',
    'image': Escrow
  },
  {
    'title': 'Realitio',
    'link': 'https://realit.io',
    'image': RealitioImg
  },
  {
    'title': 'Uniswap Ninja',
    'link': 'https://uniswap.ninja',
    'image': UniswapNinja
  },
  {
    'title': 'Dispute Resolver',
    'image': DisputeResolver
  },
  {
    'title': 'Linguo*',
    'image': Linguo
  },
  {
    'title': 'GTCR*',
    'image': GTCR
  },
  {
    'title': 'CryptoUnlocked',
    'link': 'https://cryptounlocked.wetrust.io/',
    'image': CryptoUnlocked
  },
  {
    'title': 'Your DApp',
    'link': 'https://kleros.io/en/partner',
    'image': PlusImg
  },
]

export default ({language}) => {
  const heading = text[language].home.products.heading
  const disclaimer = text[language].home.products.disclaimer

  return (
    <StyledProducts>
      <StyledHeading>{heading}</StyledHeading>
      <ProductsContent>
        <Row>
          {products.map(p => (
            <Col lg={6} md={8} sm={8} xs={12} style={{marginBottom: '50px'}}>
              <ProductBox title={p.title} image={p.image} link={p.link} />
            </Col>
          ))}
        </Row>
        <Row>
          <Col lg={24}>
            <StyledDisclaimer>{ disclaimer }</StyledDisclaimer>
          </Col>
        </Row>
      </ProductsContent>
    </StyledProducts>
  )
}
