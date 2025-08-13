import React from 'react'
import Navigation from './Components/Navigation/Navigation'
import HeroSection from './Components/HeroSection/HeroSection'
import NewArrivals from './Components/Sections/NewArrivals'
import Categories from './Components/Sections/Categories/Categories'
import content from './data/content.js'

const Shop = () => {
  return (
    <>
      <Navigation/>
      <HeroSection/>
      <NewArrivals/>
      {content?.categories?.map((cat, idx) => (
        <Categories key={idx} title={cat.title} data={cat.data} />
      ))}
    </>
  )
}

export default Shop
