import "./../components/aboutPage/styles/about.css";
import Image from "./../components/aboutPage/img/about-image.png";

const About = () => {
  return (
    <>
      <div className="container">
        <div className="about-page-header">
          <div className="about-page-header-text">
            <p>
              <span className="special-text">/</span>Про-мене
            </p>
          </div>
          <p className="about-description">хто я?</p>
        </div>

        <div className="about-section">
          <div>
            <div className="about-content">
              <p className="about-description">
                Привіт! В резюме я згадував ім'я Makiv — це прізвисько, яке мені дали мої друзі, і воно мені дуже до вподоби. Однак офіційно я використовую ім'я Максим, або просто Макс. <br /><br />
                Я фронтенд-розробник самоук з Києва, Україна. Моя ціль — створювати неймовірні вебсайти, які не просто працюють, а вражають і захоплюють користувачів. Від першого рядка коду до фінального дизайну, я роблю все, щоб ваш вебсайт був ідеальним на будь-якому пристрої.<br /><br />
                Мій козир — написання коду, який виглядає як мистецтво: чистий, елегантний та потужний. Я завжди в пошуках нових викликів і можливостей для розвитку, тому кожен проект для мене — це нова пригода і шанс вивчити щось нове.<br /><br />
                Перетворення моєї креативності та знань у вебсайти — це не просто робота, а справжня пристрасть, яку я плекаю вже більше року. Я постійно слідкую за новітніми технологіями і завжди відкритий до впровадження інновацій. У кожен проект я вкладаю максимум зусиль, щоб досягти найкращих результатів.<br /><br />
                Давайте створювати щось неймовірне разом!
              </p>
            </div>
          </div>
          <div className="about-image">
            <img src={Image} alt="Фотографія про мене" />
          </div>
        </div>
      </div>

      <div className="skills">
        <div className="container">
          <div className="skills-header">
            <div className="skills-header-text">
              <p>
                <span className="special-text">#</span>Навички
              </p>
              <div className="line-limit" id="line-limit"></div>
            </div>
          </div>

          <div className="skills-frame">
            <div className="box box-animation">
              <div className="square square-animation"></div>
            </div>

            <div className="skills-item">
              <div className="skills-name skills-border">
                <p>Мови</p>
              </div>
              <div className="skills-description skills-border">
                <p>Python, HTML, CSS, JavaScript</p>
              </div>
            </div>

            <div className="skills-item">
              <div className="skills-name skills-border">
                <p>Бази Даних</p>
              </div>
              <div className="skills-description skills-border">
                <p>SQLite, SQL</p>
              </div>
            </div>

            <div className="skills-item">
              <div className="skills-name skills-border">
                <p>Фреймворки</p>
              </div>
              <div className="skills-description skills-border">
                <p>React, Django, AOS</p>
              </div>
            </div>

            <div className="skills-item">
              <div className="skills-name skills-border">
                <p>Інструменти</p>
              </div>
              <div className="skills-description skills-border">
                <p>VSCode, Windows, Figma, Git, Photoshop, npm</p>
              </div>
            </div>

            <div className="skills-item">
              <div className="skills-name skills-border">
                <p>Soft навички:</p>
              </div>
              <div className="skills-description skills-border">
                <ul className="soft-ul">
                  <li>Комунікабельність</li>
                  <li>Креативність</li>
                  <li>Стресостійкість</li>
                  <li>Командна робота</li>
                  <li>Адаптивність до нових технологій</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
