import React from "react";
import styles from "../styles/form.module.css";
const Form = () => (
  <form className="max-w-[100%] flex flex-row max-xsm:flex-col max-sm:flex-col max-md:justify-evenly max-xsm:justify-center max-sm:justify-center max-lg:justify-evenly lg:justify-evenly m-5">
    <div className="w-[35%] ml-10 pl-10">
      <h1 className="font-bold my-2 text-xs ">Name:</h1>
      <input
        type="text"
        className={`${styles.forminput} ${styles.smallPlaceholder} text-bg_text_gray`}
      />
      <h1 className="font-bold my-2 text-xs ">Password:</h1>
      <input
        type="password"
        className={`${styles.forminput} ${styles.smallPlaceholder} text-bg_text_gray `}
      />
      <h1 className="font-bold my-2 text-xs ">Location:</h1>
      <input
        type="location"
        className={`${styles.forminput} ${styles.smallPlaceholder} text-bg_text_gray`}
        placeholder="Location"
      />
      <h1 className="font-bold flex flex-col my-2 text-xs ">Social Links:</h1>
      <input
        type="text"
        className={`${styles.forminput} ${styles.smallPlaceholder} text-bg_text_gray`}
        placeholder="Social Media"
      />
      <input
        type="text"
        className={`${styles.forminput} ${styles.smallPlaceholder} text-bg_text_gray`}
        placeholder="Social Media"
      />
    </div>
    <div className="w-[31%] ml-20 flex flex-col flex-wrap ">
      <h1 className="font-bold text-xs my-2 ">Email:</h1>
      <input
        type="text"
        className={`${styles.forminput} ${styles.smallPlaceholder} text-bg_text_gray`}
        placeholder="Email"
      />
      <h1 className="font-bold my-2 text-xs ">Profession:</h1>
      <input
        type="text"
        className={`${styles.forminput} ${styles.smallPlaceholder} text-bg_text_gray`}
        placeholder="Profession"
      />
    </div>
  </form>
);

export default Form;
