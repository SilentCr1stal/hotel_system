import CatalogCard from "./CatalogCard";

export default function MainCatalogPopularHotels({ hotels }) {
  console.log('catalog', hotels);
  const discounts = [23, 56, 49, 47, 60, 19];
  return (
    <>
      <div className="block">
        <div className="description-wrapper">
          <div className="block-width">
            <h2 className="block-header">Скидки на популярные отели</h2>
            <div className="hr">
              <span className="icon-label"></span>
            </div>
            <div className="text-layout text-styles alignLeft long-text-wrapper">
              Сравнивайте и бронируйте лучшие предложения по популярным
              направлениям и не забудьте посмотреть скидки. Чтобы забронировать
              номер, заполните дату заезда и выезда в форме поиска после
              перехода на страницу понравившегося отеля.
            </div>
          </div>
          <div className="card-list card-list__city">
            {hotels.map((hotel, i) => (
              <CatalogCard
                id={i}
                discount={discounts[i]}
                fullName={hotel.fullName}
                priceFrom={hotel.priceFrom}
                rating={hotel.rating}
                stars={hotel.stars}
                key={hotel.id}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
