// import { useState } from 'react'
import { Link } from 'react-scroll';

import './globals.scss'
import { certifications, socialMedia, contact } from './data'

import paulo_header from './assets/img/paulo_main.png'

function App() {

  return (
    <>
      <header className='min-h-screen flex-centered'>
        <div className="section-width-default flex flex-col gap-4 lg:flex-row justify-between h-full">
          <div className=" flex justify-center flex-col max-w-[500px] gap-4 lg:gap-9 order-2">
            <h1>Hi, I'm Paulo</h1>
            <p className=''>I am a <strong>frontend developer</strong>, <strong>UX/UI designer</strong> and a <strong>digital marketing enthusiast</strong> who is thorough in his profession. In the evenings and weekends I am an adventurer and bon vivant.</p>
            <button className='bg-dark-color-02 text-light-color-01 w-fit py-3 px-6 rounded-3xl standart-hover standart-animation mx-auto lg:mx-0'><Link to="contact" >Know more</Link></button>
          </div>
          <div className="lg:order-2">
            <img className='w-[500px]' src={paulo_header} alt="" />
          </div>
        </div>
        <hr />
      </header>

      <section id="contact" className='contact-section flex-centered h-full min-h-screen lg:min-h-[60vh] w-full bg-light-color-02 text-[#262A2D]'>
        <div className="section-width-default h-full flex flex-col gap-10 lg:flex-row justify-center lg:justify-around items-center">
          <div className="flex flex-col justify-center gap-4">
            <h1 className='text-center'>Contact</h1>
            <p className='max-w-[600px]'>I was born and raised in <strong>Portugal</strong> but ambition and the love for cheese brought me to Switzerland, more specifically in <strong>Zurich</strong>. I have a <strong>degree in Administration</strong>, accounting experience, sales experience and work in gastro and transportation fields but those who know me know that I have had a <strong>great passion</strong> for everything digital from childhood on.</p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              {contact.map((item) => {
                return (
                  <a className='flex itens-center standart-animation hover:underline' href={item.link}><item.icon className='text-2xl mr-3 my-auto' /><h4 key={item.contact}>{item.contact}</h4></a>
                )
              })}
            </div>
            <div className="flex gap-4">
              {socialMedia.map((social) => {
                return (
                  <button key={social.title} className='bg-[#776C62] text-light-color-01 w-fit p-4 rounded-xl standart-hover standart-animation text-4xl'><a href={social.link} target="_blank" rel="noopener noreferrer"><social.icon /></a></button>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className='education-section py-10 flex items-center justify-around flex-col min-h-screen bg-dark-color-01 text-light-color-01'>
        <h1 className='mb-'>Education</h1>

        <div className="flex-centered flex-col h-full w-full mb-10">
          <div className="flex-centered gap-2 mb-4 lg:mb-10">
            <hr className='w-20 lg:w-40' />
            <h2>Degrees</h2>
            <hr className='w-20 lg:w-40' />
          </div>
          <div className='bg-[#262A2D] px-6 py-6 rounded-xl'>
            <h4 className='w-[200px] text-center'>Management and Administration</h4>
          </div>
        </div>

        <div className="flex-centered flex-col h-full">
          <div className="flex-centered gap-2">
            <hr className='w-20 lg:w-40' />
            <h2>Certificates</h2>
            <hr className='w-20 lg:w-40' />
          </div>
          <div className="grid lg:grid-cols-4 gap-4 mt-10">
            {certifications.map((cert) => {
              return (
                <div className='bg-[#262A2D] px-6 py-6 rounded-xl flex-centered standart-animation standart-hover'>
                  <h4 className='w-[200px] text-center'>{cert.title}</h4>
                </div>
              )
            })}

          </div>
        </div>
      </section>

      <section className='skills-section flex-centered py-10 flex-col min-h-[60vh] bg-light-color-01 text-light-color-01'>
        <h1 className='text-dark-color-01 mb-10'>Skills</h1>
        <div className="flex-centered flex-col lg:flex-row gap-6">
          <div className="w-[350px] h-[514px] bg-[#879EAD] rounded-lg flex-centered">
            <h2>Frontend</h2>
          </div>
          <div className="w-[350px] h-[514px] bg-[#1A5866] rounded-lg flex-centered">
            <h2>Backend</h2>
          </div>
          <div className="w-[350px] h-[514px] bg-[#776C62] rounded-lg flex-centered">
            <h2>DevOps</h2>
          </div>
          <div className="w-[350px] h-[514px] bg-[#99958E] rounded-lg flex-centered">
            <h2>Other</h2>
          </div>
        </div>

      </section>

      {/* <section className='min-h-[60vh] bg-light-color-02'>

      </section> */}
      <section className='min-h-[60vh] bg-beje-color'>

      </section>
      <section className='min-h-[60vh] bg-dark-color-01'>

      </section>
      <section className='min-h-[60vh] bg-light-color-01'>

      </section>
    </>
  )
}

export default App
