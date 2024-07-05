import React from 'react'
import CartItem from './CartItem';

const ShoppingCart = (props) => {
    //Taking Dummy Courses For Now
    // const courses = [
    //     // Add your courses data here
    //     { id: 1, title: 'Software Testing', rating: 5, image: '/dummyImg.svg', desc: 'Equipping you with essential skills', price: 480 },
    //     { id: 2, title: 'UI / UX Designing', rating: 4.9, image: '/dummyImg.svg', desc: 'Equipping you with essential skills', price: 480 },
    // ];
    const courses = props.courses;
    
  return (
    <div className='w-full p-6 h-fit flex flex-col bg-white 
                    '>
                        {/* mx-5 mt-5
                        my-5 mr-5 */}
        {/* {courses.map(course=>{
            <div>{cartItem}</div>
        })} */}
        <div className='text-2xl font-semibold flex mb-4 justify-center md:inline'>
            Shopping cart
        </div>
        {/* {courses.map((course,index)=>
            (
            <CartItem key={course.id} {...course}/>
            {index !== courses.length-1 && <hr/>}
        )
        )} */}
        {courses.map((course, index) => (
        <React.Fragment key={course.id}>
          <CartItem {...course} />
          {index !== courses.length - 1 && <hr />}
        </React.Fragment>
      ))}
        
    </div>
  )
}
export default ShoppingCart