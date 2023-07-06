import React from "react";

export default function Home() {
  return (
    <main className="h-full flex flex-col items-center justify-center">
      <div className="max-w-[600px] flex flex-col items-center justify-center">
        <h1 className="text-principal font-primary font-medium text-[6.5rem] font">
          Hello Guest
        </h1>
        <p className="text-white text-center justify-center font-primary font-normal text-[2.5rem]">
          Welcome to this small discord registration system
        </p>
      </div>
    </main>
  );
}
