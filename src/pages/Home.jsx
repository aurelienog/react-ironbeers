import React from 'react'
import BeersImage from '../assets/beers.png'
import newBeer from '../assets/new-beer.png'
import random from '../assets/random-beer.png'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <article className='w-[40%] my-2 mx-6' onClick={() => navigate('/beers')}>
        <img src={BeersImage} alt="" />
        <h1 className='text-3xl my-2 mx-6'>All Beers</h1>
        <p className='text-gray-400 mx-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis nulla neque, assumenda id nihil labore voluptates? Rem, officiis laborum! Voluptates cupiditate labore perspiciatis, sit vitae eius molestias accusamus cum fugit?</p>
      </article>
      <article className='w-[40%] my-8 mx-6' onClick={() => navigate('/random-beer')}>
        <img src={random} alt="" />
        <h1 className='text-3xl my-2 mx-6'>Random Beer</h1>
        <p className='text-gray-400 mx-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis nulla neque, assumenda id nihil labore voluptates? Rem, officiis laborum! Voluptates cupiditate labore perspiciatis, sit vitae eius molestias accusamus cum fugit?</p>
      </article>
      <article className='w-[40%] my-8 mx-6' onClick={() => navigate('/new-beer')}>
        <img src={newBeer} alt="" />
        <h1 className='text-3xl my-2 mx-6'>New Beer</h1>
        <p className='text-gray-400 mx-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis nulla neque, assumenda id nihil labore voluptates? Rem, officiis laborum! Voluptates cupiditate labore perspiciatis, sit vitae eius molestias accusamus cum fugit?</p>
      </article>
    </div>
  )
}
