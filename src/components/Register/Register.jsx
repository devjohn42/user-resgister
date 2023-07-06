import React from "react";

const input = `bg-content py-[0.5rem] px-[1rem] rounded-[0.5rem] outline-none 
  drop-shadow-[0_0px_2px_rgba(0,0,0,0.6)] font-normal text-lg font-primary 
  text-principal placeholder-white/30`;

export default function Register() {
  return (
    <main className="h-full flex flex-col items-center justify-center">
      <div
        className="flex flex-col items-center justify-center py-10 px-14 
      border-[3px] rounded-[1rem] border-principal"
      >
        <h1 className="text-principal font-primary font-medium text-[5rem] mb-6">
          Register
        </h1>
        <form className="w-[400px] flex flex-col gap-y-7">
          <input
            type="text"
            name="nome"
            placeholder="Nome..."
            className={input}
          />
          <input
            type="email"
            name="email"
            placeholder="Email..."
            className={input}
          />
          <input
            type="text"
            name="apelido"
            placeholder="Apelido..."
            className={input}
          />
        </form>
        <div className="w-[400px] mt-8 flex items-center justify-around">
          <button
            className="bg-principal/70 py-1 px-8 font-primary text-lg font-bold 
          text-white rounded-[0.5rem] duration-300 
          hover:bg-principal hover:ease-in hover:duration-300"
          >
            Registrar
          </button>
          <button
            className="bg-warning/70 py-1 px-8 font-primary text-lg font-bold 
          text-white rounded-[0.5rem] duration-300 
          hover:bg-warning hover:ease-in hover:duration-300"
          >
            Cancelar
          </button>
        </div>
      </div>
    </main>
  );
}
