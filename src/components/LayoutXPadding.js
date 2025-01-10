import { cloneElement } from "react";

function LayoutXPadding({ children }) {
  return cloneElement(children, {
    className: `${
      children?.props?.className ? children.props.className + " " : ""
    } px-3 md:px-3 lg:px-8 xl:px-16 2xl:px-24`,
  });
}

export default LayoutXPadding;
