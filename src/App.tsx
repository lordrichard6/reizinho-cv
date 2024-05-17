import { useState } from "react";
import { AnimatePresence, motion, useScroll } from 'framer-motion';
import { Link } from 'react-scroll';

import { SlClose } from "react-icons/sl";

import './globals.scss'
import { certifications, socialMedia, contact, skills, workExp, projects } from './data'

import paulo_header from './assets/img/paulo_main.png'
import SkillCard from "./components/SkillCard";
import TimelineItem from "./components/TimeLineItem";
import ProjectCard from "./components/ProjectCard";


const App: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const { scrollYProgress } = useScroll();


  return (
    <main>
      <motion.div
        className="scroll-progress fixed top-0 w-screen h-4 bg-[#1A5866] z-50"
        style={{ scaleX: scrollYProgress }}
      />
      <header className='min-h-screen flex-centered pb-20'>
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

      <section id="contact" className='contact-section flex-centered h-full min-h-screen lg:min-h-[60vh] w-full bg-light-color-02 text-[#262A2D] py-20'>
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

      <section className='education-section flex items-center justify-around flex-col min-h-screen bg-dark-color-01 text-light-color-01 py-20'>
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
                <>
                  <motion.div key={cert.id} onClick={() => setSelectedId(cert.id)} layoutId={cert.id} className='bg-[#262A2D] px-6 py-6 rounded-xl flex-centered standart-animation standart-hover z-0'>
                    <motion.h4 className='w-[200px] text-center'>{cert.title}</motion.h4>
                  </motion.div>
                  <AnimatePresence>
                    {selectedId === cert.id && (
                      <motion.div layoutId={selectedId} className="fixed top-[5%] lg:top-1/5 left-0 lg:left-1/3 flex-centered z-40">
                        <motion.div onClick={() => setSelectedId(null)} className="overlay absolute-center fixed w-screen h-screen bg-[#262A2D] backdrop-blur-md opacity-80" />
                        <motion.div className='bg-dark-color-02 max-w-[360px] lg:min-w-[500px] lg:max-w-[800px] min-h-[500px] opacity-100 z-50 rounded-xl p-10 mx-4 flex flex-col'>
                          <SlClose onClick={() => setSelectedId(null)} className='text-light-color-01 standart-hover standart-animation text-4xl absolute top-0 right-0 my-4 mx-6' />
                          <motion.h4 className='text-center my-4'>{cert.title}</motion.h4>
                          <motion.ul className="list-disc">
                            {cert.skills.map((skill) => {
                              return (
                                <motion.li className="text-light-color-01"><p className="text-sm leading-normal lg:text-[24px] font-light">{skill}</p></motion.li>
                              )
                            })}
                          </motion.ul>
                          <motion.div className="flex flex-col lg:flex-row justify-between items-center mt-auto gap-4">
                            <img className="h-10 max-w-[320px] lg:h-20 lg:max-w-[480px] invert mt-4" src={cert.image} alt={cert.school} />
                            <button className='bg-[#776C62] text-light-color-01 w-fit p-4 rounded-xl standart-hover standart-animation text-2xl'><a href={cert.link} target="_blank" rel="noopener noreferrer">Certification PDF</a></button>
                          </motion.div>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>

              )
            })}
          </div>
        </div>
      </section>

      <section className='skills-section flex-centered flex-col min-h-[60vh] bg-light-color-01 text-light-color-01 py-20'>
        <h1 className='text-dark-color-01 mb-10'>Skills</h1>
        <div style={{ perspective: '1000px' }} className="flex-centered flex-col lg:flex-row gap-6">
          {skills.map((skill) => {
            return (
              <SkillCard
                key={skill.title}
                cardColor={skill.cardColor}
                cardType={skill.title}
                title={skill.title}
                techs={skill.techs}
              />
            )
          })}
        </div>

      </section>

      <section className='experience-section min-h-screen flex flex-col bg-light-color-02 py-20'>
        <h1 className='text-dark-color-01 mb-10 text-center'>Profissional Experience</h1>
        <div className="relative">
          {
            workExp.length > 0 && (
              <div className="timeline-container">
                {workExp.map((data, idx) => (
                  <TimelineItem data={data} key={idx} />
                ))}
              </div>
            )
          }
        </div>

      </section>

      <section className='projects-section flex flex-col items-center justify-evenly min-h-[60vh] bg-beje-color py-20'>
        <h1 className='text-light-color-02 mb-10 text-center'>Projects</h1>
        <div className="section-width-default flex justify-evenly">
          <div className="personal w-1/2">
            <h2 className='text-light-color-02 text-center mb-6'>Personal</h2>
            <div className="flex flex-wrap gap-6 text-light-color-02 text-center">
              {projects
                .filter(proj => proj.type === "personal")
                .map((proj) => (
                  <ProjectCard
                    key={proj.title}
                    name={proj.title}
                    type={proj.type}
                    tags={proj.tags}
                    img={proj.image}
                    alt={proj.alt}
                    project_type={proj.project_type}
                    link={proj.link}
                  />
              ))}

            </div>
          </div>
          <div className="profissional w-1/2">
            <h2 className='text-light-color-02 text-center mb-6'>Profissional</h2>
            <div className="flex flex-wrap gap-6 text-light-color-02 text-center">
            {projects
                .filter(proj => proj.type === "profissional")
                .map((proj) => (
                  <ProjectCard
                    key={proj.title}
                    name={proj.title}
                    type={proj.type}
                    tags={proj.tags}
                    img={proj.image}
                    alt={proj.alt}
                    project_type={proj.project_type}
                    link={proj.link}
                  />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className='min-h-[60vh] bg-dark-color-01'>

      </section>
      <section className='min-h-[60vh] bg-light-color-01'>

      </section>
    </main>
  )
}

export default App
