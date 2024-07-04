import React from "react";
import styles from "../styles/form.module.css";
const Form = () => (
  <div className="flex items-center justify-center w-[90%] mx-auto">
    <form className=" p-6 w-full xlg:max-w-screen-xlg space-y-6">
      <div className="flex flex-col gap-4 md:gap-0 md:flex-row space-x-0 md:space-x-4">
        <div className="flex-1">
          <label
            htmlFor="firstName"
            className="block mb-2 text-black font-medium text-sm"
          >
            Name:
          </label>
          <input
            id="firstName"
            required
            type="text"
            className="w-[80%] px-4 py-2 border border-border_gray rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
        <div className="flex-1 ">
          <label
            htmlFor="lastName"
            className="block mb-2 text-black font-medium text-sm"
          >
            Email:
          </label>
          <input
            id="lastName"
            required
            type="text"
            placeholder="Email"
            className={`w-[80%] px-4 py-2 border border-border_gray rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 ${styles.smallPlaceholder}`}
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 md:gap-0 md:flex-row space-x-0 md:space-x-4">
        <div className="flex-1">
          <label
            htmlFor="email"
            className="block mb-2 text-black font-medium text-sm"
          >
            Password:
          </label>
          <input
            id="email"
            required
            type="email"
            className="w-[80%] px-4 py-2 border border-border_gray rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
        <div className="flex-1 ">
          <label
            htmlFor="phone"
            className="block mb-2 text-black font-medium text-sm"
          >
            Profession:
          </label>
          <input
            id="phone"
            required
            type="text"
            placeholder="Profession"
            className={`w-[80%] px-4 py-2 border border-border_gray rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 ${styles.smallPlaceholder}`}
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 md:gap-0 md:flex-row space-x-0 md:space-x-4">
        <div className="flex-1">
          <label
            htmlFor="subject"
            className="block mb-2 text-black font-medium text-sm"
          >
            Location:
          </label>
          <input
            id="subject"
            required
            type="text"
            placeholder="Location"
            className={`max-md:w-[80%]  w-[39.5%] px-4 py-2 border border-border_gray rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 ${styles.smallPlaceholder}`}
          />
        </div>
      </div>
      <div className="">
        <label
          htmlFor="message"
          className="block mb-2 text-black font-medium text-sm"
        >
          Social Media
        </label>
        <input
          id="subject"
          required
          type="text"
          placeholder="facebook"
          className={`w-[39.5%] px-4 py-2 mr-2 pr-1 mb-3 border border-border_gray rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 ${styles.smallPlaceholder}`}
        />
        <input
          id="subject"
          required
          type="text"
          placeholder="Linked In"
          className={`w-[39.5%] px-4 py-2 md:ml-[10%] lg:ml-[10%] border border-border_gray rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 ${styles.smallPlaceholder}`}
        />
        <input
          id="subject"
          required
          type="text"
          placeholder="Twitter"
          className={`w-[39.5%] px-4 py-2 border border-border_gray rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 ${styles.smallPlaceholder}`}
        />
      </div>
      <div className="flex justify-end max-md:justify-between max-md:w-[100%] w-[90%]">
        <button
          type="submit"
          className="max-md:text-wrap min-w-fit max-md:p-1 max-md:w-full w-[13%] h-[3.9em] m-[1%] bg-blue text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 text-xs"
        >
          Save changes
        </button>
        <button
          type="submit"
          className={`w-[13%] h-[3.9em] min-w-fit px-2 max-md:w-full max-md:p-1 max-md:mr-2 [3.9em] m-[1%] text-blue bg-slate-200 rounded-lg hover:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-300 text-xs`}
        >
          cancel
        </button>
      </div>
    </form>
  </div>
);

export default Form;
