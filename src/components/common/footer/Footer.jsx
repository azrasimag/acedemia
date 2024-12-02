import React from "react"
import { blog } from "../../../dummydata"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <section className='newletter'>
        <div className='container flexSB'>
          <div className='left row'>
            <h1>Öğrenmenin En Kolay ve Etkili Yolu!</h1>
            <span>Eğitim dünyasına adım atmak isteyenler için en kaliteli ve güncel kurslarla donatılmış online eğitim platformumuza hoş geldiniz! Alanında uzman eğitmenlerimizle, sıfırdan ileri seviyeye kadar tüm becerilerinizi geliştirebilir ve kariyerinizde yeni ufuklara yelken açabilirsiniz.</span>
          </div>
          <div className='right row'>
            <input type='text' placeholder='Email adresini gir' />
            <i className='fa fa-paper-plane'></i>
          </div>
        </div>
      </section>
      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <h1>AKADEMİ PLUS</h1>
            <span>ÇEVRİMİÇİ EĞİTİM & ÖĞRENME</span>
            <p>Geleceğin güvencesi sağlam temellere dayalı bir eğitime, eğitim ise öğretmene dayalıdır. -M.K.ATATÜRK</p>

            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-instagram icon'></i>
          </div>
          <div className='box link'>
            <h3>Keşfedin</h3>
            <ul>
              <li>Hakkımızda</li>
              <li>Hizmetler</li>
              <li>Kurslar</li>
              <li>Blog</li>
              <li>İletişim</li>
            </ul>
          </div>
          <div className='box link'>
            <h3>Hızlı Linkler</h3>
            <ul>
              <li>İletişim</li>
              <li>Fiyatlandırma</li>
              <li>Şartlar & Koşullar</li>
              <li>Gizlilik</li>
              <li>Geri Bildirimler</li>
            </ul>
          </div>
          <div className='box'>
            <h3>Son Gönderi</h3>
            {blog.slice(0, 3).map((val) => (
              <div className='items flexSB'>
                <div className='img'>
                  <img src={val.cover} alt='' />
                </div>
                <div className='text'>
                  <span>
                    <i className='fa fa-calendar-alt'></i>
                    <label htmlFor=''>{val.date}</label>
                  </span>
                  <span>
                    <i className='fa fa-user'></i>
                    <label htmlFor=''>{val.type}</label>
                  </span>
                  <h4>{val.title.slice(0, 40)}...</h4>
                </div>
              </div>
            ))}
          </div>
          <div className='box last'>
            <h3>Sorularınız mı var?</h3>
            <ul>
              <li>
                <i className='fa fa-map'></i>
                Çıplaklı, Akdeniz Blv. No:290/A, 07190 Döşemealtı/Antalya
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                +90 507 965 9905
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                info@antalya.edu.tr
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          <i className='fa fa-heart'></i> by AzraCeren
        </p>
      </div>
    </>
  )
}

export default Footer