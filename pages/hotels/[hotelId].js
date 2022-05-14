import { useRouter } from 'next/router'
import Router from 'next/router';
import { MainLayout } from '../../components/MainLayout';

export default function Hotel() {
  const router = useRouter();
  console.log('', router);
  return (<MainLayout>
    <div>
      <h1>This is a hotel page №{router.query.hotelId}</h1>
      <button onClick={() => Router.push('/')}>Back to home</button>
    </div>
  </MainLayout>)
}