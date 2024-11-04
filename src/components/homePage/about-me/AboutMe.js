import './about-me.css'
import AboutImage from './img/about-image.png'
import { Link, useLocation } from 'react-router-dom';


const AboutMe = () => {
  return (<div class="about-me">
    <div class="container">

      <div class="about-header">
        <div class="about-header-text">
          <p><span class="special-text">#</span>Про себе</p>
          <div class="limit-line-about" id="limit-line-about"></div>
        </div>
      </div>

      <div class="about-frame">
        <div>
          <div class="about-container ">
            <p class="about-text ">
              Привіт! В резюме я згадував ім'я Makiv — це прізвисько, яке мені дали мої друзі, і воно мені дуже до вподоби. Однак офіційно я використовую ім'я Максим, або просто Макс. <br /><br />
              Я фронтенд-розробник самоук з Києва, Україна. Моя ціль — створювати неймовірні вебсайти, які не просто працюють, а вражають і захоплюють користувачів. Від першого рядка коду до фінального дизайну, я роблю все, щоб ваш вебсайт був ідеальним на будь-якому пристрої.
              <br /><br />

            </p>
            <Link className="about-info" to="/projects" ><button>Більше →</button> </Link>
            
          </div>
        </div>
        <div class="about-img">
          <img src={AboutImage} alt="фів" />
        </div>
      </div>
    </div>
  </div>
  );
}

export default AboutMe;