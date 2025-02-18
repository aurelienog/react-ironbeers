import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function BeersItem({name, image_url, tagline, contributed_by, _id}) {
  const navigate = useNavigate();

  return (
    <article className='flex' onClick={() => navigate(`/${_id}`)}>
      <figure className='aspect-square w-40'>
        <img src={image_url} alt="" />
      </figure>
      <div className='flex flex-col gap-3 m-6'>
        <h3 className='text-xl font-medium'>{name}</h3>
        <p className='text-gray-300 font-medium'>{tagline}</p>
        <p className='text-[0.75rem] font-bold'>Created by :
          <span className='font-medium'>{contributed_by}</span> </p>
      </div>
      
    </article>
  )
}
