import Image from "next/image";
import first from "../../public/images/hotels/catalog/1.png";
import second from "../../public/images/hotels/catalog/2.png";
import third from "../../public/images/hotels/catalog/3.png";
import fourth from "../../public/images/hotels/catalog/4.png";
import fifth from "../../public/images/hotels/catalog/5.png";
import sixth from "../../public/images/hotels/catalog/6.png";

export default function CatalogCard({
  id,
  discount,
  fullName,
  stars,
  priceFrom,
  rating,
}) {
  const images = [first, second, third, fourth, fifth, sixth];

  const setStars = () => {
    let content = []
    for (let i = 1; i <= stars; i++) {
      content.push(<i key={i} className="fa-solid fa-star"></i>)
    }
    return content
  }

  return (
    <>
      <div className="card card-card_discount card-card_border">
        <div className="card-inner">
          <div className="card-discount">
            <span className="value">Cкидка {discount}% </span>
          </div>
          <div className="card-info">
            <span className="card-stars">
              {setStars()}
            </span>
            <div className="card-reviews">Хороший отель</div>
            <div className="card-location-wrap">
              <span className="card-location">
                <i className="card-location-icon icon-location"></i>
                <span className="card-location-text">
                  1.5 км до центра Верхнее Джемете
                </span>
              </span>
            </div>
          </div>
          <div className="card-image-area">
            <span className="card-rating card-rating_good" title={rating}>
              <span className="card-rating-text">Рейтинг&nbsp;</span>
              <span className="card-rating-value">{rating}</span>
            </span>
            <a href="#" title={fullName}>
              <span className="card-name">{fullName}</span>
              <span className="card-image">
                <Image
                  width="372"
                  height="319"
                  src={images[id]}
                  alt="Отель «Славянка» All Inclusive"
                  title="Отель «Славянка» All Inclusive"
                />
              </span>
            </a>
            <span className="card-price card-price--discount">
              <span className="card-price-text">
                От&nbsp;
                <b>
                  <span data-role="currency" data-value={priceFrom}>
                    {priceFrom} ₽
                  </span>
                </b>
              </span>
            </span>
          </div>
          <div className="card-form-area">
            <form className="card-form form_mini" action="" method="get">
              <div className="card-form-field-wrap">
                <label className="card-form-field-label">Прибытие</label>
                <div className="card-form-field card-form-field_date">
                  <div className="hlf-input hlf-input--calendar">
                    <input
                      type="text"
                      placeholder="Прибытие"
                      tabIndex="91"
                      height="60"
                    />
                    <input
                      type="text"
                      className="datepicker-hidden hasDatepicker"
                      id="dp1652801999509"
                    />

                    <div className="hint"></div>
                    <div className="pseudo-placeholder">Прибытие</div>
                  </div>
                </div>
              </div>
              <div className="card-form-field-wrap">
                <label className="card-form-field-label">Выезд</label>
                <div className="card-form-field card-form-field_date">
                  <div className="hlf-input hlf-input--calendar">
                    <input
                      type="text"
                      placeholder="Выезд"
                      tabIndex="92"
                      height="60"
                    />
                    <input
                      type="text"
                      className="datepicker-hidden hasDatepicker"
                      id="dp1652801999510"
                    />

                    <div className="hint" hlf-role="hint"></div>
                    <div className="pseudo-placeholder" hlf-role="placeholder">
                      Выезд
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-form-field-wrap">
                <div className="card-form-field card-form-field_submit">
                  <button tabIndex="94">Узнать цены</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
