import React from "react";
import beach from "../Image/beaches.jpg";
import airride from "../Image/airride.jpg";
import cruise from "../Image/cruise.jpg";
import mountain from "../Image/mountain.jpg";
import skiing from "../Image/skiing.jpg";
import adventure from "../Image/adventure.jpg";

function SelectDestination() {
  return (
    <>
      <div className="w-full bg-blue-200 h-min-screen pt-10 pb-2 ">
        <h1 className="flex items-center justify-center text-2xl m-20 mb-0">
          SELECT YOUR DESTINATION BY MOOD
        </h1>
        <h1 className="flex items-center justify-center text-gray-500 mx-20">
          In the mood to travel? You have to be more specific! and, match your
          mood to your destination!
        </h1>
        <div className="flex my-20 mx-20">
          <div className="mx-4 ">
            <div className=" text-center ">
              <img src={beach} className="size-48 hover:opacity-50 " />
              <h5 className="bg-gray-300 relative text-black -mt-8">BEACHES</h5>
            </div>
          </div>
          <div className="mx-4">
            <div className=" text-center">
              <img src={adventure} className="size-48 hover:opacity-50" />
              <h5 className="bg-gray-300 relative text-black -mt-8">
                ADVENTURE
              </h5>
            </div>
          </div>
          <div className="mx-4">
            <div className=" text-center">
              <img src={cruise} className="size-48 hover:opacity-50" />
              <h5 className="bg-gray-300 relative text-black -mt-8">CRUISE</h5>
            </div>
          </div>
          <div className="mx-4">
            <div className=" text-center">
              <img src={skiing} className="size-48 hover:opacity-50" />
              <h5 className="bg-gray-300 relative text-black -mt-8">SKIING</h5>
            </div>
          </div>
          <div className="mx-4">
            <div className=" text-center">
              <img src={airride} className="size-48 hover:opacity-50" />
              <h5 className="bg-gray-300 relative text-black -mt-8">
                AIR-RIDE
              </h5>
            </div>
          </div>
          <div className="mx-4">
            <div className=" text-center">
              <img src={mountain} className="size-48 hover:opacity-50" />
              <h5 className="bg-gray-300 relative text-black -mt-8">
                MOUNTAIN
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SelectDestination;
