import React, { useRef, useState } from 'react'
import { Tech, TySkillCard } from '../types';
import { motion } from 'framer-motion';
import { TiArrowBack } from "react-icons/ti";

const SkillCard: React.FC<TySkillCard> = ({ cardColor, cardType, title, techs }) => {
    const constraintsRef = useRef(null)
    const [isFlipped, setIsFlipped] = useState(false);

    const handleButtonClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className={`skill-card flex-centered relative w-[350px] h-[300px] lg:h-[514px] lg:max-h-[514px] ${cardType} ${isFlipped ? 'is-flipped' : ''}`}>
            <div onClick={handleButtonClick} className={`card-face front flex-centered rounded-lg cursor-pointer ${cardColor}`}>
                <h2>{title}</h2>
            </div>
            <div ref={constraintsRef} className={`card-face back flex-centered rounded-lg p-10 relative ${cardColor}`}>
                <TiArrowBack onClick={handleButtonClick} className='absolute top-0 right-0 text-6xl cursor-pointer' />
                <motion.div className="grid grid-cols-3 gap-2 place-items-center">
                    {techs.map((tech: Tech) => {
                        return (
                            <motion.div className={`${tech.color ? tech.color : 'text-slate-50'} text-2xl lg:text-4xl border-slate-50 border-solid border-2 rounded-xl p-2 cursor-pointer`} key={tech.name}>
                                <tech.icon />
                            </motion.div>)}
                        )
                    }
                </motion.div>
            </div>
        </div>
    )
}

export default SkillCard