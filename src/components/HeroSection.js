import Image from 'next/image';
import Slider from './Slider';

const HeroSection = () => {
    return( 
        <>
            <div className='h-auto my-10 max-sm:my-0 max-sm:h-auto max-sm:mt-10 w-[100%]  flex justify-center  items-center '>
                <div className='w-[100%] flex justify-center items-center bg-white max-sm:pt-10 '>
                    <Slider />
                </div>
            </div>
        </>
    )
}
export default HeroSection;