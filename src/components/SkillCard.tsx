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
                <motion.div className="flex-centered flex-wrap relative">
                    {techs.map((tech: Tech) => {
                        return (
                            <motion.div drag dragElastic={0.2} dragConstraints={constraintsRef} className='text-4xl border-solid border-2 text-slate-50 rounded-xl p-2 m-1 cursor-pointer' key={tech.name}>
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