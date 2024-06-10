import Image from 'next/image';
import Slider from './Slider';

const HeroSection = () => {

    return(
        <>
            <div className='h-[70vh] max-sm:h-[70vh] w-[100%] flex justify-center  items-center '>
                <div className='w-[100%] flex justify-center items-center bg-white max-sm:pt-10 '>
                <Slider />
                </div>
            </div>
        </>
    )
}

export default HeroSection;