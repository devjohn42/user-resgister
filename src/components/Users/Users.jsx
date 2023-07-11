import React, { useEffect, useState } from "react";
import axios from "axios";

const baseURL = "http://localhost:3000/users";

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

  console.log(data);

  useEffect(() => {
    handleGetList();
  }, []);

  return (
    <main className="h-full flex flex-col items-center justify-center">
      <div
        className="w-[650px] flex flex-col items-center justify-center py-10 px-14 
      border-[3px] rounded-[1rem] border-principal"
      >
        <h1>Users</h1>
        <div className=" flex flex-col  gap-3">
          <div className="w-[630px] flex justify-around bg-principal rounded">
            <h1>Name</h1>
            <h1>Email</h1>
            <h1>Nick</h1>
            <h1>Edit</h1>
          </div>
          {data.map((user) => {
            return (
              <div key={user.id} className="flex items-left justify-left gap-5">
                <p className="text-principal">{user.name}</p>
                <p className="text-principal">{user.email}</p>
                <p className="text-principal">{user.nick}</p>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
