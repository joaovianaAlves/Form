import InputField from "./components/InputField";
import "./index.css";
export default function App() {
  return (
    <main className="flex  flex-col justify-center items-center mx-auto h-screen bg-[#003C43]">
      <h2 className="font-semibold mb-6 text-2xl text-[#E3FEF7]">
        Cadastro de Produtos:
      </h2>
      <form className="bg-[#135D66] p-8 rounded-xl shadow-md w-1/2">
        <InputField text={"Nome"} type={"text"} />
        <InputField text={"Descrição"} type={"text"} />
        <InputField text={"Valor"} type={"number"} />
        <div className="flex items-center mb-4">
          <span className="mr-4 text-[#E3FEF7]">Disponivel:</span>
          <div className="flex items-center">
            <InputField
              text={"Sim"}
              type={"radio"}
              name={"disponibilidade"}
              id={"sim"}
            />
            <InputField
              text={"Não"}
              type={"radio"}
              name={"disponibilidade"}
              id={"nao"}
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-[#003C43] text-[#E3FEF7] w-full p-4 rounded-xl hover:bg-[#77B0AA] focus:outline-none"
        >
          Cadastrar
        </button>
      </form>
    </main>
  );
}
