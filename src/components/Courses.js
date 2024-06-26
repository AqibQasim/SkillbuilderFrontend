import Image from "next/image";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import StarRating from "./StarRating";
import '../styles/courses.css'


const Courses = () => {

    const router = useRouter();

    // const renderStars = (rating) => {
    //     const fullStars = Math.floor(rating);
    //     const halfStar = rating % 1 !== 0;
    //     const stars = [];

    //     for (let i = 0; i < fullStars; i++) {
    //         stars.push(<FontAwesomeIcon key={`full-${i}`} icon={faStar} className="text-gold" />);
    //     }

    //     if (halfStar) {
    //         stars.push(<FontAwesomeIcon key="half" icon={faStar} className="text-gold" />);
    //     }

    //     while (stars.length < 5) {
    //         stars.push(<FontAwesomeIcon key={`empty-${stars.length}`} icon={faStar} className="text-gray-300" />);
    //     }

    //     return stars;
    // };
    // const StarRating = ({ rating }) => {

    //     console.log('rating:',rating);
    //     const stars = [];
    //     for (let i = 0; i < 5; i++) {
    //         stars.push(
    //             <FontAwesomeIcon 
    //                 key={i} 
    //                 icon={faStar} 
    //                 className={i < rating ? 'text-yellow-500' : 'text-gray-300'} 
    //             />
    //         );
    //     }

    //     console.log('stars:',stars);
    //     return <div className="flex">{stars}</div>;
    // };


    const courses = [
        // Add your courses data here
        { id: 1, title: 'Software Testing', rating: 5, image: '/dummyImg.svg', desc: 'Equipping you with essential skills', price: 480 },
        { id: 2, title: 'UI / UX Designing', rating: 4.9, image: '/dummyImg.svg', desc: 'Equipping you with essential skills', price: 480 },
        { id: 3, title: 'Web-Development', rating: 4.9, image: '/dummyImg.svg', desc: 'Equipping you with essential skills', price: 480 },
        { id: 4, title: 'Full-Stack Development', rating: 4.9, image: '/dummyImg.svg', desc: 'Equipping you with essential skills', price: 480 },
        { id: 5, title: 'Devops', rating: 4.9, image: '/dummyImg.svg', desc: 'Equipping you with essential skills', price: 480 },
        { id: 6, title: 'API Automation', rating: 4.9, image: '/dummyImg.svg', desc: 'Equipping you with essential skills', price: 480 },
        { id: 7, title: 'Web Automation', rating: 4.9, image: '/dummyImg.svg', desc: 'Equipping you with essential skills', price: 480 },
        { id: 8, title: 'API Automation', rating: 4.9, image: '/dummyImg.svg', desc: 'Equipping you with essential skills', price: 480 },
    ];

    return (
        <>
            <div className="w-[90%] flex justify-between mt-[-0.5rem]   h-auto my-8 max-sm:my-0 max-sm:mb-6 max-sm:mt-[-3rem]">
                <h2 className="text-2xl font-semibold max-sm:text-xl max-sm:mt-4 ">Top Courses</h2>
                <span onClick={() => router.push('/courses')} className="max-sm:mt-4 text-blue font-semibold flex gap-3 items-center cursor-pointer max-sm:text-sm">View All<Image src='/rightArrow.svg' width={15} height={15} /></span>
            </div>

            {/* <div className="w-[100%] flex flex-col justify-center items-center ">
                <div className="h-auto w-[90%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ">
                    {courses.map(course => (
                        <div key={course.id} className="img-container border max-sm:h-auto border-cards_gray sm:w-[14rem] mb-[1rem] max-sm:mb-0 xlg:w-[20rem] lg:w-[17rem] sm:w-[15rem] max-sm:mb-4 max-md:w-[18rem] max-lsm:w-[16rem] max-md: max-sm:w-full max-sm:m-0 h-[20rem] w-[20rem] lg:justify-between bg-white rounded-2xl p-4 flex flex-col items-start">
                            <Image className="w-[100%]" src={course.image} alt={course.title} width={280} height={260} />
                            <div className=" w-[100%] flex justify-start items-center gap-3">
                                <span className="text-sm">{course.rating}</span>
                                <StarRating rating={Math.round(course.rating)} />
                            </div>

                            <h3 className="text-lg font-semibold mt-4 max-md:mt-2">{course.title}</h3>

                            <p className="mb-2 text-sm lg:text-xs">
                                {course.desc}
                            </p>

                            <div className="flex w-[100%] justify-between pb-2 max-md:pb-2">
                                <div className="w-[50%] flex lg:flex-col lg:items-start lg:gap-1 justify-start items-center gap-2">
                                    <span className="text-blue font-semibold">${course.price}</span>
                                    <span className="text-[0.5rem] text-bg_text_gray"><span className="stroke-bg_text_gray">$400</span> 88% off</span>
                                </div>

                                <button className="py-2 px-2 text-white bg-blue rounded-lg text-xs">Add To Cart</button>
                            </div>
                        </div>
                    ))} 
                </div>
            </div> */}

            <div className="w-full flex flex-col justify-center items-center">
                <div className="h-auto w-[90%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 place-items-center">
                    {courses.map(course => (
                        <div key={course.id} className="img-container border border-cards_gray h-auto w-full max-w-sm mb-4 bg-white rounded-2xl p-2 flex flex-col items-start">
                            <Image className="w-[100%] pt-1" src={course.image} alt={course.title} width={280} height={260} />
                            <div className="p-2 w-[100%]">
                                <div className="w-full flex justify-start items-center gap-3 mt-2">
                                    <span className="text-sm">{course.rating}</span>
                                    <StarRating rating={Math.round(course.rating)} />
                                </div>
                                <h3 className="text-lg font-semibold mt-4">{course.title}</h3>
                                <p className="mb-2 text-sm">
                                    {course.desc}
                                </p>

                                <div className="flex w-[100%] justify-between pb-2 max-md:pb-2">
                                    <div className="w-[50%] flex lg:justify-start lg:items-center lg:gap-1 justify-start items-center gap-2">
                                        <span className="text-blue font-semibold">${course.price}</span>
                                        <span className="text-[0.5rem] text-bg_text_gray ">
                                            <span className="stroke-bg_text_gray line-through">$400</span> 88% off</span>
                                    </div>

                                    <button className="py-2 px-2 text-white bg-blue rounded-lg text-xs">Add To Cart</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}

export default Courses;