import { cloneElement } from "react";

function LayoutWidth({ children }) {
  return cloneElement(children, {
    className: `${
      children?.props?.className ? children.props.className + " " : ""
    }w-[90%] max-w-screen-2xl mx-auto`,
  });
}

export default LayoutWidth;
