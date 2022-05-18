import Image from "next/image";
import Adler from "../../public/images/hotels/slider/адлер.png";
import Sochi from "../../public/images/hotels/slider/сочи.png";
import Peter from "../../public/images/hotels/slider/питер.png";
import Kazan from "../../public/images/hotels/slider/казань.png";
import Lyuks from "../../public/images/hotels/slider/люкс.png";

export default function MainCarouselSection() {
  return (
    <>
      <div
        id="carouselHotelsImages"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="2000"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselHotelsImages"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselHotelsImages"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselHotelsImages"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselHotelsImages"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselHotelsImages"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="2000">
            <Image src={Adler} className="w-100" alt="" width={1920} height={1000}/>
            <div className="carousel-caption d-none d-md-block">
              <h5 className="carousel__headerImage-text">
                Путешествуйте вместе с GuestHouse!
              </h5>
              <p>
                Выбрать бюджетный номер не сложно. Используйте фильтр по цене и
                на первой странице окажутся только дешевые варианты хостелов,
                гестхаусов и апартаментов.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <Image src={Sochi} className="w-100" alt="" width={1920} height={1000}/>
            <div className="carousel-caption d-none d-md-block">
              <h5 className="carousel__headerImage-text">
                Забронировать отель в Сочи
              </h5>
              <p>
                Сочи — идеальное место для семей и пар, средняя оценка отелей у
                этих категорий путешественников 8.9 баллов по десятибалльной
                шкале.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <Image src={Lyuks} className="w-100" alt="" width={1920} height={1000}/>
            <div className="carousel-caption d-none d-md-block">
              <h5 className="carousel__headerImage-text">
                Скидки на отели и гостиницы в популярных городах
              </h5>
              <p>
                Пользователи выбирают гостиницы, а мы собираем информацию о
                направлениях, которые у них популярны. Эти данные обновляются
                ежедневно.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <Image src={Peter} className="w-100" alt="" width={1920} height={1000}/>
            <div className="carousel-caption d-none d-md-block">
              <h5 className="carousel__headerImage-text">
                Забронировать отель в Санкт-Петербурге
              </h5>
              <p>
                Изучите нашу подборку лучших предложений по бронированию отелей
                в Санкт-Петербурге, чтобы выбрать именно то, что вам нужно!
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <Image src={Kazan} className="w-100" alt="" width={1920} height={1000}/>
            <div className="carousel-caption d-none d-md-block">
              <h5 className="carousel__headerImage-text">Отели в Казани</h5>
              <p>
                Доверьтесь рекомендациям путешественников с нашей подборкой
                самых популярных отелей Казани.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselHotelsImages"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselHotelsImages"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
