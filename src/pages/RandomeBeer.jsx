import React, { useEffect, useState } from 'react'
import beersService from '../services/beers'

function RandomeBeer() {
  const [beer, setBeer] = useState({})

  useEffect(() => {
    beersService.random()
      .then((beer) => setBeer(beer))
  }, [])
  return (
    <article className='flex'>
    <figure className='aspect-square w-40'>
      <img src={beer.image_url} alt="" />
    </figure>
    <div className='flex flex-col gap-3 m-6'>
      <h3 className='text-xl font-medium'>{beer.name}</h3>
      <p className='text-gray-300 font-medium'>{beer.tagline}</p>
      <p className='text-[0.75rem] font-bold'>Created by :
        <span className='font-medium'>{beer.contributed_by}</span> </p>
    </div>
    
  </article>
  )
}

export default RandomeBeer