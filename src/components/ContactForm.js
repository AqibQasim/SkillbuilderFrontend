import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitContactForm } from "../../redux/thunks/contactthunk";
import LayoutWidth from "./LayoutWidth";

const ContactForm = () => {
  const dispatch = useDispatch();
  const { isLoading, successMessage, error } = useSelector(
    (state) => state.contact || {},
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
    <LayoutWidth>
      <div className="flex items-center justify-center">
        <form className="w-full space-y-6" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4 space-x-0 md:flex-row md:gap-0 md:space-x-4">
            <div className="flex-1">
              <label
                htmlFor="firstName"
                className="mb-2 block font-medium text-black"
              >
                First Name<span className="text-lg text-red-500">*</span>
              </label>
              <input
                id="firstName"
                name="firstName"
                required
                type="text"
                className="w-full rounded-lg border border-border_gray px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="lastName"
                className="mb-2 block font-medium text-black"
              >
                Last Name<span className="text-lg text-red-500">*</span>
              </label>
              <input
                id="lastName"
                name="lastName"
                required
                type="text"
                className="w-full rounded-lg border border-border_gray px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 space-x-0 md:flex-row md:gap-0 md:space-x-4">
            <div className="flex-1">
              <label
                htmlFor="email"
                className="mb-2 block font-medium text-black"
              >
                Email<span className="text-lg text-red-500">*</span>
              </label>
              <input
                id="email"
                name="email"
                required
                type="email"
                className="w-full rounded-lg border border-border_gray px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="phone"
                className="mb-2 block font-medium text-black"
              >
                Phone<span className="text-lg text-red-500">*</span>
              </label>
              <input
                id="phone"
                name="phone"
                required
                type="text"
                className="w-full rounded-lg border border-border_gray px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 space-x-0 md:flex-row md:gap-0 md:space-x-4">
            <div className="flex-1">
              <label
                htmlFor="subject"
                className="mb-2 block font-medium text-black"
              >
                Subject<span className="text-lg text-red-500">*</span>
              </label>
              <input
                id="subject"
                name="subject"
                required
                type="text"
                className="w-full rounded-lg border border-border_gray px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="source"
                className="mb-2 block font-medium text-black"
              >
                How did you hear about us?
                <span className="text-lg text-red-500">*</span>
              </label>
              <select
                id="source"
                name="source"
                required
                className="w-full rounded-lg border border-border_gray px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
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
            <label htmlFor="text" className="mb-2 block font-medium text-black">
              Message
            </label>
            <textarea
              id="text"
              name="text"
              className="w-full rounded-lg border border-border_gray px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              rows="4"
              value={formData.text}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="rounded-lg bg-blue px-6 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send"}
            </button>
          </div>
          {error && <div className="mt-2 text-red-500">Error: {error}</div>}
          {successMessage && (
            <div className="mt-2 flex justify-end text-green-500">
              Message sent: {successMessage}
            </div>
          )}
        </form>
      </div>
    </LayoutWidth>
  );
};

export default ContactForm;
