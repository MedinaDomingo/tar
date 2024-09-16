import { useEffect, useState } from 'react';

import '../styles/ScrollingText.CSS'

const ScrollingText = () => {
    const [scrollY, setScrollY] = useState(0);
  
    useEffect(() => {
      const handleScroll = () => {
        setScrollY(window.scrollY); // Obtener el valor del scroll vertical
      };
  
      window.addEventListener('scroll', handleScroll);
  
      // Limpiar el listener de scroll cuando el componente se desmonte
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    // Ajustar la posición horizontal según el valor del scrollY
    const translateX = scrollY % window.innerWidth; // Hacer que el scroll sea infinito
  
    return (
      <div className="scrolling-text bg-primary text-white">
        <p style={{ transform: `translateX(-${translateX}px)` }}>
        VIAJA INTELIGENTE <span className="font-bold">VIVÍ LA ARGENTINA</span> VIAJA INTELIGENTE <span className="font-bold text-orange">VIVÍ LA ARGENTINA</span>
        </p>
      </div>
    );
  };

export default ScrollingText;
