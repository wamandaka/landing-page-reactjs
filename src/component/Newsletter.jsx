import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[1080px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-3xl sm:text-2xl text-xl font-bold py-2">
            Want tips & tricks to optimize your flow?
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="flex p-3 w-full rounded-md text-black"
              type="email"
              placeholder="Enter Email"
            />
            <button className="bg-emerald-300 text-black w-[200px] rounded-md font-medium md:ml-4 my-6 py-2 md:py-3 hover:bg-emerald-200 ml-0">
              Notify Me
            </button>
          </div>
          <p>
            We care about the protection of your data. Read our{" "}
            <a href="#" className="text-emerald-500">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
