import Image from "next/image";
import image from '../../public/images/hotels/500x380/500x380Adler.png'

export default function MainPopularTowns() {
  return (
    <>
      <div className="block bg1">
        <div className="block-width">
          <div className="description-wrapper">
            <h2 className="block-header">
              Скидки на отели и гостиницы в популярных городах
            </h2>
            <div className="hr">
              <span className="icon-city"></span>
            </div>
            <div className="text-layout text-styles alignLeft long-text-wrapper">
              Пользователи выбирают гостиницы, а мы собираем информацию о
              направлениях, которые у них популярны. Эти данные обновляются
              ежедневно.
            </div>
            <div className="linking-block bg1 linking-block--in_block">
              <div className="block-width">
                <div className="card-list card-list-linking-block owl-carousel owl-theme owl-responsive-1080 owl-loaded owl-text-select-on">
                  <div
                    className="owl-stage-outer"
                    style={{
                      position: "relative",
                      overflow: "hidden",
                      transform: "translateZ(0)",
                    }}
                  >
                    <div
                      className="owl-stage"
                      style={{
                        transform: "translate3d(-1080px, 0px, 0px)",
                        transition: "all 0s ease 0s",
                        width: "5400px",
                      }}
                    >
                      <div
                        className="owl-item cloned"
                        style={{ width: "270px", marginRight: "0px" }}
                      >
                        <div className="card">
                          <a
                            className="card-inner"
                            href="#"
                            title="Отели в Анапе"
                          >
                            <Image
                              width="250"
                              height="190"
                              src={image}
                              alt="Анапа"
                              title="Анапа"
                            />
                            <span className="card-name-text">
                              Анапа
                              <span className="card-name-subText">

                              </span>
                            </span>
                          </a>
                        </div>
                      </div>
                      <div
                        className="owl-item cloned"
                        style={{ width: "270px", marginRight: "0px" }}
                      >
                        <div className="card">
                          <a
                            className="card-inner"
                            href="#"
                            title="Отели в Казани"
                          >
                            <Image
                              width="250"
                              height="190"
                              src={image}
                              alt="Анапа"
                              title="Анапа"
                            />
                            <span className="card-name-text">
                              Казань
                              <span className="card-name-subText">

                              </span>
                            </span>
                          </a>
                        </div>
                      </div>
                      <div
                        className="owl-item cloned"
                        style={{ width: "270px", marginRight: "0px" }}
                      >
                        <div className="card">
                          <a
                            className="card-inner"
                            href="#"
                            title="Отели в Геленджике"
                          >
                            <Image
                              width="250"
                              height="190"
                              src={image}
                              alt="Анапа"
                              title="Анапа"
                            />
                            <span className="card-name-text">
                              Геленджик
                              <span className="card-name-subText"></span>
                            </span>
                          </a>
                        </div>
                      </div>
                      <div
                        className="owl-item cloned"
                        style={{ width: "270px", marginRight: "0px" }}
                      >
                        <div className="card">
                          <a
                            className="card-inner"
                            href="#"
                            title="Отели в Калининграде"
                          >
                            <Image
                              width="250"
                              height="190"
                              src={image}
                              alt="Анапа"
                              title="Анапа"
                            />
                            <span className="card-name-text">
                              Калининград
                              <span className="card-name-subText">

                              </span>
                            </span>
                          </a>
                        </div>
                      </div>
                      <div
                        className="owl-item active"
                        style={{ width: "270px", marginRight: "0px" }}
                      >
                        <div className="card">
                          <a
                            className="card-inner"
                            href="#"
                            title="Отели в Москве"
                          >
                            <Image
                              width="250"
                              height="190"
                              src={image}
                              alt="Анапа"
                              title="Анапа"
                            />
                            <span className="card-name-text">
                              Москва
                              <span className="card-name-subText">

                              </span>
                            </span>
                          </a>
                        </div>
                      </div>
                      <div
                        className="owl-item active"
                        style={{ width: "270px", marginRight: "0px" }}
                      >
                        <div className="card">
                          <a
                            className="card-inner"
                            href="#"
                            title="Отели в Санкт-Петербурге"
                          >
                            <Image
                              width="250"
                              height="190"
                              src={image}
                              alt="Анапа"
                              title="Анапа"
                            />
                            <span className="card-name-text">
                              Санкт-Петербург
                              <span className="card-name-subText">

                              </span>
                            </span>
                          </a>
                        </div>
                      </div>
                      <div
                        className="owl-item active"
                        style={{ width: "270px", marginRight: "0px" }}
                      >
                        <div className="card">
                          <a
                            className="card-inner"
                            href="#"
                            title="Отели в Сочи"
                          >
                            <Image
                              width="250"
                              height="190"
                              src={image}
                              alt="Анапа"
                              title="Анапа"
                            />
                            <span className="card-name-text">
                              Сочи
                              <span className="card-name-subText">

                              </span>
                            </span>
                          </a>
                        </div>
                      </div>
                      <div
                        className="owl-item active"
                        style={{ width: "270px", marginRight: "0px" }}
                      >
                        <div className="card">
                          <a
                            className="card-inner"
                            href="#"
                            title="Отели в Адлере"
                          >
                            <Image
                              width="250"
                              height="190"
                              src={image}
                              alt="Анапа"
                              title="Анапа"
                            />
                            <span className="card-name-text">
                              Адлер
                              <span className="card-name-subText">

                              </span>
                            </span>
                          </a>
                        </div>
                      </div>
                      <div
                        className="owl-item"
                        style={{ width: "270px", marginRight: "0px" }}
                      >
                        <div className="card">
                          <a
                            className="card-inner"
                            href="#"
                            title="Отели в Ялте"
                          >
                            <Image
                              width="250"
                              height="190"
                              src={image}
                              alt="Анапа"
                              title="Анапа"
                            />
                            <span className="card-name-text">
                              Ялта
                              <span className="card-name-subText">

                              </span>
                            </span>
                          </a>
                        </div>
                      </div>
                      <div
                        className="owl-item"
                        style={{ width: "270px", marginRight: "0px" }}
                      >
                        <div className="card">
                          <a
                            className="card-inner"
                            href="#"
                            title="Отели в Анталье"
                          >
                            <Image
                              width="250"
                              height="190"
                              src={image}
                              alt="Анапа"
                              title="Анапа"
                            />
                            <span className="card-name-text">
                              Анталья
                              <span className="card-name-subText">

                              </span>
                            </span>
                          </a>
                        </div>
                      </div>
                      <div
                        className="owl-item"
                        style={{ width: "270px", marginRight: "0px" }}
                      >
                        <div className="card">
                          <a
                            className="card-inner"
                            href="#"
                            title="Отели в Стамбуле"
                          >
                            <Image
                              width="250"
                              height="190"
                              src={image}
                              alt="Анапа"
                              title="Анапа"
                            />
                            <span className="card-name-text">
                              Стамбул
                              <span className="card-name-subText">

                              </span>
                            </span>
                          </a>
                        </div>
                      </div>
                      <div
                        className="owl-item"
                        style={{ width: "270px", marginRight: "0px" }}
                      >
                        <div className="card">
                          <a
                            className="card-inner"
                            href="#"
                            title="Отели в Дубае"
                          >
                            <Image
                              width="250"
                              height="190"
                              src={image}
                              alt="Анапа"
                              title="Анапа"
                            />
                            <span className="card-name-text">
                              Дубай
                              <span className="card-name-subText">

                              </span>
                            </span>
                          </a>
                        </div>
                      </div>
                      <div
                        className="owl-item"
                        style={{ width: "270px", marginRight: "0px" }}
                      >
                        <div className="card">
                          <a
                            className="card-inner"
                            href="#"
                            title="Отели в Анапе"
                          >
                            <Image
                              width="250"
                              height="190"
                              src={image}
                              alt="Анапа"
                              title="Анапа"
                            />
                            <span className="card-name-text">
                              Анапа
                              <span className="card-name-subText">

                              </span>
                            </span>
                          </a>
                        </div>
                      </div>
                      <div
                        className="owl-item"
                        style={{ width: "270px", marginRight: "0px" }}
                      >
                        <div className="card">
                          <a
                            className="card-inner"
                            href="#"
                            title="Отели в Казани"
                          >
                            <Image
                              width="250"
                              height="190"
                              src={image}
                              alt="Анапа"
                              title="Анапа"
                            />
                            <span className="card-name-text">
                              Казань
                              <span className="card-name-subText">

                              </span>
                            </span>
                          </a>
                        </div>
                      </div>
                      <div
                        className="owl-item"
                        style={{ width: "270px", marginRight: "0px" }}
                      >
                        <div className="card">
                          <a
                            className="card-inner"
                            href="#"
                            title="Отели в Геленджике"
                          >
                            <Image
                              width="250"
                              height="190"
                              src={image}
                              alt="Анапа"
                              title="Анапа"
                            />
                            <span className="card-name-text">
                              Геленджик
                              <span className="card-name-subText">

                              </span>
                            </span>
                          </a>
                        </div>
                      </div>
                      <div
                        className="owl-item"
                        style={{ width: "270px", marginRight: "0px" }}
                      >
                        <div className="card">
                          <a
                            className="card-inner"
                            href="#"
                            title="Отели в Калининграде"
                          >
                            <Image
                              width="250"
                              height="190"
                              src={image}
                              alt="Анапа"
                              title="Анапа"
                            />
                            <span className="card-name-text">
                              Калининград
                              <span className="card-name-subText">

                              </span>
                            </span>
                          </a>
                        </div>
                      </div>
                      <div
                        className="owl-item cloned"
                        style={{ width: "270px", marginRight: "0px" }}
                      >
                        <div className="card">
                          <a
                            className="card-inner"
                            href="#"
                            title="Отели в Москве"
                          >
                            <Image
                              width="250"
                              height="190"
                              src={image}
                              alt="Анапа"
                              title="Анапа"
                            />
                            <span className="card-name-text">
                              Москва
                              <span className="card-name-subText">

                              </span>
                            </span>
                          </a>
                        </div>
                      </div>
                      <div
                        className="owl-item cloned"
                        style={{ width: "270px", marginRight: "0px" }}
                      >
                        <div className="card">
                          <a
                            className="card-inner"
                            href="#"
                            title="Отели в Санкт-Петербурге"
                          >
                            <Image
                              width="250"
                              height="190"
                              src={image}
                              alt="Анапа"
                              title="Анапа"
                            />
                            <span className="card-name-text">
                              Санкт-Петербург
                              <span className="card-name-subText">

                              </span>
                            </span>
                          </a>
                        </div>
                      </div>
                      <div
                        className="owl-item cloned"
                        style={{ width: "270px", marginRight: "0px" }}
                      >
                        <div className="card">
                          <a
                            className="card-inner"
                            href="#"
                            title="Отели в Сочи"
                          >
                            <Image
                              width="250"
                              height="190"
                              src={image}
                              alt="Анапа"
                              title="Анапа"
                            />
                            <span className="card-name-text">
                              Сочи
                              <span className="card-name-subText">

                              </span>
                            </span>
                          </a>
                        </div>
                      </div>
                      <div
                        className="owl-item cloned"
                        style={{ width: "270px", marginRight: "0px" }}
                      >
                        <div className="card">
                          <a
                            className="card-inner"
                            href="#"
                            title="Отели в Адлере"
                          >
                            <Image
                              width="250"
                              height="190"
                              src={image}
                              alt="Анапа"
                              title="Анапа"
                            />
                            <span className="card-name-text">
                              Адлер
                              <span className="card-name-subText">

                              </span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="owl-controls">
                    <div className="owl-nav">
                      <div
                        className="card-list-nav card-list-nav_prev"
                        
                      >
                        <i className="card-list-nav-icon fa-solid fa-angle-left"></i>
                      </div>
                      <div
                        className="card-list-nav card-list-nav_next"
                        
                      >
                        <i className="card-list-nav-icon fa-solid fa-angle-right"></i>
                      </div>
                    </div>
                    <div className="owl-dots">
                      <div className="owl-dot active">
                        <span></span>
                      </div>
                      <div className="owl-dot">
                        <span></span>
                      </div>
                      <div className="owl-dot">
                        <span></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
