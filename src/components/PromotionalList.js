
import '../styles/skills.css';
import Image from 'next/image';
import React from "react";

const PromotionalList = () => {
    const imageSize = 1280;

    const skills = [
        { src: '/udacity.svg', alt: 'Data Science', label: 'Data Science' },
        { src: '/COURSERA.svg', alt: 'Critical Thinking', label: 'Critical Thinking' },
        { src: '/udemy.svg', alt: 'Problem Solving', label: 'Problem Solving' },
        { src: '/linked.svg', alt: 'Test Automation', label: 'Test Automation' },
    ];

    const repeatedSkills = [...Array(100)].flatMap(() => skills);

    return (
        <div className="my-8 w-[90%] max-sm:h-[40vh] mt-[-1rem] max-sm:mb-0 max-sm:mt-4 max-sm:my-4 ">
            <h1 className='text-2xl font-semibold max-sm:text-center max-sm:text-lg max-sm:w-[100%] mt-[3rem] max-sm:mt-0 '>You Can Also Buy Our Course From</h1>
            <div className="container max-sm:h-[50%] mx-auto border w-[100%] bg-white rounded-tl-br p-4 shadow-xl mt-12 max-sm:mt-4 overflow-hidden">
                <div className="logos max-sm:h-[100%] h-[100%] mx-auto w-[100%]">
                    <div className="logos-slide h-[100%] flex items-center gap-x-16 animate-scroll">
                        {repeatedSkills.map((skill, index) => (
                            <Image src={skill.src} alt={skill.alt} width={imageSize} height={imageSize} className="img2" />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PromotionalList;