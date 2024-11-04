import './skills.css';

const Skills = () => {
  return (
    <div className="skills">
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

          <div className="skills-item">
            <div className="skills-name skills-border">
              <p>Мови</p>
            </div>
            <div className="skills-description skills-border">
              <p>Python HTML CSS JavaScript</p>
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
              <p>REACT Django AOS</p>
            </div>
          </div>

          <div className="skills-item">
            <div className="skills-name skills-border">
              <p>Інструменти</p>
            </div>
            <div className="skills-description skills-border">
              <p>VSCode Windows Figma Git Photoshop npm</p>
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
  );
}

export default Skills;
