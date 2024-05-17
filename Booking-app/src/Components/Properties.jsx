import React from "react";
import useFetch from "../hooks/useFetch";

function Properties() {
  const { data, loading, error } = useFetch("api/hotel/countByType");
  const images = [
    "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWx8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1586611292717-f828b167408c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmVzb3J0fGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHZpbGxhfGVufDB8fDB8fHww",
  ];
  return (
    <div className="flex mx-20">
      {loading ? (
        "loading please wait"
      ) : (
        <>
          {data &&
            images.map((img, i) => (
              <div className="flex my-20">
                <div className="mx-4 ">
                  <div className=" text-center ">
                    <img
                      src={img}
                      className="size-80 rounded-2xl hover:opacity-50 "
                    />
                    <h5 className="capitalize">{data[i]?.type}</h5>
                    <h6>
                      {data[i]?.count} {data[i]?.type}{" "}
                    </h6>
                  </div>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
}

export default Properties;
