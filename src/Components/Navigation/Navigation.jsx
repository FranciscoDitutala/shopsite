import React from 'react'
import Wishilist from '../Wishlist/Wishilist'
import AccountIcon from '../AccountIcon/AccountIcon'
import CartonIcon from '../CartonIcon/CartonIcon'

function Navigation() {
  return (
    <nav className='flex items-center py-6 px-16 justify-between gap-40'>
      <div className='flex items-center gap-6'>
        {/** Logo */}
        <a className='text-3xl text-black' href='/' > ShopEase</a>
      </div>
      <div className='flex flex-wrap items-center gap-10 flex-1'>
        <ul className='flex gap-14 text-gray-600 hover:text-black'>
          <li > <a href='/'> Shop</a> </li>
          <li > <a href='/'> Men</a> </li>
          <li > <a href='/'> Women</a> </li>
          <li> <a href='/'> Kids</a> </li>
        </ul>
      </div>
      <div className='flex justify-center,'>
        {/** search bar */}
        <div className='border rounded flex overflow-hidden'>
          <button className='flex items-center justify-center px-4 border-1'>
            <svg className='h-4 w-4 text-gray-dark' fill='currentcolor' xmlns='http://www.w3.org/2000/svg' viewBox='0'>
            </svg>
            <input type='text' className='px-4 py-2 outline-none ' placeholder='Search ...' />
          </button>
        </div>
      </div>
      <div className='flex flex-wrap items-center gap-4'>
        <ul className='flex items-center gap-4'>
          <li> <button>
            <Wishilist />
          </button> </li>
          <li> <button>
            <AccountIcon />
          </button> </li>
          <li> <a href='/cart-items'>
          <CartonIcon bgColor={"#fad34gw"} />
          </a> </li>


        </ul>
      </div>
    </nav>
  )
}

export default Navigation
