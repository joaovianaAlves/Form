"use Client";
import { useState } from "react";
import InputField from "./components/InputField";
import "./index.css";
import ProductsView from "./components/ProductsView";
export default function App() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [available, setAvailable] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newProduct = {
      name,
      description,
      value,
      available,
    };
    setProducts([...products, newProduct]);
    setName("");
    setDescription("");
    setValue("");
    setAvailable(true);
    console.log(products);
  };
  return (
    <main className="flex  flex-col justify-center items-center mx-auto h-screen bg-[#003C43]">
      <h2 className="font-semibold mb-6 text-2xl text-[#E3FEF7]">
        Cadastro de Produtos:
      </h2>
      <form
        onSubmit={handleSubmit}
        className="bg-[#135D66] p-8 rounded-xl shadow-md w-1/4"
      >
        <InputField
          text={"Nome"}
          type={"text"}
          value={name}
          onChange={setName}
        />
        <InputField
          text={"Descrição"}
          type={"text"}
          value={description}
          onChange={setDescription}
        />
        <InputField
          text={"Valor"}
          type={"number"}
          value={value}
          onChange={setValue}
        />
        <div className="flex items-center mb-4">
          <span className="mr-4 text-[#E3FEF7]">Disponivel:</span>
          <div className="flex items-center">
            <InputField
              text={"Sim"}
              type={"radio"}
              name={"disponibilidade"}
              id={"sim"}
              value={available}
              onChange={setAvailable}
            />
            <InputField
              text={"Não"}
              type={"radio"}
              name={"disponibilidade"}
              id={"nao"}
              value={available}
              onChange={setAvailable}
            />
          </div>
        </div>
        <div className="flex justify-between gap-5">
          <button
            type="submit"
            className="bg-[#003C43] text-[#E3FEF7] w-full p-4 rounded-xl hover:bg-[#77B0AA] focus:outline-none"
          >
            Cadastrar
          </button>
        </div>
      </form>
      <ProductsView products={products} />
    </main>
  );
}
