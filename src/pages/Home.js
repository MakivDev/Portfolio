import { Link } from 'react-router-dom';

import './../components/homePage/styles/animation.css';
import './../components/homePage/styles/media.css';
import './../components/homePage/styles/home.css';

import LogoNeon from './../components/homePage/img/LogoNeon.png';
import MyPhoto1 from './../components/homePage/img/MyPhoto1.png';
import ProjectImgGarageHub from './../components/homePage/img/Project1.png';
import ProjectImgMyPhoto from './../components/homePage/img/Project2.png';
import AboutImage from './../components/homePage/img/about-image.png';
import EmailImg from './../components/homePage/img/Email.svg';
import TelegramImg from './../components/homePage/img/Telegram.svg';

const Home = () => {
    return (
        <>
            <header className="header">
                <div className="header-row">
                    <div className="about-me-container">
                        <div className="about-me-text">
                            <div className="about-me-text-1" data-aos="flip-up">
                                <p>
                                    Makiv як
                                    <span className="special-text"> веб-дизайнер</span> та
                                    <span className="special-text"> фронтенд-розробник</span>
                                </p>
                            </div>
                            <div className="about-me-text-2" data-aos="zoom-in-right">
                                <p>Моє портфоліо, де я коротко опишу інформацію про себе та мої роботи</p>
                            </div>
                        </div>
                        <div className="about-me-img" data-aos="zoom-out-left">
                            <div className="about-me-img-part1">
                                <img className="background-image" src={LogoNeon} alt="Logo" />
                                <img className="foreground-image" src={MyPhoto1} alt="My Photo" />
                            </div>
                            <div className="about-me-img-part2">
                                <div className="pink-square"></div>
                                <p className="about-me-img-text" data-aos="flip-left">Готовий до співпраці</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <section className="projects">
                <div className="container">
                    <div className="projects-header">
                        <div className="projects-header-text">
                            <p><span className="special-text">#</span>Проекти</p>
                            <div className="limit-line-projects" id="limit-line-projects"></div>
                        </div>
                        <Link className="all-projects" to="/about">всі →</Link>
                    </div>

                    <div className="projects-frame">
                        {[{
                            img: ProjectImgGarageHub,
                            languages: "HTML, CSS, Django (Python), Bootstrap",
                            name: "GarageHub",
                            description: "Онлайн магазин продажу автозапчастин"
                        }, {
                            img: ProjectImgMyPhoto,
                            languages: "HTML, CSS, JavaScript, React",
                            name: "Портфоліо",
                            description: "Власне портфоліо, створене з метою почати вивчення React та розповісти про себе"
                        }].map((project, index) => (
                            <div key={index} className="projects-item">
                                <div className="projects-item-img bode project-border">
                                    <img src={project.img} alt={`Project ${index + 1}`} />
                                </div>
                                <div className="projects-item-language project-border">
                                    {project.languages}
                                </div>
                                <div className="projects-item-description project-border">
                                    <p className="project-name">{project.name}</p>
                                    <p className="project-description">{project.description}</p>
                                    <button className="project-info">Детальніше ←→</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="skills">
                <div className="container">
                    <div className="skills-header">
                        <div className="skills-header-text">
                            <p><span className="special-text">#</span>Навички</p>
                            <div className="line-limit" id="line-limit"></div>
                        </div>
                    </div>

                    <div className="skills-frame">
                        <div className="box box-animation">
                            <div className="square square-animation"></div>
                        </div>
                        {[
                            { name: "Мови", description: "Python HTML CSS JavaScript" },
                            { name: "Бази Даних", description: "SQLite, SQL" },
                            { name: "Фреймворки", description: "REACT Django AOS" },
                            { name: "Інструменти", description: "VSCode Windows Figma Git Photoshop npm" },
                            { name: "Soft навички:", description: "Комунікабельність, Креативність, Стресостійкість, Командна робота, Адаптивність до нових технологій" }
                        ].map((skill, index) => (
                            <div key={index} className="skills-item">
                                <div className="skills-name skills-border">
                                    <p>{skill.name}</p>
                                </div>
                                <div className="skills-description skills-border">
                                    <p>{skill.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="about-me">
                <div className="container">
                    <div className="about-header">
                        <div className="about-header-text">
                            <p><span className="special-text">#</span>Про себе</p>
                            <div className="limit-line-about" id="limit-line-about"></div>
                        </div>
                    </div>

                    <div className="about-frame">
                        <div className="about-container">
                            <p className="about-text">
                                Привіт! В резюме я згадував ім'я Makiv — це прізвисько, яке мені дали мої друзі, і воно мені дуже до вподоби. Однак офіційно я використовую ім'я Максим, або просто Макс.
                                Я фронтенд-розробник самоук з Києва, Україна. Моя ціль — створювати неймовірні вебсайти, які не просто працюють, а вражають і захоплюють користувачів.
                            </p>
                            <Link className="about-info" to="/projects"><button>Більше →</button></Link>
                        </div>
                        <div className="about-img">
                            <img src={AboutImage} alt="About" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="contacts">
                <div className="container">
                    <div className="contacts-header">
                        <div className="contacts-header-text">
                            <p><span className="special-text">#</span>Контакти</p>
                            <div className="limit-line-contacts" id="limit-line-contacts"></div>
                        </div>
                    </div>
                    <div className="contacts-frame">
                        <div className="contacts-text">
                            <p>Мене цікавлять можливості фрілансу та постійної роботи. Однак, якщо у вас є інший запит або питання, не соромтеся звертатися до мене.</p>
                        </div>
                        <div className="contacts-message">
                            <div className="contacts-message-items" data-aos="zoom-in">
                                <div><img className="contacts-message-img" src={EmailImg} alt="" /> <p>maks.ku4.rb@gmail.com</p></div>
                                <div><img className="contacts-message-img" src={TelegramImg} alt="" /> <p>@Makiv_dev</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};







export default Home;
