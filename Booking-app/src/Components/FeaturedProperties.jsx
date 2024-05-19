import useFetch from "../hooks/useFetch";

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch("/api/hotel?featured=true&limit=5");
  return (
    <div className=" m-20 flex gap-20">
      {loading ? (
        "Loading"
      ) : (
        <>
          {data.map((item) => (
            <div className="flex flex-col" key={item._id}>
              <img src={item.photos[0]} alt="" className="w-64 h-44" />
              <span className=" text-black font-bold">{item.name}</span>
              <span className="capitalize font-light">{item.city}</span>
              <span className=" font-medium">
                Starting from Rs {item.cheapestPrice}
              </span>
              {item.rating && (
                <div className="flex items-center">
                  <button className="bg-blue-700 text-white border-none px-3 font-bold mr-2 rounded-md">
                    {item.rating}
                  </button>
                  <span className="text-sm font-semibold">Excellent</span>
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;
