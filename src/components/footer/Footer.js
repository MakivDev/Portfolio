import EmailImg from './img/Email.svg'
import './footer.css'
const Footer = () => {
    return ( 
    <div className="footer">
      <div className="container">
            <div className="footer-frame" data-aos="fade-down">
                <div className="footer-left">
                    <div className="footer-logo">
                        <img className="logo-img" src="img/nav/LogoWhite.png" alt="LogoWhite" />
                        <p className="logo-name">Makiv</p>
                        <p className="footer-email">maks.ku4.rb@gmail.com</p>
                    </div>
                    <div className="footer-context">
                        <p>Веб дизайнер та фронтенд-розробник</p>
                    </div>
                </div>
                <div className="footer-right">
                   
                    <div className="cosial-header">Соцмережі</div>
                    <div className="cosial-img">
                        <img src={EmailImg} alt=""/>
                        <img src={EmailImg} alt=""/>
                        <img src={EmailImg} alt=""/>
                    </div>
                </div>
            </div>
          <div className="footer-ps"><p>© Copyright 2024. Made by Makiv</p></div>
      </div>
    </div>
     );
}
 
export default Footer;