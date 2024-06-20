import React, { useState } from 'react'
import { MajorCertificate } from '../types'

import { HiPlusCircle, HiMinusCircle } from "react-icons/hi";


const BestCertificates: React.FC<MajorCertificate> = ({ type, courseStatus, logo, title, courses, certificate, certLink, percent }) => {
    const [open, setOpen] = useState(true)

    const toggleOpen = () => {
        setOpen(!open);
        console.log(open)
    };

    return (
        <div className="bg-[#262A2D] px-6 py-6 my-4 rounded-xl z-0 w-full overflow-y-hidden">
            <div className="flex flex-col lg:flex-row text-center lg:justify-between gap-4">
                <h4 className='order-1 lg:order-0'>{type}</h4>
                <h4 className='lg:order-1'>Status: {courseStatus}</h4>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-4 mb-4">
                <img className='w-60 lg:w-40 mx-auto lg:mx-0' src={logo} alt="" />
                <h2 className='text-center'>{title}</h2>
            </div>
            {certificate ?
                <a href={certLink} target="_blank" rel="noopener noreferrer" className='flex w-fit mx-auto standart-animation standart-hover my-2'>
                    <img className='w-full rounded-lg' src={certificate} alt="" />
                </a>
                :
                (!certificate && percent > 0) ? <div className='mx-auto my-6' role="progressbar" aria-valuenow={percent} aria-valuemin={0} aria-valuemax={100} style={{ "--value": percent } as React.CSSProperties} />
                :
                (!certificate && percent === 0) ? <h3 className=''>Coming Soon!!!</h3> : null
            }
            {courses.length > 1 ?
                <div className="">
                    <div className="flex">
                        <h4>Course index:</h4>
                        <button className='text-3xl ml-2 standart-animation standart-hover' onClick={toggleOpen}>
                            {open ? <HiPlusCircle /> : <HiMinusCircle />}
                        </button>
                    </div>
                    <ul className={`lg:ml-4 origin-top overflow-hidden standart-animation ${open ? 'scale-y-0 max-h-[0px]' : 'scale-y-1 h-auto max-h-[2000px]'}`}>
                        {courses.map((course) => (
                            <li className='my-2' key={course.title}>
                                <hr />
                                <p className='font-bold'>{course.title}</p>
                                <p className='text-base lg:text-xl font-light'>Skills learned:</p>
                                <div className='flex flex-wrap gap-2 my-1 ml-2'>
                                    {course.skills?.map((skill, i) => (
                                        <span key={i}>{skill}</span>
                                    ))}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div> :
                null
            }
        </div>
    )
}

export default BestCertificates