// import { useEffect } from "react";
import { motion, useScroll } from 'framer-motion';
import { Link } from 'react-scroll';

import './globals.scss'
import { certifications, socialMedia, contact, skills, workExp, projects, degrees } from './data'

import paulo_header from './assets/img/paulo_main.png'
import SkillCard from "./components/SkillCard";
import TimelineItem from "./components/TimeLineItem";
import ProjectCard from "./components/ProjectCard";
import EducationCard from "./components/EducationCard";



const App: React.FC = () => {
  const { scrollYProgress } = useScroll();

  // const showTechs = {
  //     js: skills[0].techs.find(tech => tech.name === "Javascript"),
  // }
  const progLang = [
    skills[0].techs.find(tech => tech.name === "Javascript"),
    skills[1].techs.find(tech => tech.name === "Python"),
  ]
  const progFra = [
    skills[0].techs.find(tech => tech.name === "React"),
    skills[0].techs.find(tech => tech.name === "Next.js"),
    skills[0].techs.find(tech => tech.name === "Angular"),
  ]




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

      <section className='education-section flex-centered min-h-screen bg-dark-color-01 text-light-color-01 py-20'>
        <div className="section-width-default flex items-center justify-around flex-col">

          <h1 className='mb-'>Education</h1>

          <div className="degrees flex-centered flex-col h-full w-full mb-10">
            <div className="flex-centered gap-2 mb-4 lg:mb-10">
              <hr className='w-20 lg:w-40' />
              <h2>Degrees</h2>
              <hr className='w-20 lg:w-40' />
            </div>
            <p className='mb-8'>Three years of study with a top grade and practical knowledge in accounting and management is a very good background to get into the software engineering world.</p>
            <EducationCard
              id={degrees.id}
              title={degrees.title}
              skills={degrees.skills}
              image={degrees.image}
              school={degrees.school}
              link={degrees.link}
            />
          </div>

          <div className="certificates flex-centered flex-col h-full">
            <div className="flex-centered gap-2">
              <hr className='w-20 lg:w-40' />
              <h2>Certificates</h2>
              <hr className='w-20 lg:w-40' />
            </div>
            <p className='mt-8'>Here I gather all my certifications achieved over the years of study related to Software Engineering and developemnt, done in online platforms such as Coursera, Udemy and FreeCodeCamp.</p>
            <div className="grid lg:grid-cols-4 gap-4 mt-10">
              {certifications.map((data) => {
                return (
                  <EducationCard
                    id={data.id}
                    title={data.title}
                    skills={data.skills}
                    image={data.image}
                    school={data.school}
                    link={data.link}
                  />
                )
              })}
            </div>
          </div>
        </div>

      </section>

      <section className='skills-section flex-centered min-h-[60vh] bg-light-color-01 text-light-color-01 py-20'>
        <div className="section-width-default flex-centered flex-col">
          <h1 className='text-dark-color-01 mb-10'>Skills</h1>

          <p className='text-dark-color-01'>The skills below are the ones I'm more experieced.</p>
          <div className="proefficient w-full flex flex-col lg:flex-row justify-evenly">
            <div className="text-dark-color-01 my-10">
              <h2>Programming Languages</h2>
              <div className="">
                {progLang.map((tech) => (
                  <span key={tech?.name} className="flex items-center my-2">
                    <tech.icon className={`text-4xl mr-2 rounded-lg ${tech?.color}`} /><h2>{tech?.name}</h2>
                  </span>
                ))}
              </div>

            </div>
            <div className="text-dark-color-01 my-10">
              <h2>Frameworks</h2>
              <div className="">
                {progFra.map((tech) => (
                  <span key={tech?.name} className="flex items-center my-2">
                    <tech.icon className={`text-4xl mr-2 rounded-lg ${tech?.color}`} /><h2>{tech?.name}</h2>
                  </span>
                ))}
              </div>
            </div>
          </div>

          <p className='text-dark-color-01 my-8'>Behind these cards are grouped all the technical skills I have knowledge about or experienced professionaly.</p>
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
        </div>

      </section>

      <section className='experience-section min-h-screen flex flex-col bg-light-color-02 py-20'>
        <h1 className='text-dark-color-01 mb-10 text-center'>Profissional Experience</h1>
        <div className="section-width-default mx-auto">
          <p className=''>During my path to achieving my dream, become a developer I worked in different areas, the most relevant were, the internship at Feinheit at the beginning of my journey and Frontend Dev at Pickwings at a later stage of my game.</p>
        </div>
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
        <div className="section-width-default mx-auto mb-6 text-light-color-02">
          <p>Here are the most relevant projects I've worked on related to web/software developemnt.</p>
          <br />
          <p>On the left are the personal projects I've built, either on a course or on my own, showing my creativity and capacity to deliver. On the right side are the projects I've built and/or supported on a professional enviroment, with cooperation with a team of designers and developers throught my journey.</p>
        </div>
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

      {/* <section className='min-h-[60vh] bg-dark-color-01'>
        <h1 className='text-light-color-01 mb-10 text-center'>Soft Skills</h1>   
      </section>
      <section className='min-h-[60vh] bg-light-color-01'>

      </section> */}
    </main>
  )
}

export default App
