import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <section className="contacts">
      <div className="container flexSB">
        <div className="left row">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3189.1703568384315!2d30.700638415154617!3d36.890775279938074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c390f3b2ad4ed1%3A0x74e2455fdae33441!2sAntalya%20Bilim%20%C3%9Cniversitesi!5e0!3m2!1str!2str!4v1629966755482!5m2!1str!2str" 
            width="600" 
            height="450" 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="right row">
          <h1>İletişime Geçin</h1>
          <p>Lütfen aşağıdaki formu doldurarak bizimle iletişime geçin.</p>

          <div className="items">
            <div className="box">
              <h3>Adres</h3>
              <p>Çıplaklı Mahallesi, Akdeniz Bulvarı No:290, 07190 Döşemealtı/Antalya</p>
            </div>
            <div className="box">
              <h3>Telefon</h3>
              <p>+90 242 245 00 00</p>
            </div>
            <div className="box">
              <h3>Email</h3>
              <p>info@antalya.edu.tr</p>
            </div>
          </div>

          <form>
            <div className="flexSB">
              <input type="text" placeholder="İsim" />
              <input type="email" placeholder="Email" />
            </div>
            <textarea placeholder="Mesajınız"></textarea>
            <button className="primary-btn">Gönder</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
