import React from 'react'
import OverallButton from '../components/OverallButton'

const CTA = () => {
  return (
    <>
      <div className="w-7xl h-screen flex flex-col gap-5 items-center justify-center">
        <h1 className='text-6xl w-4xl text-center text-zinc-900 font-bold'>Join Thousands Simplifying Their URLs</h1>
        <p className='text-lg text-zinc-600 font-medium'>Create short, branded links that boost trust, clicks, and visibility.</p>
        <OverallButton btnText={"Get Started"} to={"/signin"} />
      </div>
    </>
  )
}

export default CTA