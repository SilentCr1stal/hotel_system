// import connect from '../utils/connect'
import mongoose from 'mongoose'
import Hotel from '../models/hotelSchema'
import MainFirstSection from "../components/Main/MainFirstSection";
import { MainLayout } from "../components/Main/MainLayout";
import Header from '../components/header/Header'
import MainCarouselSection from "../components/Main/MainCarouselSection";
import MainCatalogPopularHotels from "../components/Main/MainCatalogPopularHotels";
import MainPopularTowns from '../components/Main/MainPopularTowns';
import Footer from '../components/Footer/Footer';



export default function Home({hotels}) {
  return (
    <MainLayout>
      <Header/>
      <MainFirstSection />
      <MainCarouselSection />
      <MainCatalogPopularHotels hotels={Array.from(hotels)}/>
      <MainPopularTowns/>
      <Footer/>
    </MainLayout>
  );
}

export const getServerSideProps = async () => {
  try {
    console.log('Connecting');
    await mongoose.connect(process.env.MONGO_URI)
    console.log('Connected');
    const hotels = await Hotel.find({}).sort({"rating": -1}).limit(6).exec();
    return {
      props: {
        hotels: JSON.parse(JSON.stringify(hotels))
      }
    }
  } catch (error) {
    console.log(error);
    return {
      notFound: true
    }
  }
}
