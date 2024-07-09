import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/form.module.css";
import { editProfile } from "../../redux/thunks/profilethunk";

const EditProfileForm = () => {
  // const { user } = useSelector((state) => state.auth);
  const {id , first_name , last_name} = useSelector((state => state.profile));
  const dispatch = useDispatch();

  const initialState = {
    id: id ? id : null,
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    profession: "",
    location: "",
    facebook_profile: "",
    twitter_profile: "",
    linkedin_profile: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [changedFields, setChangedFields] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
    setChangedFields((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  function handleSubmit(e) {
    e.preventDefault();
    // Destructure the form data and initial state for readability
    const { id, ...formValues } = formData;
    // If all form fields are empty
    const areAllFieldsEmpty = (fields) => {
      return Object.values(fields).every((value) => value === "");
    };
    // If there are no changes
    const hasNoActualChanges = (changes, initial) => {
      return Object.keys(changes).every((key) => changes[key] === initial[key]);
    };
    // If all fields are empty or no actual changes
    const allFieldsEmpty = areAllFieldsEmpty(formValues);
    const noActualChanges = hasNoActualChanges(changedFields, initialState);

    if (
      Object.keys(changedFields).length === 0 ||
      allFieldsEmpty ||
      noActualChanges
    ) {
      // Exit early if no fields changed, all fields are empty, or no actual changes
      return;
    }

    // Prepare data for submission
    const dataToSubmit = { ...changedFields, id };

    // Log the data to the console (replace this with actual submission logic)
    dispatch(editProfile(dataToSubmit));
    console.log(dataToSubmit);
  }
  useEffect(()=>{
    console.log("this is user : ",first_name);
  }, [])

  function handleReset() {
    setFormData(initialState);
    setChangedFields({});
  }

  return (
    <div className="mx-auto flex w-[90%] items-center justify-center">
      <form
        className="w-full space-y-6 p-6 xlg:max-w-screen-xlg"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-4 space-x-0 md:flex-row md:gap-0 md:space-x-4">
          <div className="flex-1">
            <label
              htmlFor="first_name"
              className="mb-2 block text-sm font-medium text-black"
            >
              First Name:
            </label>
            <input
              value={formData.first_name}
              id="first_name"
              type="text"
              placeholder="First Name"
              onChange={handleChange}
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
              value={formData.last_name}
              id="last_name"
              type="text"
              placeholder="Last Name"
              onChange={handleChange}
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
              value={formData.email}
              id="email"
              placeholder="Email"
              type="email"
              onChange={handleChange}
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
              value={formData.profession}
              id="profession"
              type="text"
              placeholder="Profession"
              onChange={handleChange}
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
              value={formData.location}
              id="location"
              type="text"
              placeholder="Location"
              onChange={handleChange}
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
            value={formData.facebook_profile}
            id="facebook_profile"
            type="text"
            placeholder="facebook"
            onChange={handleChange}
            className={`mb-3 mr-2 w-[39.5%] rounded-lg border border-border_gray px-4 py-2 pr-1 focus:outline-none focus:ring-2 focus:ring-blue-600 ${styles.smallPlaceholder}`}
          />
          <input
            value={formData.linkedin_profile}
            id="linkedin_profile"
            type="text"
            placeholder="Linked In"
            onChange={handleChange}
            className={`w-[39.5%] rounded-lg border border-border_gray px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 md:ml-[10%] lg:ml-[10%] ${styles.smallPlaceholder}`}
          />
          <input
            value={formData.twitter_profile}
            id="twitter_profile"
            type="text"
            placeholder="Twitter"
            onChange={handleChange}
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
            type="button"
            onClick={handleReset}
            className={`m-[1%] rounded-lg bg-slate-200 text-xs text-blue hover:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-300 lg:h-[3.9em] lg:w-[13%]`}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfileForm;
