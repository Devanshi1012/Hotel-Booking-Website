import React from "react";
import Detail from "./Detail";
import Choose from "./Choose";
import SelectDestination from "./SelectDestination";
import Featured from "./Featured";
import Properties from "./Properties";
import FeaturedProperties from "./FeaturedProperties";

function Home() {
  return (
    <div>
      <Detail />
      <h1 className="flex items-center justify-center text-2xl m-20 mb-0">
        WHY CHOOSE VOYAGER?
      </h1>
      <h1 className="flex items-center justify-center text-gray-400 mx-20">
        We offer most competitive rates and offers for wonderful and beautiful
        places
      </h1>
      <Choose />
      <SelectDestination />
      <Featured />
      <h1 className="flex items-center justify-center text-2xl mx-16  mb-0">
        PROPERTIES BY TYPE
      </h1>
      <Properties />
      <h1 className="flex items-center justify-center text-2xl m-16  mb-0">
        MOST VISITED
      </h1>
      <FeaturedProperties />
    </div>
  );
}

export default Home;
