import { useLayoutEffect } from 'react';

import Header from '../Header/Header';
import Library from '../Library/Library';
import Content from '../Content/Content';

import AnimationScroll from '../../AnimationScroll';

import './App.css';
import '../Library/Library.css';

function App() {
  useLayoutEffect(() => AnimationScroll(), []);
  return (
    <div className="app">
      <Header />
      <div className="library__title-container">
        <div className="library__title _animation-item _no-hide">Библиотека</div>
        <div className="library__subtitle">Рандомные стили</div>
      </div>
      <Library />
      <Content />
    </div>
  );
}

export default App;
