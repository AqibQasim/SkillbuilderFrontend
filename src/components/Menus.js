import { useOutsideClick } from "@/utils/useOutsideClick";
import { createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { HiEllipsisVertical } from "react-icons/hi2";

function Menu({ children }) {
  return <div className="flex items-center justify-end">{children}</div>;
}

function Toggle({ id }) {
  const { openId, close, open, setPosition } = useContext(MenusContext);

  function handleClick(e) {
    e.stopPropagation();

    const rect = e.target.closest("button").getBoundingClientRect();
    setPosition({
      x: window.innerWidth - rect.width - rect.x,
      y: rect.y + rect.height + 8,
    });

    openId === "" || openId !== id ? open(id) : close();
  }

  return (
    <button
      onClick={handleClick}
      className="translate-x-2 transform rounded-md border-none bg-none p-1 transition-all hover:bg-gray-100"
    >
      <HiEllipsisVertical className="h-6 w-6 text-gray-700" />
    </button>
  );
}

function List({ id, children }) {
  const { openId, position, close } = useContext(MenusContext);
  const ref = useOutsideClick(close, false);

  if (openId !== id) return null;

  return createPortal(
    <ul
      className="fixed min-w-44 rounded-md bg-white shadow-md"
      style={{ top: position?.y, right: position?.x }}
      ref={ref}
    >
      {children}
    </ul>,
    document.body,
  );
}

function Button({ className, children, icon, onClick, disabled }) {
  const { close } = useContext(MenusContext);

  function handleClick() {
    onClick?.();
    close();
  }

  return (
    <li>
      <button
        onClick={handleClick}
        disabled={disabled}
        className={`${className} flex w-full items-center justify-between gap-4 rounded-md border-none bg-none p-3 text-left text-lg transition-all hover:bg-slate-500 disabled:!cursor-not-allowed`}
      >
        <span>{children}</span>
        {icon}
      </button>
    </li>
  );
}

const MenusContext = createContext();

function Menus({ children }) {
  const [openId, setOpenId] = useState("");
  const [position, setPosition] = useState(null);

  const close = () => setOpenId("");
  const open = setOpenId;

  return (
    <MenusContext.Provider
      value={{ openId, close, open, position, setPosition }}
    >
      {children}
    </MenusContext.Provider>
  );
}

Menus.Menu = Menu;
Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;

export default Menus;
