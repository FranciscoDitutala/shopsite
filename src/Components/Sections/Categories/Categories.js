
import React from 'react'
import Kurtis from '../../../assets/img/kurtis.jpg'

// Importing images for the new arrivals section




const Categories = ({ title , data , cat}) => (
  <section> 
    <h2>{title}</h2>
    <div> 
      {Array.isArray(data) && data.map((item, idx) => (
        <div key={idx} > 
          {/* Subsdtitua 'name' ou 'title' pela propriedade correta do seu objeto */}
          { item.title || 'title' }
          <img src={item.image}   />
        </div>
      ))}
    </div>
  </section>
);

export default Categories;