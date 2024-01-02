import React from "react";
import Single from "../assets/single.svg";
import Double from "../assets/double.svg";
import Triple from "../assets/triple.svg";

const Pricing = () => {
  return (
    <div className="bg-white w-full py-[10rem] px-4">
      <div className="max-w-[1080px] mx-auto grid md:grid-cols-3 gap-8">
        {/* Single */}
        <div className="w-full shadow-xl hover:shadow-2xl hover:shadow-emerald-400 flex flex-col py-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            src={Single}
            alt=""
            className="w-20 mx-auto mt-[-3rem] bg-white"
          />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 2 GB</p>
          </div>
          <button className="bg-gray-500 text-white w-[200px] rounded-md font-medium my-6 mx-auto py-2 hover:bg-gray-400">
            Start Trial
          </button>
        </div>
        {/* Double */}
        <div className="w-full shadow-xl hover:shadow-2xl hover:shadow-emerald-400 flex flex-col py-4 my-4 rounded-lg hover:scale-105 duration-300 md:my-0 bg-slate-300">
          <img
            src={Double}
            alt=""
            className="w-20 mx-auto mt-[-3rem] bg-white"
          />
          <h2 className="text-2xl font-bold text-center py-8">Double User</h2>
          <p className="text-center text-5xl font-bold text-emerald-500">
            $339
          </p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">1 TB Storage</p>
            <p className="py-2 border-b mx-8">5 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 10 GB</p>
          </div>
          <button className="bg-emerald-500 text-white w-[200px] rounded-md font-medium my-6 mx-auto py-2 hover:bg-emerald-400">
            Start Trial
          </button>
        </div>
        {/* Triple */}
        <div className="w-full shadow-xl hover:shadow-2xl hover:shadow-emerald-400 flex flex-col py-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            src={Triple}
            alt=""
            className="w-20 mx-auto mt-[-3rem] bg-white"
          />
          <h2 className="text-2xl font-bold text-center py-8">Triple User</h2>
          <p className="text-center text-4xl font-bold">$999</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">2 TB Storage</p>
            <p className="py-2 border-b mx-8">15 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 20 GB</p>
          </div>
          <button className="bg-gray-500 text-white w-[200px] rounded-md font-medium my-6 mx-auto py-2 hover:bg-gray-400">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
