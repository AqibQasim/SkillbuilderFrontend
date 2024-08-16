import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editProfile } from "../../redux/thunks/profilethunk";
import styles from "../styles/form.module.css";

const EditProfileForm = ({ setCloseForm }) => {
  const { user, isLoading } = useSelector((state) => state.auth);
  const profile = useSelector((state) => state.profile);
  console.log("starting line of user id", profile?.id);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(initialState());
  const [changedFields, setChangedFields] = useState({});

  // Wanted to declare this constant after initialization
  // Initialize default values based on profile data
  function initialState() {
    return {
      id: user?.id || profile?.id ? user?.id || profile?.id : null,
      first_name: profile?.first_name || "",
      last_name: profile?.last_name || "",
      email: profile?.email || "",
      profession: profile?.profession || "",
      location: profile?.location || "",
      facebook_profile: profile?.facebook_profile || "",
      twitter_profile: profile?.twitter_profile || "",
      linkedin_profile: profile?.linkedin_profile || "",
    };
  }

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
    console.log("line submit handle", profile?.id);
    e.preventDefault();
    const { id, ...formValues } = formData;

    const areAllFieldsEmpty = (fields) => {
      return Object.values(fields).every((value) => value === "");
    };
    const hasNoActualChanges = (changes, initial) => {
      return Object.keys(changes).every((key) => changes[key] === initial[key]);
    };
    const allFieldsEmpty = areAllFieldsEmpty(formValues);
    const noActualChanges = hasNoActualChanges(changedFields, initialState);

    if (
      Object.keys(changedFields).length === 0 ||
      allFieldsEmpty ||
      noActualChanges
    ) {
      return;
    }

    const dataToSubmit = { ...changedFields, id };

    dispatch(editProfile(dataToSubmit));
  }

  function handleReset() {
    setFormData(initialState);
    setChangedFields({});
    setCloseForm(false);
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
              className="text-black mb-2 block text-sm font-medium"
            >
              First Name:
            </label>
            <input
              disabled={profile?.status === "loading"}
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
              className="text-black mb-2 block text-sm font-medium"
            >
              Last Name:
            </label>
            <input
              disabled={profile?.status === "loading"}
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
              className="text-black mb-2 block text-sm font-medium"
            >
              Email:
            </label>
            <input
              value={formData.email}
              id="email"
              placeholder="Email"
              type="email"
              disabled
              onChange={handleChange}
              className={`w-[80%] rounded-lg border border-border_gray px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 ${styles.smallPlaceholder}`}
            />
          </div>
          <div className="flex-1">
            <label
              htmlFor="profession"
              className="text-black mb-2 block text-sm font-medium"
            >
              Profession:
            </label>
            <input
              disabled={profile?.status === "loading"}
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
              className="text-black mb-2 block text-sm font-medium"
            >
              Location:
            </label>
            <input
              disabled={profile?.status === "loading"}
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
            className="text-black mb-2 block text-sm font-medium"
          >
            Social Media
          </label>
          <input
            disabled={profile?.status === "loading"}
            value={formData.facebook_profile}
            id="facebook_profile"
            type="text"
            placeholder="facebook"
            onChange={handleChange}
            className={`mb-3 mr-2 w-[39.5%] rounded-lg border border-border_gray px-4 py-2 pr-1 focus:outline-none focus:ring-2 focus:ring-blue-600 ${styles.smallPlaceholder}`}
          />
          <input
            disabled={profile?.status === "loading"}
            value={formData.linkedin_profile}
            id="linkedin_profile"
            type="text"
            placeholder="Linked In"
            onChange={handleChange}
            className={`w-[39.5%] rounded-lg border border-border_gray px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 md:ml-[10%] lg:ml-[10%] ${styles.smallPlaceholder}`}
          />
          <input
            disabled={profile?.status === "loading"}
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
            {profile?.status === "idle" ? "Save changes" : "Saving changes..."}
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
