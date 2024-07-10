import React from "react";
import ShoppingCart from "./ShoppingCart";
import Bill from "./Bill";


const ShopCheckout = ({ setCartsItemsLength, courses }) => {



  return (
    <div>
      <div
        className="w-full h-fit flex flex-wrap gap-2
                        md:flex-nowrap 
                        lg:flex-nowrap"
      >
        <ShoppingCart courses={courses} />
        <Bill courses={courses} />
      </div>
    </div>
  );
};

export default ShopCheckout;