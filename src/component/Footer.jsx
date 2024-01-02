import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1080px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-emerald-500">
          <a href="#home">REACT.</a>
        </h1>
        <p className="py-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
          qui a itaque iure libero temporibus dolore numquam porro dolores
          molestias!
        </p>
        <div className="flex my-6 justify-between">
          <FaDribbbleSquare size={30} />
          <FaFacebookSquare size={30} />
          <FaInstagramSquare size={30} />
          <FaGithubSquare size={30} />
          <FaTwitterSquare size={30} />
          <FaYoutubeSquare size={30} />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between">
        {/* Solution */}
        <div>
          <h6 className="font-medium text-gray-400">Solution</h6>
          <ul>
            <li className="py-2 text-sm">
              <a href="#">Analytics</a>
            </li>
            <li className="py-2 text-sm">
              <a href="#">Marketing</a>
            </li>
            <li className="py-2 text-sm">
              <a href="#">Commerce</a>
            </li>
            <li className="py-2 text-sm">
              <a href="#">Insight</a>
            </li>
          </ul>
        </div>
        {/* Support */}
        <div>
          <h6 className="font-medium text-gray-400">Support</h6>
          <ul>
            <li className="py-2 text-sm">
              <a href="#">Pricing</a>
            </li>
            <li className="py-2 text-sm">
              <a href="#">Documentation</a>
            </li>
            <li className="py-2 text-sm">
              <a href="#">Guides</a>
            </li>
            <li className="py-2 text-sm">
              <a href="#">API Status</a>
            </li>
          </ul>
        </div>
        {/* Company */}
        <div>
          <h6 className="font-medium text-gray-400">Company</h6>
          <ul>
            <li className="py-2 text-sm">
              <a href="#">About</a>
            </li>
            <li className="py-2 text-sm">
              <a href="#">Blog</a>
            </li>
            <li className="py-2 text-sm">
              <a href="#">Jobs</a>
            </li>
            <li className="py-2 text-sm">
              <a href="#">Careers</a>
            </li>
          </ul>
        </div>
        {/* Legal */}
        <div>
          <h6 className="font-medium text-gray-400">Legal</h6>
          <ul>
            <li className="py-2 text-sm">
              <a href="#">Claim</a>
            </li>
            <li className="py-2 text-sm">
              <a href="#">Policy</a>
            </li>
            <li className="py-2 text-sm">
              <a href="#">Term</a>
            </li>
          </ul>
        </div>
      </div>
      <p className=""> &#169; Waman Daka Wardani</p>
    </div>
  );
};

export default Footer;
