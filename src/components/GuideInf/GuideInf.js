import { useLayoutEffect } from 'react';

import AnimationScroll from '../../AnimationScroll';

import './GuideInf.css';

const GuideInf = () => {
  useLayoutEffect(() => {
    AnimationScroll();
  }, []);

  return (
    <div className="guide__container _animation-item _no-hide">
      <div className="guide__title">Бесплатный гайд</div>
      <div className="guide__star"></div>
      <div className="guide__lightning"></div>

      <div className="guide__text">
        Получите бесплатный гайд по искусственному интеллекту, который поможет улучшить работу графического дизайнера
      </div>
    </div>
  );
};

export default GuideInf;
