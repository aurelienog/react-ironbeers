import React from 'react'
import { useState } from 'react'
import beersService from '../services/beers'
import { Navigate, useNavigate } from 'react-router-dom';

function BeerForm() {
  const [value, setValue] = useState();
  const navigate = useNavigate();
  const [beer, setBeer] = useState({
    name : "",
    tagline : '',
    description : '',
    first_brewed : '',
    brewers_tips : '',
    attenuation_level : 0,
    contributed_by : ''
  });

  const handleChange = (ev) => {
    const key = ev.target.id;
    const value = ev.target.value

    setBeer({
      ...beer,
      [key] : value,
    })
  }

  const handleSubmit = (ev) => {
    ev.preventDefault();
    beersService.add(beer);
    navigate("/beers")


  }

  console.log(beer)

  return (
    <form className='' onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input id='name' name='name' type='text' className='border rounded-lg' onChange={handleChange} value={beer.name}/></div>
      <div>
        <label htmlFor="tagline">Tagline</label>
        <input id='tagline' name='tagline' type='text' className='border rounded-lg'onChange={handleChange} value={beer.tagline}/></div>
      <div>
        <label htmlFor="description">Description</label>
        <input id='description' name='description' type='text' className='border rounded-lg'onChange={handleChange} value={beer.description}/></div>
      <div>
        <label htmlFor="first_brewed">First brewed</label>
        <input id='first_brewed' name='first_brewed' type='text' className='border rounded-lg'onChange={handleChange} value={beer.first_brewed}/></div>
      <div>
        <label htmlFor="brewers_tips">Brewers tips</label>
        <input id='brewers_tips' name='brewers_tips' type='text' className='border rounded-lg'onChange={handleChange} value={beer.brewers_tips}/></div>
      <div>
        <label htmlFor="attenuation_level">attenuation level</label>
        <input id='attenuation_level' name='attenuation_level' type='Number' className='border rounded-lg'onChange={handleChange} value={beer.attenuation_level}/></div>
      <div>
        <label htmlFor="contributed_by">Contributed by</label>
        <input id='contributed_by' name='contributed_by' type='text' className='border rounded-lg'onChange={handleChange} value={beer.contributed_by}/></div>
      
      <button type='submit' className='border p-2 rounded-lg px-6' >Submit</button>
      
      
      
      
    </form>
  )
}

export default BeerForm