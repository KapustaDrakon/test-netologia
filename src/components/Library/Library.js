import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './Library.css';

const Library = () => {
  return (
    <div className="library">
      <div className="library__slider">
        <Swiper
          spaceBetween={10}
          slidesPerView="auto"
          modules={[Navigation]}
          navigation={true}
          breakpoints={{
            320: {
              spaceBetween: 10,
            },
            1161: {
              spaceBetween: 14,
            },
          }}
        >
          <SwiperSlide>
            <div className="library__slider-card">
              <img className="slider-card__image" src="/images/Fashion1.svg" alt="Fashion" />
              <div className="slider-card__title">Fashion ракурсы</div>
              <p className="slider-card__text">
                Откройте для себя секреты создания уникальных fashion ракурсов с помощью Midjourney. Мы расскажем, как
                подобрать идеальный стиль, позу и атмосферу.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="library__slider-card">
              <img className="slider-card__image" src="/images/3d1.svg" alt="3d" />
              <div className="slider-card__title">3D объекты</div>
              <p className="slider-card__text">
                Научитесь создавать впечатляющие 3D объекты с помощью Midjourney. Узнайте, как воплотить свои идеи в
                трехмерной форме и придать вашим проектам реалистичность.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="library__slider-card">
              <img className="slider-card__image" src="/images/Background1.svg" alt="Background" />
              <div className="slider-card__title">Фоновые изображения</div>
              <p className="slider-card__text">
                Погрузитесь в мир создания фоновых изображений с Midjourney. Узнайте, как подобрать идеальный фон для
                ваших проектов, чтобы подчеркнуть стиль.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="library__slider-card">
              <img className="slider-card__image" src="/images/Portraits1.svg" alt="Portraits" />
              <div className="slider-card__title">Портреты</div>
              <p className="slider-card__text">
                Откройте для себя искусство создания портретов с Midjourney. Узнайте, как передать эмоции, характер и
                стиль персонажа, создавая уникальные образы.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="library__slider-card">
              <img className="slider-card__image" src="/images/Characters1.svg" alt="Characters" />
              <div className="slider-card__title">Персонажи</div>
              <p className="slider-card__text">
                Создавайте захватывающих персонажей с помощью Midjourney. Узнайте, как воплотить в жизнь уникальные
                образы, придавая им характер и индивидуальность.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Library;
