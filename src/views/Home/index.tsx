import React, { useEffect, useState, useMemo } from 'react'
import styled from 'styled-components'
import PageSection from 'components/PageSection'
import { useWeb3React } from '@web3-react/core'
import useTheme from 'hooks/useTheme'
import Container from 'components/Layout/Container'
import { PageMeta } from 'components/Layout/Page'
import Hero from './components/Hero'
import { swapSectionData, earnSectionData, cakeSectionData } from './components/SalesSection/data'
import MetricsSection from './components/MetricsSection'
import SalesSection from './components/SalesSection'
import WinSection from './components/WinSection'
import FarmsPoolsRow from './components/FarmsPoolsRow'
import Footer from './components/Footer'
import CakeDataRow from './components/CakeDataRow'
import { WedgeTopLeft, InnerWedgeWrapper, OuterWedgeWrapper, WedgeTopRight } from './components/WedgeSvgs'
import UserBanner from './components/UserBanner'

// import Page from 'components/Layout/Page'
import { Helmet } from 'react-helmet-async'
import SwiperProvider from './context/SwiperProvider'
import Desktop from './Desktop'
import Mobile from './Mobile'
import { useMatchBreakpoints, Box, Flex } from '@pancakeswap/uikit'
import IfoCard from '../Drips/components/IfoCard'
import IfoCards from '../Drips/components/IfoCards'
import { dripsConfig } from 'config/constants'
import Countdown, { zeroPad } from 'react-countdown';
import Row from 'components/Layout/Row'
import { NavLink } from 'react-router-dom'
import { useToken } from 'hooks/Tokens'
import { useTokenPriceData } from 'state/info/hooks'
import { ONE_HOUR_SECONDS } from 'config/constants/info'
import { useFLVRBusdPrice } from 'hooks/useBUSDPrice'
import FlavorTokenLogo from 'components/Logo/FlavorTokenLogo.svg'
import TradingViewWidget from 'react-tradingview-widget';
import { useAllTokenData } from 'state/info/hooks'


const DEFAULT_TIME_WINDOW: Duration = { weeks: 1 }

const StyledHeroSection = styled(PageSection)`
  padding-top: 16px;

  ${({ theme }) => theme.mediaQueries.md} {
    padding-top: 48px;
  }
`

const UserBannerWrapper = styled(Container)`
  z-index: 1;
  position: absolute;
  width: 100%;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  padding-left: 0px;
  padding-right: 0px;

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-left: 24px;
    padding-right: 24px;
  }
`

const RedBar = styled.div`
  padding: .7rem;
  background: #FF006A;
  text-align: center;
  color: white;
`

const Home: React.FC = () => {
  const drip0 = dripsConfig.find((ifo) => ifo.id == 'busd')
  const drip1 = dripsConfig.find((ifo) => ifo.id == 'cake')
  const flvrPrice = useFLVRBusdPrice()
  const flvrPriceUsdDisplay = flvrPrice ? `$${flvrPrice.toFixed(6)}` : '...'
  const [passedTime, setPassedTime] = useState(0)
  
  console.log(flvrPriceUsdDisplay);
  const [tradingSymbol, setTradingSymbol] = useState("CAKEUSDT")
  useEffect(()=>{
    // setPassedTime(prevtime=>prevtime+1)
    // console.log(document.getElementsByTagName("iframe")[0].contentWindow.document);
    setTradingSymbol("BNBUSDT")
    console.log(flvrPrice);
    // console.log(document.getElementsByTagName("iframe")[0].src)
    console.log(passedTime);
  }, [])
  
  const allTokens = useAllTokenData()

  const formattedTokens = useMemo(() => {
    return Object.values(allTokens)
      .map((token) => token.data)
      .filter((token) => token)
  }, [allTokens])
  console.log(allTokens);

  return (
      // <Page>
      <>
        {/* <Helmet>
          <script src="https://s3.tradingview.com/tv.js" type="text/javascript" id="tradingViewWidget" />
        </Helmet> */}
        {/* {JSON.stringify(allTokens)} */}
        <RedBar>
          <Flex alignItems="center" justifyContent="space-between" style={{margin: "auto", width: "fit-content"}}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.24 5.76C13.07 4.59 11.54 4 10 4V10L5.76 14.24C8.1 16.58 11.9 16.58 14.25 14.24C16.59 11.9 16.59 8.1 14.24 5.76ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z" fill="white"/>
            </svg>
            <span style={{paddingLeft: "1rem", paddingRight: ".3rem"}}>Countdown to Flavortown! New Drips Drop In </span>
            <Countdown
              date={Date.now() + 10000*1000}
              intervalDelay={0}
              precision={3}
              renderer={({ hours, minutes, seconds }) => <div>{zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}</div>}
            />
          </Flex>
        </RedBar>
        <Box mx="auto" maxWidth="1280px" mt="2rem">
          <PageMeta />
          <Flex justifyContent="space-between" marginX="4rem">
            <IfoCard ifo={drip0} />
            <IfoCard ifo={drip1} />
          </Flex>
          <SwiperProvider>
            <Container mt="2rem" mx="4rem" px="0">
              <Box border="1px solid #C4C4C4" borderRadius="8px" paddingX="1rem" paddingY="1.5rem">
                <Container px="0" py=".5rem" mb="1rem" background="#FFFFFF">
                  <Row>
                    <img src={FlavorTokenLogo}/>
                    <div>
                      <NavLink to="/">
                      </NavLink>
                      {flvrPriceUsdDisplay}
                    </div>
                  </Row>
                </Container>
                {/* {isDesktop ? <Desktop /> : <Mobile />} */}
                <Box padding="0" height="50vh">
                  <TradingViewWidget
                    symbol={tradingSymbol}
                    locale="en"
                    autosize
                    onChange={alert}
                    
                  />
                </Box>
              </Box>
              {/* <CollectWinningsPopup /> */}
            </Container>
          </SwiperProvider>
          </Box>
      </>
      // </Page>
    // <>
    //   <PageMeta />
    //   <StyledHeroSection
    //     innerProps={{ style: { margin: '0', width: '100%' } }}
    //     background={
    //       theme.isDark
    //         ? 'radial-gradient(103.12% 50% at 50% 50%, #21193A 0%, #191326 100%)'
    //         : 'linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)'
    //     }
    //     index={2}
    //     hasCurvedDivider={false}
    //   >
    //     {account && (
    //       <UserBannerWrapper>
    //         <UserBanner />
    //       </UserBannerWrapper>
    //     )}
    //     <Hero />
    //   </StyledHeroSection>
    //   <PageSection
    //     innerProps={{ style: { margin: '0', width: '100%' } }}
    //     background={
    //       theme.isDark
    //         ? 'linear-gradient(180deg, #09070C 22%, #201335 100%)'
    //         : 'linear-gradient(180deg, #FFFFFF 22%, #D7CAEC 100%)'
    //     }
    //     index={2}
    //     hasCurvedDivider={false}
    //   >
    //     <MetricsSection />
    //   </PageSection>
    //   <PageSection
    //     innerProps={{ style: HomeSectionContainerStyles }}
    //     background={theme.colors.background}
    //     index={2}
    //     hasCurvedDivider={false}
    //   >
    //     <OuterWedgeWrapper>
    //       <InnerWedgeWrapper top fill={theme.isDark ? '#201335' : '#D8CBED'}>
    //         <WedgeTopLeft />
    //       </InnerWedgeWrapper>
    //     </OuterWedgeWrapper>
    //     <SalesSection {...swapSectionData} />
    //   </PageSection>
    //   <PageSection
    //     innerProps={{ style: HomeSectionContainerStyles }}
    //     background={theme.colors.gradients.cardHeader}
    //     index={2}
    //     hasCurvedDivider={false}
    //   >
    //     <OuterWedgeWrapper>
    //       <InnerWedgeWrapper width="150%" top fill={theme.colors.background}>
    //         <WedgeTopRight />
    //       </InnerWedgeWrapper>
    //     </OuterWedgeWrapper>
    //     <SalesSection {...earnSectionData} />
    //     <FarmsPoolsRow />
    //   </PageSection>
    //   <PageSection
    //     innerProps={{ style: HomeSectionContainerStyles }}
    //     background={
    //       theme.isDark
    //         ? 'linear-gradient(180deg, #0B4576 0%, #091115 100%)'
    //         : 'linear-gradient(180deg, #6FB6F1 0%, #EAF2F6 100%)'
    //     }
    //     index={2}
    //     hasCurvedDivider={false}
    //   >
    //     <WinSection />
    //   </PageSection>
    //   <PageSection
    //     innerProps={{ style: HomeSectionContainerStyles }}
    //     background={theme.colors.background}
    //     index={2}
    //     hasCurvedDivider={false}
    //   >
    //     <SalesSection {...cakeSectionData} />
    //     <CakeDataRow />
    //   </PageSection>
    //   <PageSection
    //     innerProps={{ style: HomeSectionContainerStyles }}
    //     background="linear-gradient(180deg, #7645D9 0%, #5121B1 100%)"
    //     index={2}
    //     hasCurvedDivider={false}
    //   >
    //     <Footer />
    //   </PageSection>
    // </>
  
  )
}

export default Home
