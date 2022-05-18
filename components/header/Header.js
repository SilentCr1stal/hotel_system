import styles from "../../styles/header/header.module.scss";
import { useState } from 'react'
import Image from 'next/image'
import logo from '../../public/images/logo/logo.png'

export default function Header() {
  const [value, setValue] = useState('')


  return (
    <>
      <header className="header header-realy-big">
        <div className="header-image-wrap">
          <div
            className="header-image"
            id="bgPict"
          ></div>
        </div>
        <div className="header-shadow"></div>
        <div className="block-width height100">
          <div className="auth-container" data-role="auth-container"></div>
          <div className="header-location">
            <a href="#" className="header-location-info">
              <span className="header-location-name">
                Нижний Новгород, Россия
              </span>
              <span className="header-location-counter">Отели и гостиницы</span>
            </a>
          </div>
          <a
            className="logo logo_header"
            href="#"
            title="Поиск и бронирование отелей"
          >
            <Image
              src={logo}
              alt="GuestHouse"
            />
          </a>
          <div className="header-form-area">
            <h1>Поиск отелей, хостелов и апартаментов</h1>
            <div className="header-subtitle">
              Забронируйте номер по выгодной цене!
            </div>
            <div className="form-wrap form-wrap_line">
              <form
                className="form form_line"
                action="#"
                method="get"
                target="_blank"
              >
                <ul className="form-list">
                  <li className="form-item form-autocomplete ui-front">
                    <div className="hlf-input hlf-input--ac">
                      <input
                        type="text"
                        placeholder="Укажите город, отель или место"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        tabIndex="31"
                        autoComplete="off"
                        autoCorrect="off"
                        autoCapitalize="off"
                        spellCheck="false"
                        className="ui-autocomplete-input"
                      />
                      <div className="icon-load"></div>
                      <i className="icon-close"></i>
                      <div className="hint">
                        Введите, пожалуйста, название города или отеля
                      </div>
                    </div>
                  </li>
                  <li
                    className="form-item form-datepicker"
                  >
                    <div
                      className="hlf-input hlf-input--calendar"
                    >
                      <input
                        type="text"
                        placeholder="Прибытие"
                        tabIndex="32"
                        height="60"
                      />
                      <input
                        type="text"
                        className="datepicker-hidden hasDatepicker"
                        id="dp1652801999505"
                      />

                      <div className="hint"></div>
                      <div
                        className="pseudo-placeholder"
                      >
                        Прибытие
                      </div>
                    </div>
                  </li>
                  <li
                    className="form-item form-datepicker"
                  >
                    <div className="hlf-input hlf-input--calendar">
                      <input
                        type="text"
                        placeholder="Выезд"
                        tabIndex="33"
                        height="60"
                      />
                      <input
                        type="text"
                        className="datepicker-hidden hasDatepicker"
                        id="dp1652801999506"
                      />

                      <div className="hint"></div>
                      <div
                        className="pseudo-placeholder"
                      >
                        Выезд
                      </div>
                    </div>
                  </li>
                  <li className="form-item form-submit">
                    <button tabIndex="35">
                      Поиск
                    </button>
                  </li>
                </ul>
              </form>
            </div>
          </div>
          <div className="header-banner">
            <div id="doubleclick_content_header_banner"></div>
          </div>
        </div>
        <div className="header-triangle">
          <div className="header-triangle-elem header-triangle-elem_left"></div>
          <div className="header-triangle-elem header-triangle-elem_right"></div>
        </div>
      </header>
    </>
  );
}
