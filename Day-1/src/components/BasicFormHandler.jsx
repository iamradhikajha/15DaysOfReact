import { useState } from "react";

export default function BasicFormHandler() {
  const [inputName, setInputName] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setName(inputName);
    setInputName("");
  };
  return (
    <div>
      <div className="h-80 w-140 bg-blue-200 mx-auto mt-10 px-10 py-10 rounded-2xl border-b-blue-800 border-2">
        <h1 className="text-3xl font-bold pb-10">
          welcome {name || "user"} to my webiste
        </h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your name"
            className="bg-blue-100 h-10 w-full mb-10 rounded-2xl text-center"
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
          />
          <button
            className="h-10 w-40 rounded-2xl text-2xl text-white bg-blue-950 px-1 py-1"
            type="submit"
          >
            Change
          </button>
        </form>
      </div>
    </div>
  );
}
