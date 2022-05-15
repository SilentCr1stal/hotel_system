import Link from 'next/link';
import { MainLayout } from '../../components/MainLayout';
import { useState, useEffect } from 'react';

export default function Hotels({ hotels }) {
  // const [hotels, setHotels] = useState([])

  // useEffect(() => {
  //   async function load() {
  //     const response = await fetch('http://localhost:3304/hotels')
  //     const json = await response.json()
  //     setHotels(json)
  //   }

  //   load()
  // }, [])

  return <MainLayout title='Все гостиницы России с ценами, бронированием'>
    <h1>Hotels page</h1>
    <Link href={'/hotels/1'}><a>Hotel page</a></Link>
    <div>
      <ul>
        {hotels.map(hotel => {
          return <li key={hotel.hotelId}><Link href={`/hotels/[hotelId]`} as={`/hotels/${hotel.hotelId}`}><a>{hotel.hotelName}</a></Link></li>
        })}
      </ul>
    </div>
  </MainLayout>
}

export async function getStaticProps() {
  const response = await fetch('http://localhost:3304/hotels')
  const hotels = await response.json()

  return {
    props: {
      hotels
    }
  }
}
