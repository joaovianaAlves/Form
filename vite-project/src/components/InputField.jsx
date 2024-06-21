"use Client";
import React, { useState } from "react";

export default function InputField({ text, type, name, id }) {
  const [value, setValue] = useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return type === "radio" ? (
    <label className="flex items-center mr-4 text-[#E3FEF7]">
      <input
        type={type}
        value={value}
        id={id}
        name={name}
        onChange={handleChange}
        className="mr-1 text-[#E3FEF7] outline-none"
      />
      {text}
    </label>
  ) : (
    <div className="flex flex-col">
      <label className="mb-2 text-[#E3FEF7]"> {text}</label>
      <input
        type={type}
        placeholder={text}
        className="border p-4 rounded-xl mb-2 outline-none"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
