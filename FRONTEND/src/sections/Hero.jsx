import React from 'react'
import HeroText from '../components/HeroText'
import HeroSearchBar from '../components/HeroSearchBar'
import SubHeading from '../components/SubHeading'

const Hero = () => {
  return (
    <>
        <div className="w-full bg-slate-50 mt-16 flex flex-col items-center">
            <HeroText />
            <HeroSearchBar />
            <SubHeading subHeading={"Instantly get your Realtime Short URL."} />
        </div>
    </>
  )
}

export default Hero