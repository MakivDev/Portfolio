import React from 'react';
import './../components/contactsPage/styles/contact.css';

import EmailImg from './../components/homePage/img/Email.svg';
import TelegramImg from './../components/homePage/img/Telegram.svg';

const Contact = () => {
    return (
        <section className="contacts">
            <div className="container">
                <div className="contacts-header">
                    <div className="contacts-header-text">
                        <p><span className="special-text">/</span>Контакти</p>
                    </div>
                </div>
                <div className="contacts-frame">
                    <div className="contacts-text">
                        <p>Мене цікавлять можливості фрілансу та постійної роботи. Однак, якщо у вас є інший запит або питання, не соромтеся звертатися до мене.</p>
                    </div>
                    <div className="contacts-message">
                        <div className="contacts-message-items" data-aos="zoom-in">
                            <div>
                                <img className="contacts-message-img" src={EmailImg} alt="Email" />
                                <p>maks.ku4.rb@gmail.com</p>
                            </div>
                            <div>
                                <img className="contacts-message-img" src={TelegramImg} alt="Telegram" />
                                <p>@Makiv_dev</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="contacts-availability">
                        <h3>Графік онлайну</h3>
                        <p>Я завжди з понеділка по п'ятницю з 10:00 до 20:00 (UTC+3). Вихідні дні - субота та неділя. Всі запити, надіслані після робочих годин, будуть оброблені наступного робочого дня.</p>
                    </div>
            </div>
            
        </section>
    );
};

export default Contact;
