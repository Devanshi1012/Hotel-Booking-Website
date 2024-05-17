import React from "react";
import booking from "../Image/booking.png";
import money from "../Image/money.png";
import team from "../Image/team.png";
import location from "../Image/location.png";
import travel from "../Image/travel.png";
import destination from "../Image/destination.png";

function Choose() {
  return (
    <>
      <div className="flex justify-between my-20 mx-48">
        <div
          className=" hover:shadow-lg rounded-md h-auto"
          style={{ width: "18rem" }}
        >
          <div className="flex flex-col items-center">
            <img src={money} className="m-4" />
            <h5 className="items-center m-4 text-xl font-bold">
              Worth of Money
            </h5>
            <p className="items-center m-4 text-gray-400">
              There is not a better way to spend money, than spending money on
              travel. This is what we say, others and science.
            </p>
          </div>
        </div>
        <div
          className=" hover:shadow-lg rounded-md h-auto"
          style={{ width: "18rem" }}
        >
          <div className="flex flex-col items-center">
            <img src={booking} className="m-4" />
            <h5 className="items-center m-4 text-xl font-bold">
              Quick Booking
            </h5>
            <p className="items-center m-4 text-gray-400">
              Booking is quick as clicking a few clicks. We take care of all
              transportation and accommodations during your journey.
            </p>
          </div>
        </div>
        <div
          className=" hover:shadow-lg rounded-md h-auto"
          style={{ width: "18rem" }}
        >
          <div className="flex flex-col items-center">
            <img src={location} className="m-4" />
            <h5 className="items-center m-4 text-xl font-bold">
              Wonderful Places
            </h5>
            <p className="items-center m-4 text-gray-400">
              We do our best to have you a wonderful experience by taking you to
              the wonderful and amazing places around the world.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-between  my-20 mx-48">
        <div
          className="hover:shadow-lg rounded-md h-auto"
          style={{ width: "18rem" }}
        >
          <div className="flex flex-col items-center">
            <img src={team} className="m-4" />
            <h5 className="items-center m-4 text-xl font-bold">Backup Team</h5>
            <p className="items-center m-4 text-gray-400">
              We have staff to assist in all stages of your holiday, from travel
              advice & best prices to ground handling & support during your
              holiday.
            </p>
          </div>
        </div>
        <div
          className="hover:shadow-lg rounded-md h-auto"
          style={{ width: "18rem" }}
        >
          <div className="flex flex-col items-center">
            <img src={destination} className="m-4" />
            <h5 className="items-center m-4 text-xl font-bold">
              Unique Destinations
            </h5>
            <p className="items-center m-4 text-gray-400">
              Looking for a unique vacation destination? Then maybe a trip to
              one of the 10 most unique tourist destinations might.
            </p>
          </div>
        </div>
        <div
          className="hover:shadow-lg rounded-md h-auto"
          style={{ width: "18rem" }}
        >
          <div className="flex flex-col items-center">
            <img src={travel} className="m-4" />
            <h5 className="items-center m-4 text-xl font-bold">
              Exciting Travel
            </h5>
            <p className="items-center m-4 text-gray-400">
              We have a wide range of expertise and knowledge in our services.
              So we can provide you an exciting travel experience.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Choose;
