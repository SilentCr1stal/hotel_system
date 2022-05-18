import Image from "next/image";
import search from "../../public/images/main/advantages_block_search.svg";
import pig from "../../public/images/main/advantages_block_pig.svg";
import wallet from "../../public/images/main/advantages_block_wallet.svg";

export default function MainFirstSection() {
  return (
    <>
      <div className="block">
        <div className="block-width">
          <div className="description-wrapper">
            <h2 className="block-header">Бронирование отелей на GuestHouse</h2>
            <div className="hr">
              <span className="icon-key"></span>
            </div>
            <div className="advantages-block">
              <div className="advantages-block-title">
                Наши основные преимущества
              </div>
              <ul className="advantages-list">
                <li className="adventages-list-item">
                  <div className="adventages-list-item-img">
                    <Image src={search} alt="search icon" title="search icon" />
                  </div>
                  <div className="adventages-list-item-title">
                    Все цены + скидки
                  </div>
                  <div className="adventages-list-item-text">
                    Мы&nbsp;сравниваем цены на&nbsp;отели
                    в&nbsp;70&nbsp;агентствах бронирования отелей в&nbsp;одном
                    месте.
                  </div>
                </li>
                <li className="adventages-list-item">
                  <div className="adventages-list-item-img">
                    <Image src={pig} alt="pig icon" title="pig icon" />
                  </div>
                  <div className="adventages-list-item-title">
                    Без скрытых платежей
                  </div>
                  <div className="adventages-list-item-text">
                    GuestHouse показывает окончательную цену на&nbsp;отель.
                    Никаких дополнительных налогов и&nbsp;скрытых комиссий.
                  </div>
                </li>
                <li className="adventages-list-item">
                  <div className="adventages-list-item-img">
                    <Image src={wallet} alt="wallet icon" title="wallet icon" />
                  </div>
                  <div className="adventages-list-item-title">Экономно</div>
                  <div className="adventages-list-item-text">
                    Цены на&nbsp;отели постоянно меняются. Подпишитесь
                    на&nbsp;изменение цены нужного отеля.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
