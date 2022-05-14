import Link from 'next/link';
import { MainLayout } from '../../components/MainLayout';
import { useState, useEffect } from 'react';

export default function Hotels() {
  const [hotels, setHotels] = useState([])

  return <MainLayout title='Все гостиницы России с ценами, бронированием'>
    <h1>Hotels page</h1>
    <Link href={'/hotels/1'}><a>Hotel page</a></Link>
  </MainLayout>
}

// hotels
// hotel/3