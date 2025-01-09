import { cloneElement } from "react";

function LayoutXPadding({ children }) {
  return cloneElement(children, {
    className: `${
      children?.props?.className ? children.props.className + " " : ""
    } px-3 md:px-8 lg:px-16 xl:px-20 2xl:px-24`,
  });
}

export default LayoutXPadding;
