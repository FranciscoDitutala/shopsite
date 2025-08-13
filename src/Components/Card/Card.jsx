import React from 'react'

const Card = ({ imagePath, title, description, actionArrow }) => {
  return (
    <div className='flex flex-col p-8'>
      <img src={imagePath} className='max-h-[460px] max-w-[370px] min-w-[250px] bg-cover 
        bg-center border rounded hover:scale-105 cursor-pointer'  alt='jeans' />
      <div className='flex justify-between'>
        <div className='flex flex-col '>
          <p className='text-[20px] p-5'> {title} </p>
         {description &&  <p className='text-[16px] '> {description} </p>}
        </div>
        {actionArrow && <div> {}</div>}
      </div>

    </div>
  )
}

export default Card
