import React from 'react'
import SectionsHeading from './SectionsHeading/SectionsHeading'
import Card from '../Card/Card'
import Jeans from '../../assets/img/jeans.jpg'
import Shirts from '../../assets/img/shirts.jpg'
import Tshirts from '../../assets/img/tshirts.jpeg'
import Dresses from '../../assets/img/dresses.jpg'
import Joggers from '../../assets/img/joggers.jpg'
import Kurtis from '../../assets/img/kurtis.jpg'
import Carousel from 'react-multi-carousel'
import { responsive } from '../../utils/Section.constants'
// Importing images for the new arrivals section

const items = [{  'title': "Jeans",
                   imagePath: Jeans
},
{
  'title': "Shirts",
  imagePath: Shirts
},
{
  'title': "T-shirts",
  imagePath: Tshirts
},
{
  'title': "Dresses",
  imagePath: Dresses
},
{
  'title': "joggers",
  imagePath: Joggers
},
  ,
{
  'title': "kurtis",
  imagePath: Kurtis
},
]

const NewArrivals = () => {

  return (
    <>
      <SectionsHeading title={"New Arrivals"} />
      <Carousel responsive={responsive}
        autoPlay={false}
        swipeable={true}
        draggable={false}
        showDots={false}
        infinite={false}
        partialVisible={false}
        itemClass='react-slider-custum-item'
        className='px-8 '
      >
        {items && items?.map((item, index) =>
          <Card key={item.title + index} imagePath={item.imagePath} title={item.title} />)}
      </Carousel>

    </>
  )
}

export default NewArrivals
