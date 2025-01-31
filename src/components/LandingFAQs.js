import Image from "next/image";
import { useState } from "react";
import LayoutXPadding from "./LayoutXPadding";

const LandingFAQs = () => {
    const [dropDownState, setDropDownState] = useState(false);
    const [secondDropDownState, setSecondDropDownState] = useState(false);
    const [thirdDropDownState, setThirdDropDownState] = useState(false);
    const [fourthDropDownState, setFourthDropDownState] = useState(false);
    const [fifthDropDownState, setFifthDropDownState] = useState(false);
    const [sixthDropDownState, setSixthDropDownState] = useState(false);

    return (
        <LayoutXPadding>
            <div className="h-auto w-[90%] mx-auto flex justify-center items-center flex-col bg-pink-50">
                <div className="h-[100%] w-[100%] mb-[2rem] mt-20 flex justify-center items-center flex-col">
                    <div className="h-[20%] w-[90%] flex flex-col items-center justify-center">
                        <h2 className="text-4xl font-sans font-semibold">Frequently Asked Questions</h2>
                        <p className="text-sm mt-3 text-smallText">
                            Everything you need to know about SkillBuilder.
                        </p>
                    </div>

                    <div className="w-[50%] mt-[1rem] max-md:w-[90%]">
                        <ul className="w-[100%]">
                            <li className="py-4 flex flex-col border-b-[1px] border-darkPurple">
                                <div className="flex justify-between">
                                    <span className="text-lg tracking-wide font-semibold font-sans">
                                        What is SkillBuilder?
                                    </span>
                                    <Image
                                        onClick={() => setDropDownState(!dropDownState)}
                                        src={dropDownState ? "/dropup.png" : "/drop-down.png"}
                                        width={30}
                                        height={30}
                                        alt="Toggle Dropdown"
                                        className="cursor-pointer"
                                    />
                                </div>
                                {dropDownState && (
                                    <p className="text-sm text-smallText mt-3">
                                        SkillBuilder is an online learning platform that offers thousands of courses 
                                        in various fields, including technology, business, design, and personal development. 
                                        Our mission is to make quality education accessible to everyone.
                                    </p>
                                )}
                            </li>

                            <li className="py-4 flex flex-col border-b-[1px] border-darkPurple">
                                <div className="flex justify-between">
                                    <span className="text-lg tracking-wide font-semibold font-sans">
                                        How do I enroll in a course?
                                    </span>
                                    <Image
                                        onClick={() => setSecondDropDownState(!secondDropDownState)}
                                        src={secondDropDownState ? "/dropup.png" : "/drop-down.png"}
                                        width={30}
                                        height={30}
                                        alt="Toggle Dropdown"
                                        className="cursor-pointer"
                                    />
                                </div>
                                {secondDropDownState && (
                                    <p className="text-sm text-smallText mt-3">
                                        To enroll in a course, simply browse our catalog, select a course, and click 
                                        the "Enroll" button. You can start learning immediately after purchasing.
                                    </p>
                                )}
                            </li>

                            <li className="py-4 flex flex-col border-b-[1px] border-darkPurple">
                                <div className="flex justify-between">
                                    <span className="text-lg tracking-wide font-semibold font-sans">
                                        Do I get lifetime access to courses?
                                    </span>
                                    <Image
                                        onClick={() => setThirdDropDownState(!thirdDropDownState)}
                                        src={thirdDropDownState ? "/dropup.png" : "/drop-down.png"}
                                        width={30}
                                        height={30}
                                        alt="Toggle Dropdown"
                                        className="cursor-pointer"
                                    />
                                </div>
                                {thirdDropDownState && (
                                    <p className="text-sm text-smallText mt-3">
                                        Yes! Once you purchase a course, you get lifetime access, allowing you to learn 
                                        at your own pace without any time restrictions.
                                    </p>
                                )}
                            </li>

                            <li className="py-4 flex flex-col border-b-[1px] border-darkPurple">
                                <div className="flex justify-between">
                                    <span className="text-lg tracking-wide font-semibold font-sans">
                                        Can I get a refund if I’m not satisfied?
                                    </span>
                                    <Image
                                        onClick={() => setFourthDropDownState(!fourthDropDownState)}
                                        src={fourthDropDownState ? "/dropup.png" : "/drop-down.png"}
                                        width={30}
                                        height={30}
                                        alt="Toggle Dropdown"
                                        className="cursor-pointer"
                                    />
                                </div>
                                {fourthDropDownState && (
                                    <p className="text-sm text-smallText mt-3">
                                        Absolutely! We offer a 30-day money-back guarantee if you're not satisfied 
                                        with your purchase. Just contact our support team for assistance.
                                    </p>
                                )}
                            </li>

                            <li className="py-4 flex flex-col border-b-[1px] border-darkPurple">
                                <div className="flex justify-between">
                                    <span className="text-lg tracking-wide font-semibold font-sans">
                                        Can I access courses on mobile devices?
                                    </span>
                                    <Image
                                        onClick={() => setFifthDropDownState(!fifthDropDownState)}
                                        src={fifthDropDownState ? "/dropup.png" : "/drop-down.png"}
                                        width={30}
                                        height={30}
                                        alt="Toggle Dropdown"
                                        className="cursor-pointer"
                                    />
                                </div>
                                {fifthDropDownState && (
                                    <p className="text-sm text-smallText mt-3">
                                        Yes! You can access all SkillBuilder courses on your desktop, tablet, or mobile device. 
                                        We also have a mobile app for learning on the go.
                                    </p>
                                )}
                            </li>

                            <li className="py-4 flex flex-col border-b-[1px] border-darkPurple">
                                <div className="flex justify-between">
                                    <span className="text-lg tracking-wide font-semibold font-sans">
                                        Will I receive a certificate after completing a course?
                                    </span>
                                    <Image
                                        onClick={() => setSixthDropDownState(!sixthDropDownState)}
                                        src={sixthDropDownState ? "/dropup.png" : "/drop-down.png"}
                                        width={30}
                                        height={30}
                                        alt="Toggle Dropdown"
                                        className="cursor-pointer"
                                    />
                                </div>
                                {sixthDropDownState && (
                                    <p className="text-sm text-smallText mt-3">
                                        Yes! Upon completing a course, you will receive a certificate of completion, 
                                        which you can share on LinkedIn, add to your resume, or showcase in your portfolio.
                                    </p>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </LayoutXPadding>
    );
};

export default LandingFAQs;

