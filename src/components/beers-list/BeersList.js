import React, { useEffect, useState } from 'react'
import BeersItem from '../beers-items/BeersItem';
import beersService from '../../services/beers'

export default function BeersList() {
  const [beers, setBeers] = useState([]);
  console.log(beers)

  useEffect(() => {
    beersService.list()
      .then((beers) => setBeers(beers))
      .catch()
  }, [])
  return (
    <div>
      <h1>Beers</h1>
            {beers.map((beer) => <BeersItem {...beer}/>)}
    </div>
  )
}
