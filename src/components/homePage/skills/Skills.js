import './skills.css'
const Skills = () => {
    return (  <div class="skils">
        <div class="container">
  
          <div class="skils-header">
            <div class="skils-header-text">
              <p><span class="special-text">#</span>Навички</p>
              <div class="limit-line-skils" id="limit-line-skils"></div>
            </div>
          </div>
          <div class="skils-frame">
            <div class="quadro-box quadro-box-animation">
              <div class="quadro quadro-animation "></div>
            </div>
  
            <div>
              <div class="skils-item">
                
                <div class="skils-name skils-border">
                  <p>Мови</p>
                </div>
                <div class="skils-description skils-border">
                  <p> Python HTML CSS JavaScript</p>
                </div>
              </div>
            </div>  
            <div>
              <div class="skils-item">
                <div class="skils-name skils-border">
                  <p>БазиДаних</p>
                </div>
                <div class="skils-description skils-border">
                  <p>SQLite, SQL</p>
                </div>
              </div>
  
              <div class="skils-item">
                <div class="skils-name skils-border">
                  <p>Фраємворки</p>
                </div>
                <div class="skils-description skils-border">
                  <p> REACT Django AOS</p>
                </div>
              </div>
            </div>
  
            <div>
              <div class="skils-item">
                <div class="skils-name skils-border">
                  <p>Інструменти</p>
                </div>
                <div class="skils-description skils-border">
                  <p>VSCode Windows Figma Git Photoshop npm</p>
                </div>
              </div>
  
              <div class="skils-item">
                <div class="skils-name skils-border">
                  <p>Soft навички:</p>
                </div>
                <div class="skils-description skils-border">
                  <ul class="soft-ul">
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
      </div> );
}
 
export default Skills;