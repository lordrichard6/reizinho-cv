import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { SlClose } from 'react-icons/sl';

interface Props {
    id: string;
    title: string;
    skills: string[];
    image: string;
    school: string;
    link: string;
}

const EducationCard: React.FC<Props> = ({ id, title, skills, image, school, link }) => {
    const [selectedId, setSelectedId] = useState<string | null>(null)

    return (
        <>
            <motion.div key={id} onClick={() => setSelectedId(id)} layoutId={id} className='bg-[#262A2D] px-6 py-6 mx-4 lg:mx-0 rounded-xl flex-centered standart-animation standart-hover z-0'>
                <motion.h4 className='lg:w-[200px] text-center'>{title}</motion.h4>
            </motion.div>
            <AnimatePresence>
                {selectedId === id && (
                    <motion.div layoutId={selectedId} className="fixed top-[5%] lg:top-1/4 left-0 lg:left-1/3 flex-centered z-40">
                        <motion.div onClick={() => setSelectedId(null)} className="overlay absolute-center fixed w-screen h-screen bg-[#262A2D] backdrop-blur-md opacity-80" />
                        <motion.div className='bg-dark-color-02 max-w-[360px] lg:min-w-[500px] lg:max-w-[800px] max-h-[500px] opacity-100 z-50 rounded-xl p-10 mx-4 flex flex-col'>
                            <SlClose onClick={() => setSelectedId(null)} className='text-light-color-01 standart-hover standart-animation text-4xl absolute top-0 right-0 my-4 mx-6' />
                            <motion.h4 className='text-center my-4'>{title}</motion.h4>
                            <motion.ul style={{ listStyleType: 'square', padding: '0 20px', color: '#ffffff' }} className="overflow-y-auto max-h-[400px] my-2 px-2 w-full border-y-2 border-x-0 border-solid border-light-color-01">
                                {skills.map((skill) => {
                                    return (
                                        <motion.li className="text-light-color-01 my-2"><p className="text-sm leading-normal lg:text-[24px] font-light text-wrap overflow-x-auto">{skill}</p></motion.li>
                                    )
                                })}
                            </motion.ul>
                            <motion.div className="flex flex-col lg:flex-row justify-between items-center mt-auto gap-4">
                                {image && <img className="max-h-10 max-w-[320px] lg:max-h-20 lg:max-w-[400px] invert mt-4" src={image} alt={school} />}
                                <button className='bg-[#776C62] text-light-color-01 w-fit p-4 rounded-xl standart-hover standart-animation text-lg lg:text-2xl lg:ml-auto'><a href={link} target="_blank" rel="noopener noreferrer">Certification PDF</a></button>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default EducationCard