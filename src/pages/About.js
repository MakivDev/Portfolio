

import "./../components/aboutPage/styles/about.css"

import Image from "./../components/aboutPage/img/about-image.png"

const About = () => {
  return (
    <>

      <div className="container">
        <div className="about-page-header">
          <div className="about-page-header-text">
            <p><span className="special-text">/</span>Про-мене</p>
          </div>
          <div>
            <p className="about-description">хто я?</p>
          </div>
          
        </div>

        <div class="about-frame">
            <div>
              <div class="about-container ">
                <p class="about-text ">
                  Привіт! В резюме я згадував ім'я Makiv — це прізвисько, яке мені дали мої друзі, і воно мені дуже до вподоби. Однак офіційно я використовую ім'я Максим, або просто Макс. <br /><br />
                  Я фронтенд-розробник самоук з Києва, Україна. Моя ціль — створювати неймовірні вебсайти, які не просто працюють, а вражають і захоплюють користувачів. Від першого рядка коду до фінального дизайну, я роблю все, щоб ваш вебсайт був ідеальним на будь-якому пристрої.
                  <br /><br />
                  Мій козир — написання коду, який виглядає як мистецтво: чистий, елегантний та потужний. Я завжди в пошуках нових викликів і можливостей для розвитку, тому кожен проект для мене — це нова пригода і шанс вивчити щось нове.
                  <br /><br />
                  Перетворення моєї креативності та знань у вебсайти — це не просто робота, а справжня пристрасть, яку я плекаю вже більше року. Я постійно слідкую за новітніми технологіями і завжди відкритий до впровадження інновацій. У кожен проект я вкладаю максимум зусиль, щоб досягти найкращих результатів.
                  <br /><br />
                  Давайте створювати щось неймовірне разом!
                </p>
              
              </div>
            </div>
            <div class="about-img">
              <img src={Image} alt="фів" />
            </div>
          </div>

      </div>


    </>
  );
}

export default About;