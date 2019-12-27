import './components/theme.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Col, Layout, Row } from 'antd'
import { Helmet } from 'react-helmet'
import Home from './containers/home/index'
import React from 'react'
import { ReactComponent as Logo } from './assets/images/logo.svg'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import media from 'styled-media-query'
import text from './text'

const StyledLayoutContent = styled(Layout.Content)`
  background-color: transparent;
`
const StyledLayout = styled(Layout)`
  min-height: 100vh;
  max-width: 100%;
  overflow-x: hidden;
  background: #1E075F;
  font-family: Roboto;
  font-style: normal;
`
const StyledLayoutHeader = styled(Layout.Header)`
  height: 60px;
`
const StyledLogoCol = styled(Col)`
  align-items: center;
  display: flex;
  height: 60px;
  justify-content: space-evenly;
  svg {
    margin-top: 5px;
  }
`
const StyledColRight = styled(Col)`
  align-items: right;
  color: white;
  display: flex;
  height: 60px;
  justify-content: space-evenly;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${media.lessThan('992px')`
    /* screen width is less than 768px (medium) */
    display: none;
  `}
`

const App = () => {
  let language = (window.navigator.userLanguage || window.navigator.language) || 'en-US'
  // If we don't have translation for language use English
  if (!text[language]) language = 'en-US'

  return (
    <>
      <Helmet>
        <title>Kleros Token Sale</title>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,400i,500,500i,700,700i"
          rel="stylesheet"
        />
      </Helmet>
      <BrowserRouter>
        <StyledLayout>
          <StyledLayoutHeader>
            <Row>
              <StyledLogoCol lg={3} md={6}>
                <Logo />
              </StyledLogoCol>
              <StyledColRight lg={10} offset={6}>

              </StyledColRight>
            </Row>
          </StyledLayoutHeader>
          <StyledLayoutContent>
            <Switch>
              <Route component={() => (<Home language={language} />)} exact path="/" />
            </Switch>
          </StyledLayoutContent>
        </StyledLayout>
      </BrowserRouter>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
