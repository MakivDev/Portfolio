import LogoNeon from "./img/LogoNeon.png"
import MyPhoto1 from "./img/MyPhoto1.png"


import "./header.css"
const Header = () => {
    return ( 
      <div className="header">

      <div className="header-row">
        <div className="about-me-container">
          <div className="about-me-text">
            <div className="about-me-text-1 "  data-aos="flip-up">
              <p>
                Makiv як
                <span className="special-text"> веб-дизайнер</span> та
                <span className="special-text"> фронтенд-розробник</span>
              </p>
            </div>
            <div className="about-me-text-2 " data-aos="zoom-in-right">
              <p>
                Моє потрфоліо, де я коротко опишу інформацію про себе та мої
                роботи
              </p>
            </div>
          </div>
          <div className="about-me-img " data-aos="zoom-out-left">
            <div className="about-me-img-part1">
              <img
                className="background-image"
                src={LogoNeon}
                alt=""
              />
              <img
                className="foreground-image"
                src={MyPhoto1}
                alt=""
              />
            </div>
            <div className="about-me-img-part2">
              <div className="pink-square"></div>
              <p className="about-me-img-text " data-aos="flip-left">Готовий до співпраці</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
      );
}
 
export default Header;