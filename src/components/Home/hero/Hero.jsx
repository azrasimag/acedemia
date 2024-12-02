import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME TO AKADEMİ PLUS' title='En İyi Çevrimiçi Eğitim Uzmanlığı' />
            <p>Geleceğin güvencesi sağlam temellere dayalı bir eğitime, eğitim ise öğretmene dayalıdır. </p>
            <div className='button'>
              <button className='primary-btn'>
              ŞİMDİ BAŞLA <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button>
              DERSİNİ GÖRÜNTÜLE <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
