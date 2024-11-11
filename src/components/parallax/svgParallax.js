// src/components/SvgParallax.js
import React, { useEffect, useState } from 'react';
import { ReactComponent as SvgOne } from './../../img/Point.svg';
import { ReactComponent as SvgTwo } from './../../img/Square.svg';

import './svgParallax.css';

const SvgParallax = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY); // Оновлюємо значення скролу
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="parallax">
      {/* Шар 1 - Зліва, з анімацією */}
      <div className="parallax__layer layer-0">
        <SvgOne className="parallax__svg" />
      </div>

      {/* Шар 2 - Справа, з анімацією */}
      <div className="parallax__layer layer-1">
        <SvgTwo className="parallax__svg" />
      </div>
    </div>
  );
};

export default SvgParallax;
