import React, { useEffect, useState } from "react";
import axios from "axios";

import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";

const baseURL = "http://localhost:3000/users";
const title = "text-white text-[1.2rem] font-primary font-medium";
const info = "text-white font-primary font-medium text-[1.1rem]";

export default function Users() {
  const [data, setData] = useState([]);

  const handleGetList = async () => {
    try {
      const response = await axios.get(baseURL);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(data);

  useEffect(() => {
    handleGetList();
  }, []);

  const handleHeade = () => {
    return (
      <table className="bg-[#2D2D2D] w-[800px] max-h-[450px] flex flex-col items-center justify-center gap-3 rounded-[0.5rem] pb-3">
        <thead className="w-full bg-principal rounded-tr-[0.5rem] rounded-tl-[0.5rem] py-3 ">
          <tr className="flex itens-center justify-around">
            <th className={title}>Name</th>
            <th className={title}>Email</th>
            <th className={title}>Nick</th>
            <th className={title}>Edit</th>
          </tr>
        </thead>
        <tbody className="w-[750px] overflow-y-auto bar">{handleBody()}</tbody>
      </table>
    );
  };

  const handleBody = () => {
    return data.map((user) => {
      return (
        <tr
          key={user.id}
          className={`flex items-center justify-around gap-3 rounded-[0.5rem] py-2 ${
            user.id % 2 === 0 ? " " : " bg-black/50"
          }`}
        >
          <td className={info}>{user.name}</td>
          <td className={info}>{user.email}</td>
          <td className={info}>{user.nick}</td>
          <td className="flex gap-3">
            <button>
              <FaPencilAlt className=" text-[#4DAB14] cursor-pointer" />
            </button>
            <button>
              <FaTrashAlt className=" text-[#B12121] cursor-pointer" />
            </button>
          </td>
        </tr>
      );
    });
  };

  return (
    <main className="h-full flex flex-col items-center justify-center">
      <div
        className="max-h-[800px] w-[900px] overflow-x-hidden flex flex-col items-center justify-between gap-3 py-4 px-14 
      border-[3px] rounded-[1rem] border-principal"
      >
        <h1 className="text-principal font-primary font-medium text-[4.5rem]">
          Users
        </h1>
        {handleHeade()}
      </div>
    </main>
  );
}
