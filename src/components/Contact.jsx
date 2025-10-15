import React from "react";
import { toast } from "react-toastify";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "aa80ba63-da46-4c30-9fc5-373fd5b68421");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error("There was an error submitting the form");
      setResult("");
    }
  };

  return (
    <div
      className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden"
      id="Contact"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Contact{" "}
        <span className="underline underline-offset-4 decoration-1 font-light">
          With Us
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">
        Ready to Make Your Move? Get in Touch Today!
      </p>

      <form
        className="max-w-2xl mx-auto text-gray-600 pt-8 border border-gray-300 bg-gray-50 rounded-2xl shadow-md p-8"
        onSubmit={onSubmit}
      >
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 text-left">
            <label className="block mb-1 font-medium">Your Name</label>
            <input
              className="w-full border border-gray-300 rounded py-3 px-4 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              name="Name"
              placeholder="Your Name"
              required
            />
          </div>

          <div className="w-full md:w-1/2 text-left md:pl-4 mt-4 md:mt-0">
            <label className="block mb-1 font-medium">Your Email</label>
            <input
              className="w-full border border-gray-300 rounded py-3 px-4 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="email"
              name="Email"
              placeholder="Your Email"
              required
            />
          </div>
        </div>

        <div className="flex flex-wrap mt-2">
          <div className="w-full md:w-1/2 text-left">
            <label className="block mb-1 font-medium">Your Phone Number</label>
            <input
              className="w-full border border-gray-300 rounded py-3 px-4 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              name="Phone Number"
              placeholder="Your Phone Number"
              required
            />
          </div>

          <div className="w-full md:w-1/2 text-left md:pl-4 mt-4 md:mt-0">
            <label className="block mb-1 font-medium">Purpose</label>
            <input
              className="w-full border border-gray-300 rounded py-3 px-4 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              name="Purpose"
              placeholder="Your Purpose"
              required
            />
          </div>
        </div>

        <div className="my-6 text-left">
          <label className="block mb-1 font-medium">Message</label>
          <textarea
            className="w-full border border-gray-300 rounded py-3 px-4 mt-1 h-48 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
            name="Message"
            placeholder="Message"
            required
          ></textarea>
        </div>

        <button
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-12 mb-4 rounded-lg transition-all duration-300"
          type="submit"
        >
          {result ? result : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default Contact;
