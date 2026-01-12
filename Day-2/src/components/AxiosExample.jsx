import React from "react";
import { useState } from "react";
import axios from "axios";

const AxiosExample = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const response = await axios.get("https://picsum.photos/v2/list");
    console.log(response.data);

    setData(response.data);
  };
  return (
    <div className="px-10 py-10">
      <button
        onClick={getData}
        className="bg-teal-900 ml-10 h-20 w-90 hover:bg-teal-700 text-white font-bold text-2xl py-2 px-4 rounded active:scale-95"
      >
        Get Data
      </button>
      <div className="bg-emerald-950 w-150 h-150 overflow-y-auto text-xl mx-10 mt-10 border-2 rounded p-4">
        {data.map((elem, id) => (
          <div key={id} className="border-b py-2 bg-white pb-5 pt-6 my-6 flex justify-center  text-black">
            <img src={elem.download_url} alt={elem.author} className="w-100 h-50 mb-2"/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AxiosExample;
