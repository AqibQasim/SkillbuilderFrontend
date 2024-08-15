import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";

const ShoppingCart = ({courses}) => {

  return (
    <div className="w-full p-6 h-fit flex flex-col bg-white">
      <div className="text-2xl font-semibold flex mb-4 justify-center md:inline">
        Shopping cart
      </div>

      {courses?.length > 0 ? (
        courses?.map((course, index) => (
          <React.Fragment key={course.id}>
            <CartItem course={course} />
            {index !== courses.length - 1 && <hr />}
          </React.Fragment>
        ))
      ) : (
        <div className="flex justify-center">Your cart is empty</div>
      )}
    </div>
  );
};

export default ShoppingCart;
