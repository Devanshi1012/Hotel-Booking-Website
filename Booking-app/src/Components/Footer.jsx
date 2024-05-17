import React from "react";
import { GrInstagram } from "react-icons/gr";
import { MdOutlineFacebook } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <div className="mt-5">
      <footer className="bg-blue-300 px-8 py-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">
                Contact Us
              </h3>
              <ul className="text-white ">
                <li>Email: voyager@gmail.com</li>
                <li>Phone: +1234567890</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">
                Travel Destination
              </h3>
              <ul className="text-white ">
                <li>India</li>
                <li>United arab emirates</li>
                <li>United kingdom</li>
                <li>Australia</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">
                Information
              </h3>
              <ul className="text-white ">
                <li>Help & FAQ's</li>
                <li>Press Center</li>
                <li>About</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-4 ">
                Follow Us
              </h3>
              <ul className="text-white flex justify-between">
                <li>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    className="hover:underline text-neutral-50"
                  >
                    <MdOutlineFacebook className="size-6" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/?lang=ens"
                    target="_blank"
                    className="hover:underline text-neutral-50"
                  >
                    <FaTwitter className="size-6" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    className="hover:underline text-neutral-50"
                  >
                    <GrInstagram className="size-6" />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://github.com/"
                    className="hover:underline text-neutral-50"
                  >
                    <FaGithub className="size-6" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-8">
          <div className="flex justify-between items-center">
            <hr />
            <p className="text-white">
              @copyright-2024 Voyager - All rights reserved.
            </p>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-white hover:underline">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:underline">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
