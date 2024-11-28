"use client";
import { RingLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-48 bg-white p-4 rounded-md">
      <RingLoader color="#3498db" size={40} />
    </div>
  );
};

export default Loader;
