import React from 'react'
import Hero from './Hero'
import LeftSection from './LeftSection'
import RightSection from './RightSection'
import Universe from './Universe'
import Footer from '../Footer'
import NavBar from '../NavBar'

const ProductPage = () => {
  return (
    <>
    <NavBar/>
    <Hero/>
    <LeftSection image={"/media/images/kite.png"} name={"Kite"} details={"Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."} link1={"Console"} link2={"Learn more"} />
    <RightSection image={"media/images/console.png"} name={"Console"} details={"The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."} link1={"Learn more"}/>
    <LeftSection image={"media/images/coin.png"} name={"Coin"} details={"Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."} link1={"Coin"} link2={""}/>
    <RightSection image={"media/images/kiteconnect.png"} name={"Kite Connect API"} details={"Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."} link1={"Kite connect"}/>
    <LeftSection image={"media/images/varsity.png"} name={"Varsity mobile"} details={"An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."} link1={""} link2={""}/>
    <Universe/>
    <Footer/>
    </>
  )
}

export default ProductPage