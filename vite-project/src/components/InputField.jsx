"use Client";
import { useState } from "react";
import "../index.css";

// eslint-disable-next-line react/prop-types
export default function InputField({ text, type, name, id }) {
  const [value, setValue] = useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return type === "radio" ? (
    <div>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
        className="hidden"
      />
      <label
        htmlFor={id}
        className={`check flex items-center cursor-pointer border p-1 px-2 text-[#E3FEF7] ${
          id === "sim" ? "rounded-l-2xl" : "rounded-r-2xl"
        }`}
      >
        {text}
      </label>
    </div>
  ) : (
    <div className="relative flex flex-col mb-5">
      <label className="absolute bottom-11 left-4 mb-2 p-1 text-[#E3FEF7] bg-[#135D66]">
        {text}
      </label>
      <input
        type={type}
        className="border p-4 rounded-xl mb-2 outline-none bg-transparent text-[#E3FEF7]"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
