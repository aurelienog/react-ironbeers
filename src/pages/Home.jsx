import React from 'react'
import BeersImage from '../assets/beers.png'

export default function home() {
  return (
    <div>
      <section className='w-[40%] my-2 mx-6'>
        <img src={BeersImage} alt="" />
        <h1 className='text-4xl my-2 mx-6'>All Beers</h1>
        <p className='text-gray-400 mx-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis nulla neque, assumenda id nihil labore voluptates? Rem, officiis laborum! Voluptates cupiditate labore perspiciatis, sit vitae eius molestias accusamus cum fugit?</p>
      </section>
      <section className='w-[40%] my-8 mx-6'>
        <img src={BeersImage} alt="" />
        <h1 className='text-4xl my-2 mx-6'>Random Beer</h1>
        <p className='text-gray-400 mx-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis nulla neque, assumenda id nihil labore voluptates? Rem, officiis laborum! Voluptates cupiditate labore perspiciatis, sit vitae eius molestias accusamus cum fugit?</p>
      </section>
      <section className='w-[40%] my-8 mx-6'>
        <img src={BeersImage} alt="" />
        <h1 className='text-4xl my-2 mx-6'>New Beer</h1>
        <p className='text-gray-400 mx-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis nulla neque, assumenda id nihil labore voluptates? Rem, officiis laborum! Voluptates cupiditate labore perspiciatis, sit vitae eius molestias accusamus cum fugit?</p>
      </section>
    </div>
  )
}
