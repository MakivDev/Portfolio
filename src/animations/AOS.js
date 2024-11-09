import AOS from 'aos';
import 'aos/dist/aos.css';  // Імпортуємо стилі AOS

const initAOS = () => {
  AOS.init({
    duration: 1000,  // Тривалість анімації
    once: true,      // Анімація буде виконуватись лише один раз
    easing: 'ease-in-out',
  });
};

export default initAOS;
