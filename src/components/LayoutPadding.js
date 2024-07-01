import { cloneElement } from "react";

function LayoutPadding({ children }) {
  return cloneElement(children, {
    className: `${
      children.props.className ? children.props.className + " " : ""
    }max-w-maxSize mx-auto px-layout`,
  });
}

export default LayoutPadding;
