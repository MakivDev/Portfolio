import './contacts.css'

import EmailImg from './img/Email.svg'

const Contacts = () => {
    return (  <div className="contacts">
        <div className="container">
           
            <div className="contacts-header">
                <div className="contacts-header-text">
                    <p><span className="special-text">#</span>Контакти</p>
                    <div className="limit-line-contacts" id="limit-line-contacts"></div>
                </div>
            </div>
            <div className="contacts-frame">
                <div className="contacts-text">
                    <p>I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me</p>
                </div>
                <div className="contacts-message">
                    <div className="contacts-message-header" data-aos="fade-down-up"> Напишіть мені </div>
                    <div className="contacts-message-item1" data-aos="zoom-in">
                        <img src={EmailImg} alt=""/>
                        <p>maks.ku4.rb@gmail.com</p>
                    </div>
                    <div classNameName="contacts-message-item2" data-aos="zoom-in">
                        <img src={EmailImg} alt=""/>
                        <p>maks.ku4.rb@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
      </div> );
}
 

export default Contacts;