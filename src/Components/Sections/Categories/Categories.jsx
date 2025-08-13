import React from 'react'
import SectionsHeading from '../SectionsHeading/SectionsHeading'
import Card from '../../Card/Card'
import Carousel from 'react-multi-carousel'
import { responsive } from '../../../utils/Section.constants'


const Categories = (title, data) => {
  return (
    <>
      <SectionsHeading title={title} />
      <Carousel responsive={responsive}
        autoPlay={false}
        swipeable={true}
        draggable={false}
        showDots={false}
        infinite={false}
        partialVisible={false}
        itemClass='react-slider-custum-item'
        className='px-8'
      >
        {data && data?.map((item, index) =>
          <Card key={item.title + index} description={item?.description} imagePath={item?.image} title={item?.title}  actionArrow={true} />)}
      </Carousel>
    </>
  )
}

export default Categories
