import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitContactForm } from "../../redux/thunks/contactthunk";

const ContactForm = () => {
  const dispatch = useDispatch();
  const { isLoading, successMessage, error } = useSelector(
    (state) => state.contact || {}
  );

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    source: "",
    text: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitContactForm(formData));
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      source: "",
      text: "",
    });
  };

  console.log("isLoading:", isLoading);
  console.log("successMessage:", successMessage);
  console.log("error:", error);

  return (
    <div className="flex items-center justify-center w-[90%] mx-auto">
      <form
        className="p-6 w-full xlg:max-w-screen-xlg space-y-6"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-4 md:gap-0 md:flex-row space-x-0 md:space-x-4">
          <div className="flex-1">
            <label
              htmlFor="firstName"
              className="block mb-2 text-black font-medium"
            >
              First Name<span className="text-red-500 text-lg">*</span>
            </label>
            <input
              id="firstName"
              name="firstName"
              required
              type="text"
              className="w-full px-4 py-2 border border-border_gray rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="flex-1">
            <label
              htmlFor="lastName"
              className="block mb-2 text-black font-medium"
            >
              Last Name<span className="text-red-500 text-lg">*</span>
            </label>
            <input
              id="lastName"
              name="lastName"
              required
              type="text"
              className="w-full px-4 py-2 border border-border_gray rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 md:gap-0 md:flex-row space-x-0 md:space-x-4">
          <div className="flex-1">
            <label
              htmlFor="email"
              className="block mb-2 text-black font-medium"
            >
              Email<span className="text-red-500 text-lg">*</span>
            </label>
            <input
              id="email"
              name="email"
              required
              type="email"
              className="w-full px-4 py-2 border border-border_gray rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="flex-1">
            <label
              htmlFor="phone"
              className="block mb-2 text-black font-medium"
            >
              Phone<span className="text-red-500 text-lg">*</span>
            </label>
            <input
              id="phone"
              name="phone"
              required
              type="text"
              className="w-full px-4 py-2 border border-border_gray rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 md:gap-0 md:flex-row space-x-0 md:space-x-4">
          <div className="flex-1">
            <label
              htmlFor="subject"
              className="block mb-2 text-black font-medium"
            >
              Subject<span className="text-red-500 text-lg">*</span>
            </label>
            <input
              id="subject"
              name="subject"
              required
              type="text"
              className="w-full px-4 py-2 border border-border_gray rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>
          <div className="flex-1">
            <label
              htmlFor="source"
              className="block mb-2 text-black font-medium"
            >
              How did you hear about us?
              <span className="text-red-500 text-lg">*</span>
            </label>
            <select
              id="source"
              name="source"
              required
              className="w-full px-4 py-2 border border-border_gray rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={formData.source}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="glassdoor">Glassdoor</option>
              <option value="linkedin">LinkedIn</option>
              <option value="facebook">Facebook</option>
              <option value="instagram">Instagram</option>
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="text" className="block mb-2 text-black font-medium">
            Message
          </label>
          <textarea
            id="text"
            name="text"
            className="w-full px-4 py-2 border border-border_gray rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            rows="4"
            value={formData.text}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-2 bg-blue text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Send"}
          </button>
        </div>
        {error && <div className="text-red-500 mt-2">Error: {error}</div>}
        {successMessage && (
          <div className="text-green-500 mt-2 flex justify-end">
            Message sent: {successMessage}
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
