function ContactForm() {
  return (
    <div className="flex items-center justify-center w-[90%] mx-auto">
      <form className=" p-6 w-full xlg:max-w-screen-xlg space-y-6">
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
              required
              type="text"
              className="w-full px-4 py-2 border border-border_gray rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div className="flex-1 ">
            <label
              htmlFor="lastName"
              className="block mb-2 text-black font-medium"
            >
              Last Name<span className="text-red-500 text-lg">*</span>
            </label>
            <input
              id="lastName"
              required
              type="text"
              className="w-full px-4 py-2 border border-border_gray rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
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
              required
              type="email"
              className="w-full px-4 py-2 border border-border_gray rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div className="flex-1 ">
            <label
              htmlFor="phone"
              className="block mb-2 text-black font-medium"
            >
              Phone<span className="text-red-500 text-lg">*</span>
            </label>
            <input
              id="phone"
              required
              type="text"
              className="w-full px-4 py-2 border border-border_gray rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
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
              required
              type="text"
              className="w-full px-4 py-2 border border-border_gray rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div className="flex-1">
            <label
              htmlFor="refrence"
              className="block mb-2 text-black font-medium"
            >
              How did you hear about us?
              <span className="text-red-500 text-lg">*</span>
            </label>
            <select
              id="refrence"
              className="w-full px-4 py-2 border border-border_gray rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <option value="">Select</option>
              <option value="google">Google</option>
              <option value="friend">Friend</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        <div>
          <label
            htmlFor="message"
            className="block mb-2 text-black font-medium"
          >
            Message
          </label>
          <textarea
            id="message"
            className="w-full px-4 py-2 border border-border_gray rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            rows="4"
          ></textarea>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-2 bg-blue text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
