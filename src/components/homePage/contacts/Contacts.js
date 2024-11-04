import './contacts.css'

import EmailImg from './img/Email.svg'
import TelegramImg from './img/Telegram.svg'

const Contacts = () => {
    return (<div className="contacts">
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
                    {/* <div className="contacts-message-header" data-aos="fade-down-up"> Напишіть мені </div> */}
                    <div className="contacts-message-items" data-aos="zoom-in">
                        <div><img className='contacts-message-img' src={EmailImg } alt="" /> <p>maks.ku4.rb@gmail.com</p></div>
                        <div><img className='contacts-message-img' src={TelegramImg } alt="" /> <p>@Maakiv</p></div>
                        
                        
                    </div>
                    
                </div>
            </div>
        </div>
    </div>);
}


export default Contacts;