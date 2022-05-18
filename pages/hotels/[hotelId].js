import { useRouter } from "next/router";
import Router from "next/router";
import { MainLayout } from "../../components/Main/MainLayout";

export default function Hotel({ hotel }) {
  const router = useRouter();
  // console.log('', router);
  return (
    <MainLayout>
      <div>
        <h1>This is a hotel page №{router.query.id}</h1>
        <div>
          <h1>Hotel №{hotel.id}</h1>
          <h1>{hotel.fullName}</h1>
          <p>Price ${hotel.priceFrom}</p>
        </div>
        <button onClick={() => Router.push("/")}>Back to home</button>
      </div>
    </MainLayout>
  );
}

Hotel.getInitialProps = async (context) => {
  const response = await fetch(
    "http://localhost:3304/hotels/" + context.query.id
  );
  const hotel = await response.json();

  if (!hotel) 
    return {
      notFound: true
    }

  return {
    hotel
  };
};
