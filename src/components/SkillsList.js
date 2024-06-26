

import '../styles/skills.css';
import Image from 'next/image';
import React from "react";

const SkillsList = () => {
    const imageSize = 40;

    const skills = [
        { src: '/dataScience.svg', alt: 'Data Science', label: 'Data Science' },
        { src: '/criticalThinking.svg', alt: 'Critical Thinking', label: 'Critical Thinking' },
        { src: '/problemSolving.svg', alt: 'Problem Solving', label: 'Problem Solving' },
        { src: '/testAutomation.svg', alt: 'Test Automation', label: 'Test Automation' },
    ];

    const repeatedSkills = [...Array(100)].flatMap(() => skills);

    return (
        <div className="my-10 mt-0 max-sm:h-[40vh] w-[90%] max-sm:flex max-sm:flex-col max-sm:items-center  max-sm:mb-0 max-sm:mt-4 max-sm:my-4">
            <h1 className='text-2xl mb-[-0.5rem] font-semibold max-sm:mt-[1rem]  max-sm:text-center max-sm:text-xl max-sm:w-[100%] max-sm:mb-[1rem]'>Our Top Skills At Your Disposal</h1>
            <div className="container max-sm:h-[50%] mx-auto max-sm:mx-0 border  bg-white rounded-tl-br p-4 shadow-xl mt-12 w-[100%] max-sm:w-[50rem]  max-sm:mt-4  overflow-hidden">
                <div className="logos max-sm:h-[100%] mx-auto ">
                    <div className="logos-slide flex gap-x-16 animate-scroll"> 
                        {repeatedSkills.map((skill, index) => (
                            <div key={index} className='flex flex-col justify-between items-center gap-3'>
                                <Image src={skill.src} alt={skill.alt} width={imageSize} height={imageSize} className="img" />
                                <p className='font-semibold'>{skill.label}</p>
                            </div>  
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SkillsList;
