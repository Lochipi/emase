"use client";

import { useState } from "react";

const Contact = () => {
  const [userData, setUserData] = useState({
    userName: "",
    userEmail: "",
    userMessage: "",
  });

  function handleSubmit(event: any) {
    event.preventDefault();
    console.log(userData);
  }

  function handleChange(event: any) {
    setUserData((prevState) => {
      const { name, value } = event.target;
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  return (
    <div className="w-full md:max-h-[90vh] p-4" id="contact">
      <div className=" max-w-[600px] mx-auto">
        <div className="flex justify-center">
          <h2 className="text-3xl inline-block text-orange-700 border-b-4 border-cyan-600 font-bold ">
            Contact Me!
          </h2>
        </div>

        <div className="max-w-[600px] mt-4">
          <p className="font-bold text-orange-300">Lemme hear from you!</p>
          <form className="flex flex-col gap-2 mt-4">
            <input
              type="text"
              name="userName"
              placeholder="Name"
              onChange={handleChange}
              value={userData.userName}
              className="outline-none py-2 px-4 text-black "
              required
            />
            <input
              type="text"
              name="userEmail"
              placeholder="Email"
              value={userData.userEmail}
              onChange={handleChange}
              className="outline-none py-2 px-4 text-black"
              required
            />

            <textarea
              name="userMessage"
              placeholder="Message"
              value={userData.userMessage}
              onChange={handleChange}
              className="outline-none py-2 px-4 text-black"
              rows={10}
            ></textarea>
            <input
              onClick={handleSubmit}
              type="submit"
              value="Send Message"
              className="mx-auto cursor-pointer font-bold px-4 py-2 border-orange-100 inline-block border hover:bg-orange-600 transition duration-20"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
