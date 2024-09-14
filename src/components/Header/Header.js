import { useLayoutEffect } from 'react';

import HomeButton from '../HomeButton/HomeButton';
import GetButton from '../GetButton/GetButton';
import GuideInf from '../GuideInf/GuideInf';

import AnimationScroll from '../../AnimationScroll';

import './Header.css';

const Header = () => {
  useLayoutEffect(() => {
    AnimationScroll();
  }, []);

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__inner-top-left"></div>
        <div className="header__inner-top-right"></div>
        <HomeButton />
        <div className="header__devochka _animation-item _no-hide"></div>
        <button type="button" className="header__menu-button" />
        <h1 className="header__title _animation-item _no-hide">Как использовать нейросети</h1>
        <span className="header__title-etc _animation-item _no-hide">в графическом дизайне</span>
        <GetButton />
        <div className="header__inner"></div>
        <GuideInf />
      </div>
    </header>
  );
};

export default Header;
