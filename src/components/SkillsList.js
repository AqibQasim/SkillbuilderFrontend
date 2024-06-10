

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
        <div className="my-10 w-[90%] mt-[-1rem]">
            <h1 className='text-2xl  font-semibold'>Our Top Skills At Your Disposal</h1>
            <div className="container mx-auto border w-[100%] bg-white rounded-tl-br p-4 shadow-xl mt-12 overflow-hidden">
                <div className="logos mx-auto w-[100%]">
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
