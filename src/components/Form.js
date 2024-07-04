import React from "react";
import styles from "../styles/form.module.css";
const Form = () => (
  <div className="mx-auto flex w-[90%] items-center justify-center">
    <form className="w-full space-y-6 p-6 xlg:max-w-screen-xlg">
      <div className="flex flex-col gap-4 space-x-0 md:flex-row md:gap-0 md:space-x-4">
        <div className="flex-1">
          <label
            htmlFor="first_name"
            className="mb-2 block text-sm font-medium text-black"
          >
            First Name:
          </label>
          <input
            defaultValue=""
            id="first_name"
            type="text"
            placeholder="First Name"
            className={`w-[80%] rounded-lg border border-border_gray px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 ${styles.smallPlaceholder}`}
          />
        </div>
        <div className="flex-1">
          <label
            htmlFor="last_name"
            className="mb-2 block text-sm font-medium text-black"
          >
            Last Name:
          </label>
          <input
            defaultValue=""
            id="last_name"
            type="text"
            placeholder="Last Name"
            className={`w-[80%] rounded-lg border border-border_gray px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 ${styles.smallPlaceholder}`}
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 space-x-0 md:flex-row md:gap-0 md:space-x-4">
        <div className="flex-1">
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-black"
          >
            Email:
          </label>
          <input
            id="email"
            defaultValue=""
            placeholder="Email"
            type="email"
            className={`w-[80%] rounded-lg border border-border_gray px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 ${styles.smallPlaceholder}`}
          />
        </div>
        <div className="flex-1">
          <label
            htmlFor="profession"
            className="mb-2 block text-sm font-medium text-black"
          >
            Profession:
          </label>
          <input
            id="profession"
            defaultValue=""
            type="text"
            placeholder="Profession"
            className={`w-[80%] rounded-lg border border-border_gray px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 ${styles.smallPlaceholder}`}
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 space-x-0 md:flex-row md:gap-0 md:space-x-4">
        <div className="flex-1">
          <label
            htmlFor="location"
            className="mb-2 block text-sm font-medium text-black"
          >
            Location:
          </label>
          <input
            id="location"
            type="text"
            defaultValue=""
            placeholder="Location"
            className={`rounded-lg border border-border_gray px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 md:w-[80%] lg:w-[39.5%] max-xsm:w-[80%] max-sm:w-[80%] max-md:w-[80%] ${styles.smallPlaceholder}`}
          />
        </div>
      </div>
      <div className="">
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-black"
        >
          Social Media
        </label>
        <input
          id="facebook_profile"
          type="text"
          defaultValue=""
          placeholder="facebook"
          className={`mb-3 mr-2 w-[39.5%] rounded-lg border border-border_gray px-4 py-2 pr-1 focus:outline-none focus:ring-2 focus:ring-blue-600 ${styles.smallPlaceholder}`}
        />
        <input
          id="linkedin_profile"
          type="text"
          defaultValue=""
          placeholder="Linked In"
          className={`w-[39.5%] rounded-lg border border-border_gray px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 md:ml-[10%] lg:ml-[10%] ${styles.smallPlaceholder}`}
        />
        <input
          id="twitter_profile"
          type="text"
          defaultValue=""
          placeholder="Twitter"
          className={`w-[39.5%] rounded-lg border border-border_gray px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 ${styles.smallPlaceholder}`}
        />
      </div>
      <div className="flex justify-end lg:w-[90%] max-md:w-[55%]">
        <button
          type="submit"
          className="m-[1%] rounded-lg bg-blue text-xs text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 lg:h-[3.9em] lg:w-[13%]"
        >
          Save changes
        </button>
        <button
          type="submit"
          className={`m-[1%] rounded-lg bg-slate-200 text-xs text-blue hover:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-300 lg:h-[3.9em] lg:w-[13%]`}
        >
          cancel
        </button>
      </div>
    </form>
  </div>
);

export default Form;
