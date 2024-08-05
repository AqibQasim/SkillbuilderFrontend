import React, {
  cloneElement,
  createContext,
  useContext,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);

  if (name !== openName) return null;

  return createPortal(
    <div className="bg-black fixed inset-0 z-50 h-full w-full bg-opacity-10 backdrop-blur-sm transition-all duration-500">
      <div className="fixed left-1/2 top-1/2 m-4 max-w-lg -translate-x-1/2 -translate-y-1/2 transform rounded-2xl bg-white p-6 transition-all duration-500">
        <button
          className="absolute right-5 top-3 translate-x-2 rounded-md border-none bg-none p-1 text-gray-500 transition-all duration-200 hover:bg-gray-100"
          onClick={close}
        >
          <HiXMark />
        </button>
        <div>{React.cloneElement(children, { onClose: close })}</div>
      </div>
    </div>,
    document.body,
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
