
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

import { FreeMode, Autoplay, Pagination } from 'swiper/modules';

import '../styles/slider.css';
import SliderContent from './SliderContent.js';

const Slider = () => {
    return (
        <div className='w-[100%] flex items-center justify-center '>
            <Swiper
                spaceBetween={30}
                pagination={{ clickable: true }}
                modules={[FreeMode, Autoplay, Pagination]}
                className="mySwiper shadow-xl"
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                initialSlide={0} // Ensure the first slide is initialized correctly
            >
                <SwiperSlide>
                    <div className='w-[100%] flex items-center justify-center'>
                        <SliderContent
                            title="Empower Your Journey with"
                            subtitle="Skill Builder"
                            description="We're thrilled to have you here. Feel free to navigate around and make yourself at home. We hope you find inspiration, valuable information, and a sense of belonging during your visit"
                            button="Get Started"
                            src='/heroImg1.svg'
                        />
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-[100%] flex items-center justify-center'>
                        <SliderContent
                            title="Learn"
                            subtitle="API Automation"
                            description="Dive into the world of API automation with Skill Builder's exclusive course and unlock the potential to reshape the future of software development"
                            button="Enroll Now"
                            src='/heroImg2.svg'
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-[100%] flex items-center justify-center'>
                        <SliderContent
                            title="Boost your career with the "
                            subtitle="in-demand skills"
                            description="Join us on a transformative learning journey with our team of seasoned experts who are passionate about demystifying the intricacies of API automation."
                            button="Enroll Now"
                            src='/heroImg3.svg'
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-[100%] flex items-center justify-center'>
                        <SliderContent
                            title="Boost your career with the "
                            subtitle="in-demand skills"
                            description="Join us on a transformative learning journey with our team of seasoned experts who are passionate about demystifying the intricacies of API automation."
                            button="Enroll Now"
                            src='/heroImg4.svg'
                        />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Slider;
