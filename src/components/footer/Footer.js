import LogoWhite from "./img/LogoWhite.png";
import Discord from './img/discord.svg'
import Instagram from './img/instagram.svg'
import Github from './img/github.svg'



import './footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer-frame" data-aos="fade-down">
                    <div className="footer-left">
                        <div className="footer-logo">
                            <img className="logo-img" src={LogoWhite} alt="LogoWhite" />
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
                            <a href="https://discord.gg/r4BTxmgy" target="_blank" >
                                <img className="media" src={Discord} alt="Discord" />
                            </a>
                            <a href="https://github.com/MakivDev" target="_blank" >
                                <img className="media" src={Github} alt="Github" />
                            </a>
                            <a href="https://instagram.com/makivij_" target="_blank" >
                                <img className="media" src={Instagram} alt="Instagram" />
                            </a>

                        </div>
                    </div>
                </div>
                <div className="footer-ps"><p>© Copyright 2024. Made by Makiv</p></div>
            </div>
        </div>
    );
}

export default Footer;