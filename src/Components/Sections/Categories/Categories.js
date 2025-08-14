
import React from 'react'
import Kurtis from '../../../assets/img/kurtis.jpg'

// Importing images for the new arrivals section




const Categories = ({ title , data , cat}) => (
  <section className='flex flex-col w-auto px-6'> 
    <h2 className='font-bold size-8 w-auto p-5'  >{title}</h2>
    <div className='grid gap-4 p-4 w-1/5'> 
      {Array.isArray(data) && data.map((item, idx) => (
        <div key={idx} > 
          {/* Subsdtitua 'name' ou 'title' pela propriedade correta do seu objeto */}
          { item.title || 'title' }
          <img src={item.image}   />
          { item.description || 'title' }
        </div>
      ))}
    </div>
  </section>
);

export default Categories;