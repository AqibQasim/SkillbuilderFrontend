import React, { useState, useEffect } from "react";
import styles from "../styles/dropdown.module.css"; // Ensure this path is correct

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (!event.target.closest(`.${styles.dropbtn}`)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.dropdown}>
      <button className={styles.dropbtn} onClick={toggleDropdown}>
        &#8942;
      </button>
      <div className={`${styles.dropdownContent} ${isOpen ? styles.show : ""}`}>
        <a href="#link1">Link 1</a>
        <a href="#link2">Link 2</a>
        <a href="#link3">Link 3</a>
      </div>
    </div>
  );
};

export default Dropdown;
