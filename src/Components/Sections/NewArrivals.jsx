import React from 'react'
import SectionsHeading from './SectionsHeading/SectionsHeading'
import Card from '../Card/Card'
import Jeans from '../../assets/img/jeans.jpg' 
import Shirts from '../../assets/img/shirts.jpg' 
import Tshirts from '../../assets/img/tshirts.jpeg' 
import Dresses from '../../assets/img/dresses.jpg'

const items = [{
  'title' : "Jeans",
  imagePath: Jeans},
  {
    'title' : "Shirts",
    imagePath: Shirts},
    {
      'title' : "T-shirts",
      imagePath: Tshirts},
      {
        'title' : "Dresses",
        imagePath: Dresses},
]

const NewArrivals = () => {

  return (
    <>
      <SectionsHeading title={"New Arrivals"} />
      <div className='flex flex-wrap justify-center'>
        {items && items?.map((item, index) => 
        <Card key={item.title +index} imagePath={item.imagePath} title={item.title} />)}
      </div>
      
    </>
  )
}

export default NewArrivals
