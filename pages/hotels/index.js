import Link from 'next/link';
import { MainLayout } from '../../components/Main/MainLayout';

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
    <div>
      <ul>
        {hotels.map(hotel => {
          return <li key={hotel.id}><Link href={`/hotels/[id]`} as={`/hotels/${hotel.id}`}><a>{hotel.fullName}</a></Link></li>
        })}
      </ul>
    </div>
  </MainLayout>
}

Hotels.getInitialProps = async () => {
  const response = await fetch('http://localhost:3304/hotels')
  const hotels = await response.json()

  return {
    hotels
  }
}
